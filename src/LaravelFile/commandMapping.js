"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.commandsMapping = exports.LaravelFileType = void 0;
var LaravelFileType;
(function (LaravelFileType) {
    LaravelFileType["BladeFile"] = "Blade File";
    LaravelFileType["BladeComponentClass"] = "Blade Component Class";
    LaravelFileType["Config"] = "Config";
    LaravelFileType["SingleActionController"] = "Single Action Controller";
    LaravelFileType["FormRequest"] = "Form Request";
    LaravelFileType["Model"] = "Model";
    LaravelFileType["Migration"] = "Migration";
})(LaravelFileType || (exports.LaravelFileType = LaravelFileType = {}));
function getEnumIndex(enumObj, value) {
    return Object.values(enumObj).indexOf(value);
}
exports.commandsMapping = (_a = {},
    _a[LaravelFileType.BladeFile] = {
        fileType: LaravelFileType.BladeFile,
        quickPickLabel: "Blade File",
        commandName: "laravelFileCreator.createBladeFile",
        title: "New Blade File",
        placeHolder: "Blade File Name",
        prompt: "Name of Blade File (exclude .blade.php)",
        contextTitle: "Create Blade File",
        group: "1_laravelFileCreator@".concat(getEnumIndex(LaravelFileType, LaravelFileType.BladeFile) + 1),
        when: "explorerResourceIsFolder && laravelFileCreator.activated && config.laravelFileCreator.showCreateBladeFile",
        configuration: {
            key: "laravelFileCreator.showCreateBladeFile",
            type: "boolean",
            default: false,
            markdownDescription: "Show in the 'New Laravel file...' menu to create a Blade file",
            order: getEnumIndex(LaravelFileType, LaravelFileType.BladeFile) + 1,
        },
    },
    _a[LaravelFileType.BladeComponentClass] = {
        fileType: LaravelFileType.BladeComponentClass,
        quickPickLabel: "Blade Component Class",
        commandName: "laravelFileCreator.createBladeComponentClass",
        title: "New Blade Component Class",
        placeHolder: "Component Class Name",
        prompt: "Name of Blade Component Class",
        contextTitle: "Create Blade Component Class",
        group: "1_laravelFileCreator@".concat(getEnumIndex(LaravelFileType, LaravelFileType.BladeComponentClass) + 1),
        when: "explorerResourceIsFolder && laravelFileCreator.activated && config.laravelFileCreator.showCreateBladeComponentClass",
        configuration: {
            key: "laravelFileCreator.showCreateBladeComponentClass",
            type: "boolean",
            default: false,
            markdownDescription: "Show in the 'New Laravel file...' menu to create a Blade Component class",
            order: getEnumIndex(LaravelFileType, LaravelFileType.BladeComponentClass) + 1,
        },
    },
    _a[LaravelFileType.Config] = {
        fileType: LaravelFileType.Config,
        quickPickLabel: "Config File",
        commandName: "laravelFileCreator.createConfig",
        title: "New Config",
        placeHolder: "Config Name",
        prompt: "Name of Config",
        contextTitle: "Create Config File",
        group: "1_laravelFileCreator@".concat(getEnumIndex(LaravelFileType, LaravelFileType.Config) + 1),
        when: "explorerResourceIsFolder && laravelFileCreator.activated && config.laravelFileCreator.showCreateConfig",
        configuration: {
            key: "laravelFileCreator.showCreateConfig",
            type: "boolean",
            default: true,
            markdownDescription: "Show in the 'New Laravel file...' menu to create a Config file",
            order: getEnumIndex(LaravelFileType, LaravelFileType.Config) + 1,
        },
    },
    _a[LaravelFileType.SingleActionController] = {
        fileType: LaravelFileType.SingleActionController,
        quickPickLabel: "Single Action Controller",
        commandName: "laravelFileCreator.createSingleActionController",
        title: "New Single Action Controller",
        placeHolder: "Controller Name",
        prompt: "Name of Single Action Controller",
        contextTitle: "Create Single Action Controller",
        group: "1_laravelFileCreator@".concat(getEnumIndex(LaravelFileType, LaravelFileType.SingleActionController) + 1),
        when: "explorerResourceIsFolder && laravelFileCreator.activated",
        configuration: {
            key: "laravelFileCreator.showCreateSingleActionController",
            type: "boolean",
            default: true,
            markdownDescription: "Show in the 'New Laravel file...' menu to create a single action Controller",
            order: getEnumIndex(LaravelFileType, LaravelFileType.SingleActionController) +
                1,
        },
    },
    _a[LaravelFileType.FormRequest] = {
        fileType: LaravelFileType.FormRequest,
        quickPickLabel: "Form Request",
        commandName: "laravelFileCreator.createFormRequest",
        title: "New Form Request",
        placeHolder: "Form Request Name",
        prompt: "Name of Form Request",
        contextTitle: "Create Form Request",
        group: "1_laravelFileCreator@".concat(getEnumIndex(LaravelFileType, LaravelFileType.FormRequest) + 1),
        when: "explorerResourceIsFolder && laravelFileCreator.activated",
        configuration: {
            key: "laravelFileCreator.showCreateFormRequest",
            type: "boolean",
            default: true,
            markdownDescription: "Show in the 'New Laravel file...' menu to create a Form Request",
            order: getEnumIndex(LaravelFileType, LaravelFileType.FormRequest) + 1,
        },
    },
    _a[LaravelFileType.Model] = {
        fileType: LaravelFileType.Model,
        quickPickLabel: "Model",
        commandName: "laravelFileCreator.createModel",
        title: "New Model",
        placeHolder: "Model Name",
        prompt: "Name of Model",
        contextTitle: "Create Model",
        group: "1_laravelFileCreator@".concat(getEnumIndex(LaravelFileType, LaravelFileType.Model) + 1),
        when: "explorerResourceIsFolder && laravelFileCreator.activated",
        configuration: {
            key: "laravelFileCreator.showCreateModel",
            type: "boolean",
            default: true,
            markdownDescription: "Show in the 'New Laravel file...' menu to create a Model",
            order: getEnumIndex(LaravelFileType, LaravelFileType.Model) + 1,
        },
    },
    _a[LaravelFileType.Migration] = {
        fileType: LaravelFileType.Migration,
        quickPickLabel: "Migration",
        commandName: "laravelFileCreator.createMigration",
        title: "New Migration",
        placeHolder: "Migration Name",
        prompt: "Name of Migration (use snake case)",
        contextTitle: "Create Migration",
        group: "1_laravelFileCreator@".concat(getEnumIndex(LaravelFileType, LaravelFileType.Migration) + 1),
        when: "explorerResourceIsFolder && laravelFileCreator.activated",
        configuration: {
            key: "laravelFileCreator.showCreateMigration",
            type: "boolean",
            default: true,
            markdownDescription: "Show in the 'New Laravel file...' menu to create a Migration",
            order: getEnumIndex(LaravelFileType, LaravelFileType.Migration) + 1,
        },
    },
    _a);
