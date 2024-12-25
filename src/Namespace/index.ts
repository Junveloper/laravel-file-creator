import { existsSync, statSync } from "fs";
import * as path from "path";
import * as vscode from "vscode";

type ComposerOutcome = {
  composerFolder?: string;
  composerPath?: string;
  composerFound: boolean;
};

type PsrEntry = {
  ns: string;
  path: string;
  type: "psr-4" | "psr-0";
};

type ComposerJson = {
  autoload?: Partial<Record<PsrEntry["type"], Record<string, string>>>;
  "autoload-dev"?: Partial<Record<PsrEntry["type"], Record<string, string>>>;
};

type MatchedPath = {
  path: string;
  prefix: string;
  length: number;
  priority: number;
};

export default async function resolveNamespace(
  folder: string
): Promise<string | undefined> {
  const { composerFolder, composerPath, composerFound } =
    findComposerFile(folder);

  if (!composerFound || !composerFolder || !composerPath) {
    await vscode.window.showErrorMessage(
      "The composer.json file could not be found."
    );
    return undefined;
  }

  const composer = await getComposerContent(composerPath);

  if (!composer) {
    await vscode.window.showErrorMessage(
      "The composer.json file could not be read."
    );
    return undefined;
  }

  const psrEntries = collectPsrEntries(composer);

  const pathMatches = psrEntries
    .map((entry): MatchedPath | null => {
      const pathNoLastSlash = removeLastPathSeparator(entry.path);

      const resolvedPath = path.resolve(composerFolder, pathNoLastSlash);

      if (folder.indexOf(resolvedPath) !== -1) {
        return {
          path: ensureEndsWithSystemSeparator(resolvedPath),
          prefix: normalizeNamespace(entry.ns),
          length: resolvedPath.length,
          priority: entry.type === "psr-4" ? 1 : 0,
        };
      }

      return null;
    })
    .filter((entry) => entry !== null);

  if (pathMatches.length === 0) {
    await vscode.window.showErrorMessage(
      "The namespace could not be resolved."
    );
    return "";
  }

  const finalFolder = ensureEndsWithSystemSeparator(folder);

  const resolved = finalFolder
    .replace(pathMatches[0].path, pathMatches[0].prefix)
    .replace(/\//g, "\\");

  return removeLastPathSeparator(resolved);
}

function findComposerFile(folder: string): ComposerOutcome {
  const workspaceFolder = vscode.workspace.getWorkspaceFolder(
    vscode.Uri.file(folder)
  );

  if (!workspaceFolder) {
    return {
      composerFound: false,
    };
  }

  const workspaceFolderPath = workspaceFolder.uri.fsPath;

  const composerFilePath = vscode.workspace
    .getConfiguration("laravelFileCreator")
    .get("composerFilePath");

  if (typeof composerFilePath === "string" && composerFilePath !== "") {
    return parseComposerFilePath(composerFilePath, workspaceFolderPath);
  }

  const segments = folder.split(path.sep);

  while (segments.length) {
    const composerFolder = segments.join(path.sep);
    const composerPath = path.join(composerFolder, "composer.json");

    try {
      statSync(composerPath);
      return {
        composerFolder: ensureEndsWithSystemSeparator(composerFolder),
        composerPath,
        composerFound: true,
      };
    } catch {
      segments.pop();
    }

    if (composerFolder === workspaceFolderPath) {
      break;
    }
  }

  return { composerFound: false };
}

function parseComposerFilePath(
  composerFilePath: string,
  workspaceFolder: string
): ComposerOutcome {
  const folder = path.join(workspaceFolder || "", composerFilePath);
  const parsedPath = path.parse(folder);

  if (parsedPath.ext === ".json") {
    return {
      composerFolder: ensureEndsWithSystemSeparator(path.dirname(folder)),
      composerPath: folder,
      composerFound: true,
    };
  }

  const filePath = path.join(folder, "composer.json");

  if (!existsSync(filePath)) {
    return { composerFound: false };
  }

  return {
    composerFolder: ensureEndsWithSystemSeparator(folder),
    composerPath: filePath,
    composerFound: true,
  };
}

function ensureEndsWithSystemSeparator(folder: string) {
  if (!folder.endsWith(path.sep)) {
    folder += path.sep;
  }

  return folder;
}

async function getComposerContent(
  composerFilePath: string
): Promise<ComposerJson | undefined> {
  try {
    let composerContent: string = (
      await vscode.workspace.openTextDocument(composerFilePath)
    ).getText();
    return JSON.parse(composerContent);
  } catch (error) {
    return undefined;
  }
}

function collectPsrEntries(composer: ComposerJson): PsrEntry[] {
  const autoloads: Array<keyof ComposerJson> = ["autoload", "autoload-dev"];
  const psrs: PsrEntry["type"][] = ["psr-4", "psr-0"];

  return autoloads
    .flatMap((autoload) => {
      const autoloadSection = composer[autoload];

      if (!autoloadSection) {
        return [];
      }

      return psrs.flatMap((psr) => {
        const psrSection = autoloadSection[psr];
        if (!psrSection) {
          return [];
        }

        return Object.entries(psrSection).map(([ns, path]) => ({
          ns,
          path: ensurePathEndsWithSlash(path),
          type: psr,
        }));
      });
    })
    .flat();
}

function ensurePathEndsWithSlash(path: string) {
  if (!path.endsWith("/")) {
    path += "/";
  }

  return path;
}

function removeLastPathSeparator(namespacePath: string) {
  if (namespacePath.endsWith("/") || namespacePath.endsWith("\\")) {
    return namespacePath.slice(0, -1);
  }

  return namespacePath;
}

function normalizeNamespace(ns: string) {
  if (!ns.endsWith("\\")) {
    ns += "\\";
  }

  if (ns.startsWith("/") || ns.startsWith("\\")) {
    ns = ns.slice(1);
  }

  return ns;
}
