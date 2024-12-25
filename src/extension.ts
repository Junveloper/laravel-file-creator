import * as vscode from "vscode";
import Creator, { LaravelFileTypes } from "./Creator";
import { promptFolderSelection } from "./Workspace";

export function activate(context: vscode.ExtensionContext) {
  const creator = new Creator();

  const createLaravelFile = vscode.commands.registerCommand(
    "laravelFileCreator.createLaravelFile",
    async (folder?: vscode.Uri) => {
      if (!folder) {
        folder = await promptFolderSelection();

        if (!folder) {
          return;
        }
      }

      const fileType = await vscode.window.showQuickPick(
        [
          {
            label: "Single Action Controller",
            value: LaravelFileTypes.SingleActionController,
          },
          { label: "Form Request", value: LaravelFileTypes.FormRequest },
          { label: "Model", value: LaravelFileTypes.Model },
          { label: "Migration", value: LaravelFileTypes.Migration },
        ],
        { placeHolder: "Select the type of file to create" }
      );

      if (!fileType) {
        return;
      }

      creator.createFile(fileType.value, folder);
    }
  );

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

  const createMigration = vscode.commands.registerCommand(
    "laravelFileCreator.createMigration",
    (folder) => creator.createFile(LaravelFileTypes.Migration, folder)
  );

  context.subscriptions.push(createSingleActionController);
  context.subscriptions.push(createFormRequest);
  context.subscriptions.push(createModel);
  context.subscriptions.push(createMigration);

  context.subscriptions.push(createLaravelFile);

  vscode.commands.executeCommand(
    "setContext",
    "laravelFileCreator.activated",
    true
  );
}

export function deactivate() {}
