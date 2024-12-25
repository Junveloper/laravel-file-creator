import * as vscode from "vscode";

export default async function promptFolderSelection(): Promise<
  vscode.Uri | undefined
> {
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
