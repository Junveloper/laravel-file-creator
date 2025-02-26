import { existsSync, writeFileSync } from "fs";
import { Uri, window, workspace } from "vscode";
import {
  commandsMapping,
  SupportedFileType,
} from "../LaravelFile/commandMapping";

function createFile(filePath: string, content: string) {
  if (existsSync(filePath)) {
    window.showErrorMessage("The file already exists.");
    return;
  }

  writeFileSync(filePath, content);
}

function removeSpaces(name: string) {
  return name.replace(/\s+/g, "");
}

function removeExtension(name: string) {
  return name.split(".")[0];
}

function sanitizeFileName(name: string) {
  return removeSpaces(removeExtension(name));
}

function extractClassName(name: string) {
  return name.replace(/\.php+$/g, "");
}

async function resolveDefaultUriForType(
  type: SupportedFileType
): Promise<Uri | undefined> {
  const commandMapping = commandsMapping[type];

  if (!commandMapping.defaultFilePath) {
    return undefined;
  }

  const workspaceRoots = workspace.workspaceFolders;

  if (!workspaceRoots || workspaceRoots.length === 0) {
    return undefined;
  }

  const rootPath = workspaceRoots[0].uri.fsPath;

  return Uri.file(`${rootPath}/${commandMapping.defaultFilePath}`);
}

export {
  createFile,
  extractClassName,
  removeExtension,
  resolveDefaultUriForType,
  sanitizeFileName,
};
