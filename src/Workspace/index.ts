import * as vscode from "vscode";

async function promptFolderSelection(): Promise<vscode.Uri | undefined> {
  const selection = await vscode.window.showOpenDialog({
    canSelectFiles: false,
    canSelectFolders: true,
    canSelectMany: false,
  });

  if (!selection || !selection[0]) {
    return;
  }

  return selection[0];
}

async function openTextDocument(uri: vscode.Uri) {
  const document = await vscode.workspace.openTextDocument(uri);
  await vscode.window.showTextDocument(document);
}

export { openTextDocument, promptFolderSelection };
