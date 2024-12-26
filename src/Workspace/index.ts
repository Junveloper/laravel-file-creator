import { Uri, window, workspace } from "vscode";

async function promptFolderSelection(): Promise<Uri | undefined> {
  const selection = await window.showOpenDialog({
    canSelectFiles: false,
    canSelectFolders: true,
    canSelectMany: false,
  });

  if (!selection || !selection[0]) {
    return;
  }

  return selection[0];
}

async function openTextDocument(uri: Uri) {
  const document = await workspace.openTextDocument(uri);
  await window.showTextDocument(document);
}

export { openTextDocument, promptFolderSelection };
