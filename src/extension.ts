// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
import Creator, { LaravelFileTypes } from "./Creator";

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  const creator = new Creator();

  const createSingleActionController = vscode.commands.registerCommand(
    "laravelFileCreator.createSingleActionController",
    (folder) =>
      creator.createFile(LaravelFileTypes.SingleActionController, folder)
  );

  const createFormRequest = vscode.commands.registerCommand(
    "laravelFileCreator.createFormRequest",
    (folder) => creator.createFile(LaravelFileTypes.FormRequest, folder)
  );

  context.subscriptions.push(createSingleActionController);
  context.subscriptions.push(createFormRequest);

  vscode.commands.executeCommand(
    "setContext",
    "laravelFileCreator.activated",
    true
  );
}

export function deactivate() {}
