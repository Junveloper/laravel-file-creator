import * as vscode from "vscode";
import Creator, { LaravelFileTypes } from "./Creator";

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

  const createModel = vscode.commands.registerCommand(
    "laravelFileCreator.createModel",
    (folder) => creator.createFile(LaravelFileTypes.Model, folder)
  );

  context.subscriptions.push(createSingleActionController);
  context.subscriptions.push(createFormRequest);
  context.subscriptions.push(createModel);

  vscode.commands.executeCommand(
    "setContext",
    "laravelFileCreator.activated",
    true
  );
}

export function deactivate() {}
