import path from "path";
import { Uri, window } from "vscode";
import { createFile, extractClassName, sanitizeFileName } from "../File";
import resolveNamespace from "../Namespace";
import { openTextDocument } from "../Workspace";
import { commandsMapping, LaravelFileType } from "./commandMapping";
import generateLaravelFile from "./contentGenerator";

export default async function createLaravelFile(
  type: LaravelFileType,
  folder: Uri
) {
  let baseName = await getLaravelFileName(type);

  if (!baseName) {
    return;
  }

  baseName = sanitizeFileName(baseName);

  const className = extractClassName(baseName);

  const namespace = await resolveNamespace(folder.fsPath);

  const fileName = convertBasenameToFileName(type, baseName);
  const filePath = folder.fsPath + path.sep + fileName;

  const content = generateLaravelFile(type, className, namespace);

  createFile(filePath, content);

  openTextDocument(Uri.file(filePath));
}

async function getLaravelFileName(
  type: LaravelFileType
): Promise<string | undefined> {
  const name = await window.showInputBox(commandsMapping[type]);

  if (!name) {
    return;
  }

  return name;
}

function convertBasenameToFileName(
  type: LaravelFileType,
  baseName: string
): string {
  const now = new Date();
  const dateString = now
    .toISOString()
    .replace(/[-T]/g, "_")
    .replace(/:/g, "")
    .slice(0, -5);

  const transformations: Record<LaravelFileType, (name: string) => string> = {
    [LaravelFileType.BladeFile]: (name) => `${name}.blade`,
    [LaravelFileType.BladeComponentClass]: (name) =>
      name.endsWith("Component") ? name : `${name}Component`,
    [LaravelFileType.Config]: (name) => name.toLowerCase(),
    [LaravelFileType.ConsoleCommand]: (name) =>
      name.endsWith("Command") ? name : `${name}Command`,
    [LaravelFileType.Controller]: (name) =>
      name.endsWith("Controller") ? name : `${name}Controller`,
    [LaravelFileType.Event]: (name) =>
      name.endsWith("Event") ? name : `${name}Event`,
    [LaravelFileType.EventListener]: (name) =>
      name.endsWith("Listener") ? name : `${name}Listener`,
    [LaravelFileType.Exception]: (name) =>
      name.endsWith("Exception") ? name : `${name}Exception`,
    [LaravelFileType.FormRequest]: (name) =>
      name.endsWith("Request") ? name : `${name}Request`,
    [LaravelFileType.Job]: (name) =>
      name.endsWith("Job") ? name : `${name}Job`,
    [LaravelFileType.Model]: (name) => name,
    [LaravelFileType.Migration]: (name) => `${dateString}_${name}`,
  };

  return `${transformations[type](baseName)}.php`;
}
