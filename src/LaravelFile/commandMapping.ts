import { InputBoxOptions } from "vscode";

type Command = InputBoxOptions & {
  fileType: LaravelFileType;
  quickPickLabel: string;
  commandName: string;
  contextTitle: string;
  when?: string;
  group: string;
  configuration?: {
    type: string;
    default: boolean;
    markdownDescription: string;
    order: number;
  };
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
    contextTitle: "Create Blade File",
    group: "1_laravelFileCreator@1",
    when: "explorerResourceIsFolder && phpCreateClass.activated",
    configuration: {
      type: "boolean",
      default: true,
      markdownDescription:
        "Show in the 'New Laravel file...' menu to create a blade file",
      order: 1,
    },
  },
  [LaravelFileType.BladeComponentClass]: {
    fileType: LaravelFileType.BladeComponentClass,
    quickPickLabel: "Blade Component Class",
    commandName: "laravelFileCreator.createBladeComponentClass",
    title: "New Blade Component Class",
    placeHolder: "Component Class Name",
    prompt: "Name of Blade Component Class",
    contextTitle: "Create Blade Component Class",
    group: "1_laravelFileCreator@2",
    when: "explorerResourceIsFolder && phpCreateClass.activated",
    configuration: {
      type: "boolean",
      default: true,
      markdownDescription:
        "Show in the 'New Laravel file...' menu to create a blade component class",
      order: 2,
    },
  },
  [LaravelFileType.SingleActionController]: {
    fileType: LaravelFileType.SingleActionController,
    quickPickLabel: "Single Action Controller",
    commandName: "laravelFileCreator.createSingleActionController",
    title: "New Single Action Controller",
    placeHolder: "Controller Name",
    prompt: "Name of Single Action Controller",
    contextTitle: "Create Single Action Controller",
    group: "1_laravelFileCreator@3",
    when: "explorerResourceIsFolder && phpCreateClass.activated",
    configuration: {
      type: "boolean",
      default: true,
      markdownDescription:
        "Show in the 'New Laravel file...' menu to create a single action controller",
      order: 3,
    },
  },
  [LaravelFileType.FormRequest]: {
    fileType: LaravelFileType.FormRequest,
    quickPickLabel: "Form Request",
    commandName: "laravelFileCreator.createFormRequest",
    title: "New Form Request",
    placeHolder: "Form Request Name",
    prompt: "Name of Form Request",
    contextTitle: "Create Form Request",
    group: "1_laravelFileCreator@4",
    when: "explorerResourceIsFolder && phpCreateClass.activated",
    configuration: {
      type: "boolean",
      default: true,
      markdownDescription:
        "Show in the 'New Laravel file...' menu to create a form request",
      order: 4,
    },
  },
  [LaravelFileType.Model]: {
    fileType: LaravelFileType.Model,
    quickPickLabel: "Model",
    commandName: "laravelFileCreator.createModel",
    title: "New Model",
    placeHolder: "Model Name",
    prompt: "Name of Model",
    contextTitle: "Create Model",
    group: "1_laravelFileCreator@5",
    when: "explorerResourceIsFolder && phpCreateClass.activated",
    configuration: {
      type: "boolean",
      default: true,
      markdownDescription:
        "Show in the 'New Laravel file...' menu to create a model",
      order: 5,
    },
  },
  [LaravelFileType.Migration]: {
    fileType: LaravelFileType.Migration,
    quickPickLabel: "Migration",
    commandName: "laravelFileCreator.createMigration",
    title: "New Migration",
    placeHolder: "Migration Name",
    prompt: "Name of Migration (use snake case)",
    contextTitle: "Create Migration",
    group: "1_laravelFileCreator@6",
    when: "explorerResourceIsFolder && phpCreateClass.activated",
    configuration: {
      type: "boolean",
      default: true,
      markdownDescription:
        "Show in the 'New Laravel file...' menu to create a migration",
      order: 6,
    },
  },
};
