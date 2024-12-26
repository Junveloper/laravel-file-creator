import { readFileSync, writeFileSync } from "fs";
import { resolve } from "path";
import { commandsMapping } from "../src/LaravelFile/commandMapping";

type ConfigurationProperty = {
  type: string;
  default: boolean | string | null;
  markdownDescription: string;
  order: number;
};

type VSCodeContributes = {
  commands: Array<{
    command: string;
    category: string;
    title: string;
  }>;
  submenus: Array<{
    id: string;
    label: string;
  }>;
  menus: {
    "explorer/context": Array<{
      submenu: string;
      group: string;
    }>;
    "laravelFileCreator.menu": Array<{
      command: string;
      when: string;
      group: string;
    }>;
  };
  configuration: {
    type: string;
    title: string;
    properties: Record<string, ConfigurationProperty>;
  };
};

function generatePackageJsonConfig() {
  const packageJsonPath = resolve(__dirname, "../package.json");
  const packageJson = JSON.parse(readFileSync(packageJsonPath, "utf-8"));

  const newContributes: VSCodeContributes = {
    commands: Object.values(commandsMapping).map((command) => ({
      command: command.commandName,
      category: "Laravel File Creator",
      title: command.contextTitle,
    })),
    submenus: packageJson.contributes.submenus,
    menus: {
      "explorer/context": packageJson.contributes.menus["explorer/context"],
      "laravelFileCreator.menu": Object.values(commandsMapping)
        .filter((command) => command.configuration)
        .map((command) => ({
          command: command.commandName,
          when: command.when,
          group: command.group,
        })),
    },
    configuration: {
      type: "object",
      title: "Laravel File Creator",
      properties: {},
    },
  };

  newContributes.commands.push({
    command: "laravelFileCreator.createLaravelFile",
    category: "Laravel File Creator",
    title: "Create Other Laravel Files...",
  });

  newContributes.menus["laravelFileCreator.menu"].push({
    command: "laravelFileCreator.createLaravelFile",
    when: "explorerResourceIsFolder && laravelFileCreator.activated",
    group: "2_laravelFileCreator@1",
  });

  Object.values(commandsMapping).forEach((command) => {
    newContributes.configuration.properties[command.configuration.key] = {
      type: command.configuration.type,
      default: command.configuration.default,
      markdownDescription: command.configuration.markdownDescription,
      order: command.configuration.order,
    };
  });

  newContributes.configuration.properties[
    "laravelFileCreator.omitDownMethodInMigration"
  ] = {
    type: "boolean",
    default: true,
    markdownDescription: "Omit the `down` method in the migration file",
    order: 7,
  };

  newContributes.configuration.properties[
    "laravelFileCreator.composerFilePath"
  ] = {
    type: "string",
    default: null,
    markdownDescription:
      "Set `composer.json` location path (relative to project root folder)",
    order: 8,
  };

  packageJson.contributes = newContributes;

  writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2) + "\n");
}

generatePackageJsonConfig();
