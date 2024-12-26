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
  ConsoleCommand = "Console Command",
  Controller = "Controller",
  Event = "Event",
  EventListener = "Event Listener",
  Exception = "Exception",
  FormRequest = "Form Request",
  Job = "Job",
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
  [LaravelFileType.ConsoleCommand]: {
    fileType: LaravelFileType.ConsoleCommand,
    quickPickLabel: "Command",
    commandName: "laravelFileCreator.createCommand",
    title: "New Console Command",
    placeHolder: "Command Name",
    prompt: "Name of Command",
    contextTitle: "Create Console Command",
    group: `1_laravelFileCreator@${
      getEnumIndex(LaravelFileType, LaravelFileType.ConsoleCommand) + 1
    }`,
    when: "explorerResourceIsFolder && laravelFileCreator.activated",
    configuration: {
      key: "laravelFileCreator.showCreateCommand",
      type: "boolean",
      default: true,
      markdownDescription:
        "Show in the 'New Laravel file...' menu to create a Console Command",
      order: getEnumIndex(LaravelFileType, LaravelFileType.ConsoleCommand) + 1,
    },
  },
  [LaravelFileType.Controller]: {
    fileType: LaravelFileType.Controller,
    quickPickLabel: "Single Action Controller",
    commandName: "laravelFileCreator.createSingleActionController",
    title: "New Single Action Controller",
    placeHolder: "Controller Name",
    prompt: "Name of Single Action Controller",
    contextTitle: "Create Single Action Controller",
    group: `1_laravelFileCreator@${
      getEnumIndex(LaravelFileType, LaravelFileType.Controller) + 1
    }`,
    when: "explorerResourceIsFolder && laravelFileCreator.activated",
    configuration: {
      key: "laravelFileCreator.showCreateSingleActionController",
      type: "boolean",
      default: true,
      markdownDescription:
        "Show in the 'New Laravel file...' menu to create a single action Controller",
      order: getEnumIndex(LaravelFileType, LaravelFileType.Controller) + 1,
    },
  },
  [LaravelFileType.Event]: {
    fileType: LaravelFileType.Event,
    quickPickLabel: "Event",
    commandName: "laravelFileCreator.createEvent",
    title: "New Event",
    placeHolder: "Event Name",
    prompt: "Name of Event",
    contextTitle: "Create Event",
    group: `1_laravelFileCreator@${
      getEnumIndex(LaravelFileType, LaravelFileType.Event) + 1
    }`,
    when: "explorerResourceIsFolder && laravelFileCreator.activated",
    configuration: {
      key: "laravelFileCreator.showCreateEvent",
      type: "boolean",
      default: true,
      markdownDescription:
        "Show in the 'New Laravel file...' menu to create an Event",
      order: getEnumIndex(LaravelFileType, LaravelFileType.Event) + 1,
    },
  },
  [LaravelFileType.EventListener]: {
    fileType: LaravelFileType.EventListener,
    quickPickLabel: "Event Listener",
    commandName: "laravelFileCreator.createEventListener",
    title: "New Event Listener",
    placeHolder: "Event Listener Name",
    prompt: "Name of Event Listener",
    contextTitle: "Create Event Listener",
    group: `1_laravelFileCreator@${
      getEnumIndex(LaravelFileType, LaravelFileType.EventListener) + 1
    }`,
    when: "explorerResourceIsFolder && laravelFileCreator.activated",
    configuration: {
      key: "laravelFileCreator.showCreateEventListener",
      type: "boolean",
      default: true,
      markdownDescription:
        "Show in the 'New Laravel file...' menu to create an Event Listener",
      order: getEnumIndex(LaravelFileType, LaravelFileType.EventListener) + 1,
    },
  },
  [LaravelFileType.Exception]: {
    fileType: LaravelFileType.Exception,
    quickPickLabel: "Exception",
    commandName: "laravelFileCreator.createException",
    title: "New Exception",
    placeHolder: "Exception Name",
    prompt: "Name of Exception",
    contextTitle: "Create Exception",
    group: `1_laravelFileCreator@${
      getEnumIndex(LaravelFileType, LaravelFileType.Exception) + 1
    }`,
    when: "explorerResourceIsFolder && laravelFileCreator.activated",
    configuration: {
      key: "laravelFileCreator.showCreateException",
      type: "boolean",
      default: true,
      markdownDescription:
        "Show in the 'New Laravel file...' menu to create an Exception",
      order: getEnumIndex(LaravelFileType, LaravelFileType.Exception) + 1,
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
  [LaravelFileType.Job]: {
    fileType: LaravelFileType.Job,
    quickPickLabel: "Job",
    commandName: "laravelFileCreator.createJob",
    title: "New Job",
    placeHolder: "Job Name",
    prompt: "Name of Job",
    contextTitle: "Create Job",
    group: `1_laravelFileCreator@${
      getEnumIndex(LaravelFileType, LaravelFileType.Job) + 1
    }`,
    when: "explorerResourceIsFolder && laravelFileCreator.activated",
    configuration: {
      key: "laravelFileCreator.showCreateJob",
      type: "boolean",
      default: true,
      markdownDescription:
        "Show in the 'New Laravel file...' menu to create a Job",
      order: getEnumIndex(LaravelFileType, LaravelFileType.Job) + 1,
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
