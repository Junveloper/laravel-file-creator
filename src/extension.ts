import * as vscode from "vscode";
import createLaravelFile from "./LaravelFile";
import { LaravelFileTypes } from "./LaravelFile/inputBoxMapping";
import { promptFolderSelection } from "./Workspace";

export function activate(context: vscode.ExtensionContext) {
  const createLaravelFileCommand = vscode.commands.registerCommand(
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

      createLaravelFile(fileType.value, folder);
    }
  );

  const createSingleActionController = vscode.commands.registerCommand(
    "laravelFileCreator.createSingleActionController",
    (folder) =>
      createLaravelFile(LaravelFileTypes.SingleActionController, folder)
  );

  const createFormRequest = vscode.commands.registerCommand(
    "laravelFileCreator.createFormRequest",
    (folder) => createLaravelFile(LaravelFileTypes.FormRequest, folder)
  );

  const createModel = vscode.commands.registerCommand(
    "laravelFileCreator.createModel",
    (folder) => createLaravelFile(LaravelFileTypes.Model, folder)
  );

  const createMigration = vscode.commands.registerCommand(
    "laravelFileCreator.createMigration",
    (folder) => createLaravelFile(LaravelFileTypes.Migration, folder)
  );

  context.subscriptions.push(createSingleActionController);
  context.subscriptions.push(createFormRequest);
  context.subscriptions.push(createModel);
  context.subscriptions.push(createMigration);

  context.subscriptions.push(createLaravelFileCommand);

  vscode.commands.executeCommand(
    "setContext",
    "laravelFileCreator.activated",
    true
  );
}

export function deactivate() {}
