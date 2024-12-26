import { commands, ExtensionContext, Uri, window } from "vscode";
import createLaravelFile from "./LaravelFile";
import { commandsMapping } from "./LaravelFile/commandMapping";
import { promptFolderSelection } from "./Workspace";

export function activate(context: ExtensionContext) {
  const createLaravelFileCommand = commands.registerCommand(
    "laravelFileCreator.createLaravelFile",
    async (folder?: Uri) => {
      if (!folder) {
        folder = await promptFolderSelection();

        if (!folder) {
          return;
        }
      }

      const fileType = await window.showQuickPick(
        Object.values(commandsMapping).map(({ quickPickLabel, fileType }) => ({
          label: quickPickLabel,
          value: fileType,
        })),
        { placeHolder: "Select the type of file to create" }
      );

      if (!fileType) {
        return;
      }

      createLaravelFile(fileType.value, folder);
    }
  );

  context.subscriptions.push(createLaravelFileCommand);

  Object.values(commandsMapping).forEach(({ commandName, fileType }) => {
    const disposable = commands.registerCommand(commandName, (folder) =>
      createLaravelFile(fileType, folder)
    );
    context.subscriptions.push(disposable);
  });

  commands.executeCommand("setContext", "laravelFileCreator.activated", true);
}

export function deactivate() {}
