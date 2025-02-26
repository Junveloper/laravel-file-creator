import path from "path";
import { Uri, window } from "vscode";
import {
  createFile,
  extractClassName,
  resolveDefaultUriForType,
  sanitizeFileName,
} from "../File";
import resolveNamespace from "../Namespace";
import { openTextDocument, promptFolderSelection } from "../Workspace";
import { commandsMapping, SupportedFileType } from "./commandMapping";
import generateLaravelFile from "./contentGenerator";

export default async function createLaravelFile(
  type: SupportedFileType,
  folder?: Uri
) {
  let baseName = await getLaravelFileName(type);

  if (!baseName) {
    return;
  }

  const locationFolder =
    folder ||
    (await resolveDefaultUriForType(type)) ||
    (await promptFolderSelection());

  if (!locationFolder) {
    return;
  }

  baseName = sanitizeFileName(baseName, type);

  const className = extractClassName(baseName);

  const namespace = await resolveNamespace(locationFolder.fsPath);

  const fileName = convertBasenameToFileName(type, baseName);
  const filePath = locationFolder.fsPath + path.sep + fileName;

  const content = generateLaravelFile(type, className, namespace);

  createFile(filePath, content);

  openTextDocument(Uri.file(filePath));
}

async function getLaravelFileName(
  type: SupportedFileType
): Promise<string | undefined> {
  const name = await window.showInputBox(commandsMapping[type]);

  if (!name) {
    return;
  }

  return name;
}

function convertBasenameToFileName(
  type: SupportedFileType,
  baseName: string
): string {
  const now = new Date();
  const dateString = now
    .toISOString()
    .replace(/[-T]/g, "_")
    .replace(/:/g, "")
    .slice(0, -5);

  const transformations: Record<SupportedFileType, (name: string) => string> = {
    [SupportedFileType.PhpClass]: (name) => name,
    [SupportedFileType.PhpInterface]: (name) => name,
    [SupportedFileType.PhpTrait]: (name) => name,
    [SupportedFileType.PhpEnum]: (name) => name,
    [SupportedFileType.BladeFile]: (name) => `${name}.blade`,
    [SupportedFileType.BladeComponentClass]: (name) =>
      name.endsWith("Component") ? name : `${name}Component`,
    [SupportedFileType.Config]: (name) => name.toLowerCase(),
    [SupportedFileType.ConsoleCommand]: (name) =>
      name.endsWith("Command") ? name : `${name}Command`,
    [SupportedFileType.Controller]: (name) =>
      name.endsWith("Controller") ? name : `${name}Controller`,
    [SupportedFileType.Event]: (name) =>
      name.endsWith("Event") ? name : `${name}Event`,
    [SupportedFileType.EventListener]: (name) =>
      name.endsWith("Listener") ? name : `${name}Listener`,
    [SupportedFileType.Exception]: (name) =>
      name.endsWith("Exception") ? name : `${name}Exception`,
    [SupportedFileType.FormRequest]: (name) =>
      name.endsWith("Request") ? name : `${name}Request`,
    [SupportedFileType.Job]: (name) =>
      name.endsWith("Job") ? name : `${name}Job`,
    [SupportedFileType.JsonResource]: (name) =>
      name.endsWith("Resource") ? name : `${name}Resource`,
    [SupportedFileType.JsonResourceCollection]: (name) =>
      name.endsWith("Collection") ? name : `${name}Collection`,
    [SupportedFileType.Mailable]: (name) =>
      name.endsWith("Mail") ? name : `${name}Mail`,
    [SupportedFileType.Model]: (name) => name,
    [SupportedFileType.Migration]: (name) => `${dateString}_${name}`,
    [SupportedFileType.Notification]: (name) =>
      name.endsWith("Notification") ? name : `${name}Notification`,
    [SupportedFileType.PestTest]: (name) =>
      name.endsWith("Test") ? name : `${name}Test`,
    [SupportedFileType.Policy]: (name) =>
      name.endsWith("Policy") ? name : `${name}Policy`,
    [SupportedFileType.ResourceController]: (name) =>
      name.endsWith("Controller") ? name : `${name}Controller`,
    [SupportedFileType.Rule]: (name) =>
      name.endsWith("Rule") ? name : `${name}Rule`,
  };

  return `${transformations[type](baseName)}.php`;
}
