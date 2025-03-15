import { InputBoxOptions } from "vscode";

export type Command = InputBoxOptions & {
  fileType: SupportedFileType;
  quickPickLabel: string;
  commandName: string;
  contextTitle: string;
  when: string;
  group: string;
  showInCommandPalette?: boolean;
  defaultFilePath?: string;
  configuration: {
    key: string;
    type: string;
    default: boolean;
    markdownDescription: string;
    order: number;
  };
};

export enum SupportedFileType {
  PhpClass = "PHP Class",
  PhpEnum = "PHP Enum",
  PhpInterface = "PHP Interface",
  PhpTrait = "PHP Trait",
  BladeFile = "Blade File",
  BladeComponentClass = "Blade Component Class",
  Config = "Config",
  ConsoleCommand = "Console Command",
  Controller = "Controller",
  Event = "Event",
  EventListener = "Event Listener",
  Exception = "Exception",
  Factory = "Factory",
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
  Seeder = "Seeder",
}

function getEnumIndex(enumObj: object, value: string): number {
  return Object.values(enumObj).indexOf(value);
}

export const commandsMapping: Record<SupportedFileType, Command> = {
  [SupportedFileType.PhpClass]: {
    fileType: SupportedFileType.PhpClass,
    quickPickLabel: "Class",
    commandName: "laravelFileCreator.createClass",
    title: "New PHP Class",
    placeHolder: "Class Name",
    prompt: "Name of Class",
    contextTitle: "Create PHP Class",
    group: `0_laravelFileCreator@${
      getEnumIndex(SupportedFileType, SupportedFileType.PhpClass) + 1
    }`,
    when: "explorerResourceIsFolder && laravelFileCreator.activated && config.laravelFileCreator.showCreateClass",
    configuration: {
      key: "laravelFileCreator.showCreateClass",
      type: "boolean",
      default: true,
      markdownDescription:
        "Show in the 'New Laravel file...' menu to create a PHP Class",
      order: getEnumIndex(SupportedFileType, SupportedFileType.PhpClass) + 1,
    },
  },
  [SupportedFileType.PhpEnum]: {
    fileType: SupportedFileType.PhpEnum,
    quickPickLabel: "Enum",
    commandName: "laravelFileCreator.createEnum",
    title: "New PHP Enum",
    placeHolder: "Enum Name",
    prompt: "Name of Enum",
    contextTitle: "Create PHP Enum",
    group: `0_laravelFileCreator@${
      getEnumIndex(SupportedFileType, SupportedFileType.PhpEnum) + 1
    }`,
    when: "explorerResourceIsFolder && laravelFileCreator.activated && config.laravelFileCreator.showCreateEnum",
    configuration: {
      key: "laravelFileCreator.showCreateEnum",
      type: "boolean",
      default: true,
      markdownDescription:
        "Show in the 'New Laravel file...' menu to create a PHP Enum",
      order: getEnumIndex(SupportedFileType, SupportedFileType.PhpEnum) + 1,
    },
  },
  [SupportedFileType.PhpInterface]: {
    fileType: SupportedFileType.PhpInterface,
    quickPickLabel: "Interface",
    commandName: "laravelFileCreator.createInterface",
    title: "New PHP Interface",
    placeHolder: "Interface Name",
    prompt: "Name of Interface",
    contextTitle: "Create PHP Interface",
    group: `0_laravelFileCreator@${
      getEnumIndex(SupportedFileType, SupportedFileType.PhpInterface) + 1
    }`,
    when: "explorerResourceIsFolder && laravelFileCreator.activated && config.laravelFileCreator.showCreateInterface",
    configuration: {
      key: "laravelFileCreator.showCreateInterface",
      type: "boolean",
      default: true,
      markdownDescription:
        "Show in the 'New Laravel file...' menu to create a PHP Interface",
      order:
        getEnumIndex(SupportedFileType, SupportedFileType.PhpInterface) + 1,
    },
  },
  [SupportedFileType.PhpTrait]: {
    fileType: SupportedFileType.PhpTrait,
    quickPickLabel: "Trait",
    commandName: "laravelFileCreator.createTrait",
    title: "New PHP Trait",
    placeHolder: "Trait Name",
    prompt: "Name of Trait",
    contextTitle: "Create PHP Trait",
    group: `0_laravelFileCreator@${
      getEnumIndex(SupportedFileType, SupportedFileType.PhpTrait) + 1
    }`,
    when: "explorerResourceIsFolder && laravelFileCreator.activated && config.laravelFileCreator.showCreateTrait",
    configuration: {
      key: "laravelFileCreator.showCreateTrait",
      type: "boolean",
      default: true,
      markdownDescription:
        "Show in the 'New Laravel file...' menu to create a PHP Trait",
      order: getEnumIndex(SupportedFileType, SupportedFileType.PhpTrait) + 1,
    },
  },
  [SupportedFileType.BladeFile]: {
    fileType: SupportedFileType.BladeFile,
    quickPickLabel: "Blade File",
    commandName: "laravelFileCreator.createBladeFile",
    title: "New Blade File",
    placeHolder: "Blade File Name",
    prompt: "Name of Blade File (exclude .blade.php)",
    contextTitle: "Create Blade File",
    group: `1_laravelFileCreator@${
      getEnumIndex(SupportedFileType, SupportedFileType.BladeFile) + 1
    }`,
    when: "explorerResourceIsFolder && laravelFileCreator.activated && config.laravelFileCreator.showCreateBladeFile",
    configuration: {
      key: "laravelFileCreator.showCreateBladeFile",
      type: "boolean",
      default: false,
      markdownDescription:
        "Show in the 'New Laravel file...' menu to create a Blade file",
      order: getEnumIndex(SupportedFileType, SupportedFileType.BladeFile) + 1,
    },
  },
  [SupportedFileType.BladeComponentClass]: {
    fileType: SupportedFileType.BladeComponentClass,
    quickPickLabel: "Blade Component Class",
    commandName: "laravelFileCreator.createBladeComponentClass",
    title: "New Blade Component Class",
    placeHolder: "Component Class Name",
    prompt: "Name of Blade Component Class",
    contextTitle: "Create Blade Component Class",
    group: `1_laravelFileCreator@${
      getEnumIndex(SupportedFileType, SupportedFileType.BladeComponentClass) + 1
    }`,
    when: "explorerResourceIsFolder && laravelFileCreator.activated && config.laravelFileCreator.showCreateBladeComponentClass",
    configuration: {
      key: "laravelFileCreator.showCreateBladeComponentClass",
      type: "boolean",
      default: false,
      markdownDescription:
        "Show in the 'New Laravel file...' menu to create a Blade Component class",
      order:
        getEnumIndex(SupportedFileType, SupportedFileType.BladeComponentClass) +
        1,
    },
  },
  [SupportedFileType.Config]: {
    fileType: SupportedFileType.Config,
    quickPickLabel: "Config File",
    commandName: "laravelFileCreator.createConfig",
    title: "New Config",
    placeHolder: "Config Name",
    prompt: "Name of Config",
    contextTitle: "Create Config File",
    group: `1_laravelFileCreator@${
      getEnumIndex(SupportedFileType, SupportedFileType.Config) + 1
    }`,
    when: "explorerResourceIsFolder && laravelFileCreator.activated && config.laravelFileCreator.showCreateConfig",
    configuration: {
      key: "laravelFileCreator.showCreateConfig",
      type: "boolean",
      default: false,
      markdownDescription:
        "Show in the 'New Laravel file...' menu to create a Config file",
      order: getEnumIndex(SupportedFileType, SupportedFileType.Config) + 1,
    },
  },
  [SupportedFileType.ConsoleCommand]: {
    fileType: SupportedFileType.ConsoleCommand,
    quickPickLabel: "Command",
    commandName: "laravelFileCreator.createCommand",
    title: "New Console Command",
    placeHolder: "Command Name",
    prompt: "Name of Command",
    contextTitle: "Create Console Command",
    group: `1_laravelFileCreator@${
      getEnumIndex(SupportedFileType, SupportedFileType.ConsoleCommand) + 1
    }`,
    when: "explorerResourceIsFolder && laravelFileCreator.activated && config.laravelFileCreator.showCreateCommand",
    configuration: {
      key: "laravelFileCreator.showCreateCommand",
      type: "boolean",
      default: false,
      markdownDescription:
        "Show in the 'New Laravel file...' menu to create a Console Command",
      order:
        getEnumIndex(SupportedFileType, SupportedFileType.ConsoleCommand) + 1,
    },
  },
  [SupportedFileType.Controller]: {
    fileType: SupportedFileType.Controller,
    quickPickLabel: "Single Action Controller",
    commandName: "laravelFileCreator.createSingleActionController",
    title: "New Single Action Controller",
    placeHolder: "Controller Name",
    prompt: "Name of Single Action Controller",
    contextTitle: "Create Single Action Controller",
    group: `1_laravelFileCreator@${
      getEnumIndex(SupportedFileType, SupportedFileType.Controller) + 1
    }`,
    when: "explorerResourceIsFolder && laravelFileCreator.activated && config.laravelFileCreator.showCreateSingleActionController",
    configuration: {
      key: "laravelFileCreator.showCreateSingleActionController",
      type: "boolean",
      default: true,
      markdownDescription:
        "Show in the 'New Laravel file...' menu to create a single action Controller",
      order: getEnumIndex(SupportedFileType, SupportedFileType.Controller) + 1,
    },
  },
  [SupportedFileType.Event]: {
    fileType: SupportedFileType.Event,
    quickPickLabel: "Event",
    commandName: "laravelFileCreator.createEvent",
    title: "New Event",
    placeHolder: "Event Name",
    prompt: "Name of Event",
    contextTitle: "Create Event",
    group: `1_laravelFileCreator@${
      getEnumIndex(SupportedFileType, SupportedFileType.Event) + 1
    }`,
    when: "explorerResourceIsFolder && laravelFileCreator.activated && config.laravelFileCreator.showCreateEvent",
    configuration: {
      key: "laravelFileCreator.showCreateEvent",
      type: "boolean",
      default: false,
      markdownDescription:
        "Show in the 'New Laravel file...' menu to create an Event",
      order: getEnumIndex(SupportedFileType, SupportedFileType.Event) + 1,
    },
  },
  [SupportedFileType.EventListener]: {
    fileType: SupportedFileType.EventListener,
    quickPickLabel: "Event Listener",
    commandName: "laravelFileCreator.createEventListener",
    title: "New Event Listener",
    placeHolder: "Event Listener Name",
    prompt: "Name of Event Listener",
    contextTitle: "Create Event Listener",
    group: `1_laravelFileCreator@${
      getEnumIndex(SupportedFileType, SupportedFileType.EventListener) + 1
    }`,
    when: "explorerResourceIsFolder && laravelFileCreator.activated && config.laravelFileCreator.showCreateEventListener",
    configuration: {
      key: "laravelFileCreator.showCreateEventListener",
      type: "boolean",
      default: false,
      markdownDescription:
        "Show in the 'New Laravel file...' menu to create an Event Listener",
      order:
        getEnumIndex(SupportedFileType, SupportedFileType.EventListener) + 1,
    },
  },
  [SupportedFileType.Exception]: {
    fileType: SupportedFileType.Exception,
    quickPickLabel: "Exception",
    commandName: "laravelFileCreator.createException",
    title: "New Exception",
    placeHolder: "Exception Name",
    prompt: "Name of Exception",
    contextTitle: "Create Exception",
    group: `1_laravelFileCreator@${
      getEnumIndex(SupportedFileType, SupportedFileType.Exception) + 1
    }`,
    when: "explorerResourceIsFolder && laravelFileCreator.activated && config.laravelFileCreator.showCreateException",
    configuration: {
      key: "laravelFileCreator.showCreateException",
      type: "boolean",
      default: false,
      markdownDescription:
        "Show in the 'New Laravel file...' menu to create an Exception",
      order: getEnumIndex(SupportedFileType, SupportedFileType.Exception) + 1,
    },
  },
  [SupportedFileType.Factory]: {
    fileType: SupportedFileType.Factory,
    quickPickLabel: "Factory",
    commandName: "laravelFileCreator.createFactory",
    title: "New Factory",
    placeHolder: "Factory Name",
    prompt: "Name of Factory",
    contextTitle: "Create Factory",
    group: `1_laravelFileCreator@${
      getEnumIndex(SupportedFileType, SupportedFileType.Factory) + 1
    }`,
    when: "explorerResourceIsFolder && laravelFileCreator.activated && config.laravelFileCreator.showCreateFactory",
    showInCommandPalette: true,
    defaultFilePath: "database/factories",
    configuration: {
      key: "laravelFileCreator.showCreateFactory",
      type: "boolean",
      default: true,
      markdownDescription:
        "Show in the 'New Laravel file...' menu to create a Factory",
      order: getEnumIndex(SupportedFileType, SupportedFileType.Factory) + 1,
    },
  },
  [SupportedFileType.FormRequest]: {
    fileType: SupportedFileType.FormRequest,
    quickPickLabel: "Form Request",
    commandName: "laravelFileCreator.createFormRequest",
    title: "New Form Request",
    placeHolder: "Form Request Name",
    prompt: "Name of Form Request",
    contextTitle: "Create Form Request",
    group: `1_laravelFileCreator@${
      getEnumIndex(SupportedFileType, SupportedFileType.FormRequest) + 1
    }`,
    when: "explorerResourceIsFolder && laravelFileCreator.activated && config.laravelFileCreator.showCreateFormRequest",
    configuration: {
      key: "laravelFileCreator.showCreateFormRequest",
      type: "boolean",
      default: true,
      markdownDescription:
        "Show in the 'New Laravel file...' menu to create a Form Request",
      order: getEnumIndex(SupportedFileType, SupportedFileType.FormRequest) + 1,
    },
  },
  [SupportedFileType.Job]: {
    fileType: SupportedFileType.Job,
    quickPickLabel: "Job",
    commandName: "laravelFileCreator.createJob",
    title: "New Job",
    placeHolder: "Job Name",
    prompt: "Name of Job",
    contextTitle: "Create Job",
    group: `1_laravelFileCreator@${
      getEnumIndex(SupportedFileType, SupportedFileType.Job) + 1
    }`,
    when: "explorerResourceIsFolder && laravelFileCreator.activated && config.laravelFileCreator.showCreateJob",
    configuration: {
      key: "laravelFileCreator.showCreateJob",
      type: "boolean",
      default: false,
      markdownDescription:
        "Show in the 'New Laravel file...' menu to create a Job",
      order: getEnumIndex(SupportedFileType, SupportedFileType.Job) + 1,
    },
  },
  [SupportedFileType.JsonResource]: {
    fileType: SupportedFileType.JsonResource,
    quickPickLabel: "JSON Resource",
    commandName: "laravelFileCreator.createJsonResource",
    title: "New JSON Resource",
    placeHolder: "JSON Resource Name",
    prompt: "Name of JSON Resource",
    contextTitle: "Create JSON Resource",
    group: `1_laravelFileCreator@${
      getEnumIndex(SupportedFileType, SupportedFileType.JsonResource) + 1
    }`,
    when: "explorerResourceIsFolder && laravelFileCreator.activated && config.laravelFileCreator.showCreateJsonResource",
    configuration: {
      key: "laravelFileCreator.showCreateJsonResource",
      type: "boolean",
      default: true,
      markdownDescription:
        "Show in the 'New Laravel file...' menu to create a JSON Resource",
      order:
        getEnumIndex(SupportedFileType, SupportedFileType.JsonResource) + 1,
    },
  },
  [SupportedFileType.JsonResourceCollection]: {
    fileType: SupportedFileType.JsonResourceCollection,
    quickPickLabel: "JSON Resource Collection",
    commandName: "laravelFileCreator.createJsonResourceCollection",
    title: "New JSON Resource Collection",
    placeHolder: "JSON Resource Collection Name",
    prompt: "Name of JSON Resource Collection",
    contextTitle: "Create JSON Resource Collection",
    group: `1_laravelFileCreator@${
      getEnumIndex(
        SupportedFileType,
        SupportedFileType.JsonResourceCollection
      ) + 1
    }`,
    when: "explorerResourceIsFolder && laravelFileCreator.activated && config.laravelFileCreator.showCreateJsonResourceCollection",
    configuration: {
      key: "laravelFileCreator.showCreateJsonResourceCollection",
      type: "boolean",
      default: false,
      markdownDescription:
        "Show in the 'New Laravel file...' menu to create a JSON Resource Collection",
      order:
        getEnumIndex(
          SupportedFileType,
          SupportedFileType.JsonResourceCollection
        ) + 1,
    },
  },
  [SupportedFileType.Model]: {
    fileType: SupportedFileType.Model,
    quickPickLabel: "Model",
    commandName: "laravelFileCreator.createModel",
    title: "New Model",
    placeHolder: "Model Name",
    prompt: "Name of Model",
    contextTitle: "Create Model",
    group: `1_laravelFileCreator@${
      getEnumIndex(SupportedFileType, SupportedFileType.Model) + 1
    }`,
    when: "explorerResourceIsFolder && laravelFileCreator.activated && config.laravelFileCreator.showCreateModel",
    configuration: {
      key: "laravelFileCreator.showCreateModel",
      type: "boolean",
      default: true,
      markdownDescription:
        "Show in the 'New Laravel file...' menu to create a Model",
      order: getEnumIndex(SupportedFileType, SupportedFileType.Model) + 1,
    },
  },
  [SupportedFileType.Migration]: {
    fileType: SupportedFileType.Migration,
    quickPickLabel: "Migration",
    commandName: "laravelFileCreator.createMigration",
    title: "New Migration",
    placeHolder: "Migration Name",
    prompt: "Use snake case or separate words with spaces",
    contextTitle: "Create Migration",
    group: `1_laravelFileCreator@${
      getEnumIndex(SupportedFileType, SupportedFileType.Migration) + 1
    }`,
    when: "explorerResourceIsFolder && laravelFileCreator.activated && config.laravelFileCreator.showCreateMigration",
    showInCommandPalette: true,
    defaultFilePath: "database/migrations",
    configuration: {
      key: "laravelFileCreator.showCreateMigration",
      type: "boolean",
      default: true,
      markdownDescription:
        "Show in the 'New Laravel file...' menu to create a Migration",
      order: getEnumIndex(SupportedFileType, SupportedFileType.Migration) + 1,
    },
  },
  [SupportedFileType.Mailable]: {
    fileType: SupportedFileType.Mailable,
    quickPickLabel: "Mailable",
    commandName: "laravelFileCreator.createMailable",
    title: "New Mailable",
    placeHolder: "Mailable Name",
    prompt: "Name of Mailable",
    contextTitle: "Create Mailable",
    group: `1_laravelFileCreator@${
      getEnumIndex(SupportedFileType, SupportedFileType.Mailable) + 1
    }`,
    when: "explorerResourceIsFolder && laravelFileCreator.activated && config.laravelFileCreator.showCreateMailable",
    configuration: {
      key: "laravelFileCreator.showCreateMailable",
      type: "boolean",
      default: false,
      markdownDescription:
        "Show in the 'New Laravel file...' menu to create a Mailable",
      order: getEnumIndex(SupportedFileType, SupportedFileType.Mailable) + 1,
    },
  },
  [SupportedFileType.Notification]: {
    fileType: SupportedFileType.Notification,
    quickPickLabel: "Notification",
    commandName: "laravelFileCreator.createNotification",
    title: "New Notification",
    placeHolder: "Notification Name",
    prompt: "Name of Notification",
    contextTitle: "Create Notification",
    group: `1_laravelFileCreator@${
      getEnumIndex(SupportedFileType, SupportedFileType.Notification) + 1
    }`,
    when: "explorerResourceIsFolder && laravelFileCreator.activated && config.laravelFileCreator.showCreateNotification",
    configuration: {
      key: "laravelFileCreator.showCreateNotification",
      type: "boolean",
      default: false,
      markdownDescription:
        "Show in the 'New Laravel file...' menu to create a Notification",
      order:
        getEnumIndex(SupportedFileType, SupportedFileType.Notification) + 1,
    },
  },
  [SupportedFileType.PestTest]: {
    fileType: SupportedFileType.PestTest,
    quickPickLabel: "Pest Test",
    commandName: "laravelFileCreator.createPestTest",
    title: "New Pest Test",
    placeHolder: "Pest Test Name",
    prompt: "Name of Pest Test",
    contextTitle: "Create Pest Test",
    group: `1_laravelFileCreator@${
      getEnumIndex(SupportedFileType, SupportedFileType.PestTest) + 1
    }`,
    when: "explorerResourceIsFolder && laravelFileCreator.activated && config.laravelFileCreator.showCreatePestTest",
    configuration: {
      key: "laravelFileCreator.showCreatePestTest",
      type: "boolean",
      default: true,
      markdownDescription:
        "Show in the 'New Laravel file...' menu to create a Pest Test",
      order: getEnumIndex(SupportedFileType, SupportedFileType.PestTest) + 1,
    },
  },
  [SupportedFileType.Policy]: {
    fileType: SupportedFileType.Policy,
    quickPickLabel: "Policy",
    commandName: "laravelFileCreator.createPolicy",
    title: "New Policy",
    placeHolder: "Policy Name",
    prompt: "Name of Policy",
    contextTitle: "Create Policy",
    group: `1_laravelFileCreator@${
      getEnumIndex(SupportedFileType, SupportedFileType.Policy) + 1
    }`,
    when: "explorerResourceIsFolder && laravelFileCreator.activated && config.laravelFileCreator.showCreatePolicy",
    configuration: {
      key: "laravelFileCreator.showCreatePolicy",
      type: "boolean",
      default: false,
      markdownDescription:
        "Show in the 'New Laravel file...' menu to create a Policy",
      order: getEnumIndex(SupportedFileType, SupportedFileType.Policy) + 1,
    },
  },
  [SupportedFileType.ResourceController]: {
    fileType: SupportedFileType.ResourceController,
    quickPickLabel: "Resource Controller",
    commandName: "laravelFileCreator.createResourceController",
    title: "New Resource Controller",
    placeHolder: "Resource Controller Name",
    prompt: "Name of Resource Controller",
    contextTitle: "Create Resource Controller",
    group: `1_laravelFileCreator@${
      getEnumIndex(SupportedFileType, SupportedFileType.ResourceController) + 1
    }`,
    when: "explorerResourceIsFolder && laravelFileCreator.activated && config.laravelFileCreator.showCreateResourceController",
    configuration: {
      key: "laravelFileCreator.showCreateResourceController",
      type: "boolean",
      default: false,
      markdownDescription:
        "Show in the 'New Laravel file...' menu to create a Resource Controller",
      order:
        getEnumIndex(SupportedFileType, SupportedFileType.ResourceController) +
        1,
    },
  },
  [SupportedFileType.Rule]: {
    fileType: SupportedFileType.Rule,
    quickPickLabel: "Rule",
    commandName: "laravelFileCreator.createRule",
    title: "New Rule",
    placeHolder: "Rule Name",
    prompt: "Name of Rule",
    contextTitle: "Create Rule",
    group: `1_laravelFileCreator@${
      getEnumIndex(SupportedFileType, SupportedFileType.Rule) + 1
    }`,
    when: "explorerResourceIsFolder && laravelFileCreator.activated && config.laravelFileCreator.showCreateRule",
    configuration: {
      key: "laravelFileCreator.showCreateRule",
      type: "boolean",
      default: false,
      markdownDescription:
        "Show in the 'New Laravel file...' menu to create a Rule",
      order: getEnumIndex(SupportedFileType, SupportedFileType.Rule) + 1,
    },
  },
  [SupportedFileType.Seeder]: {
    fileType: SupportedFileType.Seeder,
    quickPickLabel: "Seeder",
    commandName: "laravelFileCreator.createSeeder",
    title: "New Seeder",
    placeHolder: "Seeder Name",
    prompt: "Name of Seeder",
    contextTitle: "Create Seeder",
    group: `1_laravelFileCreator@${
      getEnumIndex(SupportedFileType, SupportedFileType.Seeder) + 1
    }`,
    when: "explorerResourceIsFolder && laravelFileCreator.activated && config.laravelFileCreator.showCreateSeeder",
    showInCommandPalette: true,
    defaultFilePath: "database/seeders",
    configuration: {
      key: "laravelFileCreator.showCreateSeeder",
      type: "boolean",
      default: true,
      markdownDescription:
        "Show in the 'New Laravel file...' menu to create a Seeder",
      order: getEnumIndex(SupportedFileType, SupportedFileType.Seeder) + 1,
    },
  },
};
