import { InputBoxOptions } from "vscode";

type Command = InputBoxOptions & {
  fileType: LaravelFileType;
  quickPickLabel: string;
  commandName: string;
};

export enum LaravelFileType {
  BladeFile = "Blade File",
  BladeComponentClass = "Blade Component Class",
  SingleActionController = "Single Action Controller",
  FormRequest = "Form Request",
  Model = "Model",
  Migration = "Migration",
}

export const commandsMapping: Record<LaravelFileType, Command> = {
  [LaravelFileType.BladeFile]: {
    fileType: LaravelFileType.BladeFile,
    quickPickLabel: "Blade File",
    commandName: "laravelFileCreator.createBladeFile",
    title: "New Blade File",
    placeHolder: "Blade File Name",
    prompt: "Name of Blade File (exclude .blade.php)",
  },
  [LaravelFileType.BladeComponentClass]: {
    fileType: LaravelFileType.BladeComponentClass,
    quickPickLabel: "Blade Component Class",
    commandName: "laravelFileCreator.createBladeComponentClass",
    title: "New Blade Component Class",
    placeHolder: "Component Class Name",
    prompt: "Name of Blade Component Class",
  },
  [LaravelFileType.SingleActionController]: {
    fileType: LaravelFileType.SingleActionController,
    quickPickLabel: "Single Action Controller",
    commandName: "laravelFileCreator.createSingleActionController",
    title: "New Single Action Controller",
    placeHolder: "Controller Name",
    prompt: "Name of Single Action Controller",
  },
  [LaravelFileType.FormRequest]: {
    fileType: LaravelFileType.FormRequest,
    quickPickLabel: "Form Request",
    commandName: "laravelFileCreator.createFormRequest",
    title: "New Form Request",
    placeHolder: "Form Request Name",
    prompt: "Name of Form Request",
  },
  [LaravelFileType.Model]: {
    fileType: LaravelFileType.Model,
    quickPickLabel: "Model",
    commandName: "laravelFileCreator.createModel",
    title: "New Model",
    placeHolder: "Model Name",
    prompt: "Name of Model",
  },
  [LaravelFileType.Migration]: {
    fileType: LaravelFileType.Migration,
    quickPickLabel: "Migration",
    commandName: "laravelFileCreator.createMigration",
    title: "New Migration",
    placeHolder: "Migration Name",
    prompt: "Name of Migration (use snake case)",
  },
};
