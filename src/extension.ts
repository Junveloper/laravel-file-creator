import * as vscode from "vscode";
import Creator, { LaravelFileTypes } from "./Creator";

export function activate(context: vscode.ExtensionContext) {
  const creator = new Creator();

  const createLaravelFile = vscode.commands.registerCommand(
    "laravelFileCreator.createLaravelFile",
    async (folder) => {
      if (!folder) {
        folder = await vscode.window.showOpenDialog({
          canSelectFiles: false,
          canSelectFolders: true,
          canSelectMany: false,
        });

        if (!folder || !folder[0]) {
          return;
        }

        folder = folder[0];
      }

      // Display a Quick Pick menu to select file type
      const fileType = await vscode.window.showQuickPick(
        [
          {
            label: "Single Action Controller",
            value: LaravelFileTypes.SingleActionController,
          },
          { label: "Form Request", value: LaravelFileTypes.FormRequest },
          { label: "Model", value: LaravelFileTypes.Model },
        ],
        { placeHolder: "Select the type of file to create" }
      );

      if (!fileType) {
        return; // Exit if the user cancels the Quick Pick
      }

      // Call the createFile method with the selected type
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

  context.subscriptions.push(createLaravelFile);
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
