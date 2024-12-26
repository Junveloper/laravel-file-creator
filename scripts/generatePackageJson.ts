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
  const packageJsonPath = resolve(__dirname, "../../package.json");
  const packageJson = JSON.parse(readFileSync(packageJsonPath, "utf-8"));

  // Create a new contributes object with commands first
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
          when: `${
            command.when
          } && config.laravelFileCreator.showCreate${command.fileType.replace(
            /\s+/g,
            ""
          )}`,
          group: command.group,
        })),
    },
    configuration: {
      type: "object",
      title: "Laravel File Creator",
      properties: {},
    },
  };

  // Add the "Create Other Laravel Files..." command
  newContributes.commands.push({
    command: "laravelFileCreator.createLaravelFile",
    category: "Laravel File Creator",
    title: "Create Other Laravel Files...",
  });

  // Add the "Create Other Laravel Files..." menu item
  newContributes.menus["laravelFileCreator.menu"].push({
    command: "laravelFileCreator.createLaravelFile",
    when: "explorerResourceIsFolder && phpCreateClass.activated",
    group: "2_laravelFileCreator@4",
  });

  // Generate configuration properties
  Object.values(commandsMapping)
    .filter((command) => command.configuration)
    .forEach((command) => {
      const configKey = `laravelFileCreator.showCreate${command.fileType.replace(
        /\s+/g,
        ""
      )}`;
      newContributes.configuration.properties[configKey] = {
        type: command.configuration!.type,
        default: command.configuration!.default,
        markdownDescription: command.configuration!.markdownDescription,
        order: command.configuration!.order,
      };
    });

  // Add omitDownMethodInMigration configuration
  newContributes.configuration.properties[
    "laravelFileCreator.omitDownMethodInMigration"
  ] = {
    type: "boolean",
    default: true,
    markdownDescription: "Omit the `down` method in the migration file",
    order: 7,
  };

  // Add composerFilePath configuration
  newContributes.configuration.properties[
    "laravelFileCreator.composerFilePath"
  ] = {
    type: "string",
    default: null,
    markdownDescription:
      "Set `composer.json` location path (relative to project root folder)",
    order: 8,
  };

  // Replace the entire contributes section
  packageJson.contributes = newContributes;

  writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2) + "\n");
}

generatePackageJsonConfig();
