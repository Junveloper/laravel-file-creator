import { InputBoxOptions } from "vscode";

export type Command = InputBoxOptions & {
  fileType: LaravelFileType;
  quickPickLabel: string;
  commandName: string;
  contextTitle: string;
  when: string;
  group: string;
  configuration: {
    key: string;
    type: string;
    default: boolean;
    markdownDescription: string;
    order: number;
  };
};

export enum LaravelFileType {
  BladeFile = "Blade File",
  BladeComponentClass = "Blade Component Class",
  Config = "Config",
  Command = "Command",
  SingleActionController = "Single Action Controller",
  FormRequest = "Form Request",
  Model = "Model",
  Migration = "Migration",
}

function getEnumIndex(enumObj: object, value: string): number {
  return Object.values(enumObj).indexOf(value);
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
    group: `1_laravelFileCreator@${
      getEnumIndex(LaravelFileType, LaravelFileType.BladeFile) + 1
    }`,
    when: "explorerResourceIsFolder && laravelFileCreator.activated && config.laravelFileCreator.showCreateBladeFile",
    configuration: {
      key: "laravelFileCreator.showCreateBladeFile",
      type: "boolean",
      default: false,
      markdownDescription:
        "Show in the 'New Laravel file...' menu to create a Blade file",
      order: getEnumIndex(LaravelFileType, LaravelFileType.BladeFile) + 1,
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
    group: `1_laravelFileCreator@${
      getEnumIndex(LaravelFileType, LaravelFileType.BladeComponentClass) + 1
    }`,
    when: "explorerResourceIsFolder && laravelFileCreator.activated && config.laravelFileCreator.showCreateBladeComponentClass",
    configuration: {
      key: "laravelFileCreator.showCreateBladeComponentClass",
      type: "boolean",
      default: false,
      markdownDescription:
        "Show in the 'New Laravel file...' menu to create a Blade Component class",
      order:
        getEnumIndex(LaravelFileType, LaravelFileType.BladeComponentClass) + 1,
    },
  },
  [LaravelFileType.Config]: {
    fileType: LaravelFileType.Config,
    quickPickLabel: "Config File",
    commandName: "laravelFileCreator.createConfig",
    title: "New Config",
    placeHolder: "Config Name",
    prompt: "Name of Config",
    contextTitle: "Create Config File",
    group: `1_laravelFileCreator@${
      getEnumIndex(LaravelFileType, LaravelFileType.Config) + 1
    }`,
    when: "explorerResourceIsFolder && laravelFileCreator.activated && config.laravelFileCreator.showCreateConfig",
    configuration: {
      key: "laravelFileCreator.showCreateConfig",
      type: "boolean",
      default: true,
      markdownDescription:
        "Show in the 'New Laravel file...' menu to create a Config file",
      order: getEnumIndex(LaravelFileType, LaravelFileType.Config) + 1,
    },
  },
  [LaravelFileType.Command]: {
    fileType: LaravelFileType.Command,
    quickPickLabel: "Command",
    commandName: "laravelFileCreator.createCommand",
    title: "New Command",
    placeHolder: "Command Name",
    prompt: "Name of Command",
    contextTitle: "Create Command",
    group: `1_laravelFileCreator@${
      getEnumIndex(LaravelFileType, LaravelFileType.Command) + 1
    }`,
    when: "explorerResourceIsFolder && laravelFileCreator.activated",
    configuration: {
      key: "laravelFileCreator.showCreateCommand",
      type: "boolean",
      default: true,
      markdownDescription:
        "Show in the 'New Laravel file...' menu to create a Command",
      order: getEnumIndex(LaravelFileType, LaravelFileType.Command) + 1,
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
    group: `1_laravelFileCreator@${
      getEnumIndex(LaravelFileType, LaravelFileType.SingleActionController) + 1
    }`,
    when: "explorerResourceIsFolder && laravelFileCreator.activated",
    configuration: {
      key: "laravelFileCreator.showCreateSingleActionController",
      type: "boolean",
      default: true,
      markdownDescription:
        "Show in the 'New Laravel file...' menu to create a single action Controller",
      order:
        getEnumIndex(LaravelFileType, LaravelFileType.SingleActionController) +
        1,
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
    group: `1_laravelFileCreator@${
      getEnumIndex(LaravelFileType, LaravelFileType.FormRequest) + 1
    }`,
    when: "explorerResourceIsFolder && laravelFileCreator.activated",
    configuration: {
      key: "laravelFileCreator.showCreateFormRequest",
      type: "boolean",
      default: true,
      markdownDescription:
        "Show in the 'New Laravel file...' menu to create a Form Request",
      order: getEnumIndex(LaravelFileType, LaravelFileType.FormRequest) + 1,
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
    group: `1_laravelFileCreator@${
      getEnumIndex(LaravelFileType, LaravelFileType.Model) + 1
    }`,
    when: "explorerResourceIsFolder && laravelFileCreator.activated",
    configuration: {
      key: "laravelFileCreator.showCreateModel",
      type: "boolean",
      default: true,
      markdownDescription:
        "Show in the 'New Laravel file...' menu to create a Model",
      order: getEnumIndex(LaravelFileType, LaravelFileType.Model) + 1,
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
    group: `1_laravelFileCreator@${
      getEnumIndex(LaravelFileType, LaravelFileType.Migration) + 1
    }`,
    when: "explorerResourceIsFolder && laravelFileCreator.activated",
    configuration: {
      key: "laravelFileCreator.showCreateMigration",
      type: "boolean",
      default: true,
      markdownDescription:
        "Show in the 'New Laravel file...' menu to create a Migration",
      order: getEnumIndex(LaravelFileType, LaravelFileType.Migration) + 1,
    },
  },
};
