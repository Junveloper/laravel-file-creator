import * as vscode from "vscode";
import { LaravelFileTypes } from "../Creator";
import { extractClassName, sanitizeFileName } from "../File";
import resolveNamespace from "../Namespace";
import { inputBoxMapping } from "./inputBoxMapping";

async function createLaravelFile(type: LaravelFileTypes, folder: vscode.Uri) {
  let baseName = await getLaravelFileName(type);

  if (!baseName) {
    return;
  }

  baseName = sanitizeFileName(baseName);

  const className = extractClassName(baseName);
  const namespace = await resolveNamespace(folder.fsPath);
  const fileName = convertBasenameForType(type, baseName);
}

async function getLaravelFileName(
  type: LaravelFileTypes
): Promise<string | undefined> {
  const name = await vscode.window.showInputBox(inputBoxMapping[type]);

  if (!name) {
    return;
  }

  return name;
}

function convertBasenameForType(
  type: LaravelFileTypes,
  baseName: string
): string {
  const now = new Date();
  const dateString = now
    .toISOString()
    .replace(/[-T]/g, "_")
    .replace(/:/g, "")
    .slice(0, -5);

  const transformations: Record<LaravelFileTypes, (name: string) => string> = {
    [LaravelFileTypes.SingleActionController]: (name) =>
      name.endsWith("Controller") ? name : `${name}Controller`,
    [LaravelFileTypes.FormRequest]: (name) =>
      name.endsWith("Request") ? name : `${name}Request`,
    [LaravelFileTypes.Model]: (name) => name,
    [LaravelFileTypes.Migration]: (name) => `${dateString}_${name}`,
  };

  return `${transformations[type](baseName)}.php`;
}
