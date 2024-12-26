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
  JsonResource = "JSON Resource",
  JsonResourceCollection = "JSON Resource Collection",
  Mailable = "Mailable",
  Migration = "Migration",
  Model = "Model",
  Notification = "Notification",
  PestTest = "Pest Test",
  Policy = "Policy",
  ResourceController = "Resource Controller",
  Rule = "Rule",
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
      default: false,
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
    when: "explorerResourceIsFolder && laravelFileCreator.activated && config.laravelFileCreator.showCreateCommand",
    configuration: {
      key: "laravelFileCreator.showCreateCommand",
      type: "boolean",
      default: false,
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
    when: "explorerResourceIsFolder && laravelFileCreator.activated && config.laravelFileCreator.showCreateSingleActionController",
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
    when: "explorerResourceIsFolder && laravelFileCreator.activated && config.laravelFileCreator.showCreateEvent",
    configuration: {
      key: "laravelFileCreator.showCreateEvent",
      type: "boolean",
      default: false,
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
    when: "explorerResourceIsFolder && laravelFileCreator.activated && config.laravelFileCreator.showCreateEventListener",
    configuration: {
      key: "laravelFileCreator.showCreateEventListener",
      type: "boolean",
      default: false,
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
    when: "explorerResourceIsFolder && laravelFileCreator.activated && config.laravelFileCreator.showCreateException",
    configuration: {
      key: "laravelFileCreator.showCreateException",
      type: "boolean",
      default: false,
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
    when: "explorerResourceIsFolder && laravelFileCreator.activated && config.laravelFileCreator.showCreateFormRequest",
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
    when: "explorerResourceIsFolder && laravelFileCreator.activated && config.laravelFileCreator.showCreateJob",
    configuration: {
      key: "laravelFileCreator.showCreateJob",
      type: "boolean",
      default: false,
      markdownDescription:
        "Show in the 'New Laravel file...' menu to create a Job",
      order: getEnumIndex(LaravelFileType, LaravelFileType.Job) + 1,
    },
  },
  [LaravelFileType.JsonResource]: {
    fileType: LaravelFileType.JsonResource,
    quickPickLabel: "JSON Resource",
    commandName: "laravelFileCreator.createJsonResource",
    title: "New JSON Resource",
    placeHolder: "JSON Resource Name",
    prompt: "Name of JSON Resource",
    contextTitle: "Create JSON Resource",
    group: `1_laravelFileCreator@${
      getEnumIndex(LaravelFileType, LaravelFileType.JsonResource) + 1
    }`,
    when: "explorerResourceIsFolder && laravelFileCreator.activated && config.laravelFileCreator.showCreateJsonResource",
    configuration: {
      key: "laravelFileCreator.showCreateJsonResource",
      type: "boolean",
      default: true,
      markdownDescription:
        "Show in the 'New Laravel file...' menu to create a JSON Resource",
      order: getEnumIndex(LaravelFileType, LaravelFileType.JsonResource) + 1,
    },
  },
  [LaravelFileType.JsonResourceCollection]: {
    fileType: LaravelFileType.JsonResourceCollection,
    quickPickLabel: "JSON Resource Collection",
    commandName: "laravelFileCreator.createJsonResourceCollection",
    title: "New JSON Resource Collection",
    placeHolder: "JSON Resource Collection Name",
    prompt: "Name of JSON Resource Collection",
    contextTitle: "Create JSON Resource Collection",
    group: `1_laravelFileCreator@${
      getEnumIndex(LaravelFileType, LaravelFileType.JsonResourceCollection) + 1
    }`,
    when: "explorerResourceIsFolder && laravelFileCreator.activated && config.laravelFileCreator.showCreateJsonResourceCollection",
    configuration: {
      key: "laravelFileCreator.showCreateJsonResourceCollection",
      type: "boolean",
      default: false,
      markdownDescription:
        "Show in the 'New Laravel file...' menu to create a JSON Resource Collection",
      order:
        getEnumIndex(LaravelFileType, LaravelFileType.JsonResourceCollection) +
        1,
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
    when: "explorerResourceIsFolder && laravelFileCreator.activated && config.laravelFileCreator.showCreateModel",
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
    when: "explorerResourceIsFolder && laravelFileCreator.activated && config.laravelFileCreator.showCreateMigration",
    configuration: {
      key: "laravelFileCreator.showCreateMigration",
      type: "boolean",
      default: true,
      markdownDescription:
        "Show in the 'New Laravel file...' menu to create a Migration",
      order: getEnumIndex(LaravelFileType, LaravelFileType.Migration) + 1,
    },
  },
  [LaravelFileType.Mailable]: {
    fileType: LaravelFileType.Mailable,
    quickPickLabel: "Mailable",
    commandName: "laravelFileCreator.createMailable",
    title: "New Mailable",
    placeHolder: "Mailable Name",
    prompt: "Name of Mailable",
    contextTitle: "Create Mailable",
    group: `1_laravelFileCreator@${
      getEnumIndex(LaravelFileType, LaravelFileType.Mailable) + 1
    }`,
    when: "explorerResourceIsFolder && laravelFileCreator.activated && config.laravelFileCreator.showCreateMailable",
    configuration: {
      key: "laravelFileCreator.showCreateMailable",
      type: "boolean",
      default: false,
      markdownDescription:
        "Show in the 'New Laravel file...' menu to create a Mailable",
      order: getEnumIndex(LaravelFileType, LaravelFileType.Mailable) + 1,
    },
  },
  [LaravelFileType.Notification]: {
    fileType: LaravelFileType.Notification,
    quickPickLabel: "Notification",
    commandName: "laravelFileCreator.createNotification",
    title: "New Notification",
    placeHolder: "Notification Name",
    prompt: "Name of Notification",
    contextTitle: "Create Notification",
    group: `1_laravelFileCreator@${
      getEnumIndex(LaravelFileType, LaravelFileType.Notification) + 1
    }`,
    when: "explorerResourceIsFolder && laravelFileCreator.activated && config.laravelFileCreator.showCreateNotification",
    configuration: {
      key: "laravelFileCreator.showCreateNotification",
      type: "boolean",
      default: false,
      markdownDescription:
        "Show in the 'New Laravel file...' menu to create a Notification",
      order: getEnumIndex(LaravelFileType, LaravelFileType.Notification) + 1,
    },
  },
  [LaravelFileType.PestTest]: {
    fileType: LaravelFileType.PestTest,
    quickPickLabel: "Pest Test",
    commandName: "laravelFileCreator.createPestTest",
    title: "New Pest Test",
    placeHolder: "Pest Test Name",
    prompt: "Name of Pest Test",
    contextTitle: "Create Pest Test",
    group: `1_laravelFileCreator@${
      getEnumIndex(LaravelFileType, LaravelFileType.PestTest) + 1
    }`,
    when: "explorerResourceIsFolder && laravelFileCreator.activated && config.laravelFileCreator.showCreatePestTest",
    configuration: {
      key: "laravelFileCreator.showCreatePestTest",
      type: "boolean",
      default: true,
      markdownDescription:
        "Show in the 'New Laravel file...' menu to create a Pest Test",
      order: getEnumIndex(LaravelFileType, LaravelFileType.PestTest) + 1,
    },
  },
  [LaravelFileType.Policy]: {
    fileType: LaravelFileType.Policy,
    quickPickLabel: "Policy",
    commandName: "laravelFileCreator.createPolicy",
    title: "New Policy",
    placeHolder: "Policy Name",
    prompt: "Name of Policy",
    contextTitle: "Create Policy",
    group: `1_laravelFileCreator@${
      getEnumIndex(LaravelFileType, LaravelFileType.Policy) + 1
    }`,
    when: "explorerResourceIsFolder && laravelFileCreator.activated && config.laravelFileCreator.showCreatePolicy",
    configuration: {
      key: "laravelFileCreator.showCreatePolicy",
      type: "boolean",
      default: false,
      markdownDescription:
        "Show in the 'New Laravel file...' menu to create a Policy",
      order: getEnumIndex(LaravelFileType, LaravelFileType.Policy) + 1,
    },
  },
  [LaravelFileType.ResourceController]: {
    fileType: LaravelFileType.ResourceController,
    quickPickLabel: "Resource Controller",
    commandName: "laravelFileCreator.createResourceController",
    title: "New Resource Controller",
    placeHolder: "Resource Controller Name",
    prompt: "Name of Resource Controller",
    contextTitle: "Create Resource Controller",
    group: `1_laravelFileCreator@${
      getEnumIndex(LaravelFileType, LaravelFileType.ResourceController) + 1
    }`,
    when: "explorerResourceIsFolder && laravelFileCreator.activated && config.laravelFileCreator.showCreateResourceController",
    configuration: {
      key: "laravelFileCreator.showCreateResourceController",
      type: "boolean",
      default: false,
      markdownDescription:
        "Show in the 'New Laravel file...' menu to create a Resource Controller",
      order:
        getEnumIndex(LaravelFileType, LaravelFileType.ResourceController) + 1,
    },
  },
  [LaravelFileType.Rule]: {
    fileType: LaravelFileType.Rule,
    quickPickLabel: "Rule",
    commandName: "laravelFileCreator.createRule",
    title: "New Rule",
    placeHolder: "Rule Name",
    prompt: "Name of Rule",
    contextTitle: "Create Rule",
    group: `1_laravelFileCreator@${
      getEnumIndex(LaravelFileType, LaravelFileType.Rule) + 1
    }`,
    when: "explorerResourceIsFolder && laravelFileCreator.activated && config.laravelFileCreator.showCreateRule",
    configuration: {
      key: "laravelFileCreator.showCreateRule",
      type: "boolean",
      default: false,
      markdownDescription:
        "Show in the 'New Laravel file...' menu to create a Rule",
      order: getEnumIndex(LaravelFileType, LaravelFileType.Rule) + 1,
    },
  },
};
