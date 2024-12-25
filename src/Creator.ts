import * as fs from "fs";
import * as vscode from "vscode";
import resolveNamespace from "./Namespace";
import path = require("path");

export enum LaravelFileTypes {
  SingleActionController = "Single Action Controller",
  FormRequest = "Form Request",
  Model = "Model",
  Migration = "Migration",
}

const inputBoxMapping: Record<LaravelFileTypes, vscode.InputBoxOptions> = {
  [LaravelFileTypes.SingleActionController]: {
    title: "New Single Action Controller",
    placeHolder: "Controller Name",
    prompt: "Name of Single Action Controller",
  },
  [LaravelFileTypes.FormRequest]: {
    title: "New Form Request",
    placeHolder: "Form Request Name",
    prompt: "Name of Form Request",
  },
  [LaravelFileTypes.Model]: {
    title: "New Model",
    placeHolder: "Model Name",
    prompt: "Name of Model",
  },
  [LaravelFileTypes.Migration]: {
    title: "New Migration",
    placeHolder: "Migration Name",
    prompt: "Name of Migration (use snake case)",
  },
};

export default class Creator {
  readonly msgFileExists = "File already exists!";
  readonly msgMustOpenFile = "You must open a file to generate code";

  public async createFile(type: LaravelFileTypes, folder: vscode.Uri) {
    let name = await vscode.window.showInputBox(inputBoxMapping[type]);

    if (!name) {
      return;
    }

    name = name.replace(/\s+/g, "");

    if (name.includes(".")) {
      name = name.split(".")[0];
    }

    if (type === LaravelFileTypes.Migration) {
      const now = new Date();
      const dateString = now
        .toISOString()
        .replace(/[-T]/g, "_")
        .replace(/:/g, "")
        .slice(0, -5);
      name = `${dateString}_${name}`;
    } else {
      name = this.capitalize(name);
    }

    switch (type) {
      case LaravelFileTypes.SingleActionController:
        if (!name.endsWith("Controller")) {
          name += "Controller";
        }
        break;
      case LaravelFileTypes.FormRequest:
        if (!name.endsWith("Request")) {
          name += "Request";
        }
        break;
      case LaravelFileTypes.Model:
        break;
      default:
        break;
    }

    let namespace = await resolveNamespace(folder.fsPath);

    let filename = name + ".php";

    let fullFilename = folder.fsPath + path.sep + filename;

    this.writeFile(type, name, fullFilename, namespace);
  }

  private writeFile(
    type: LaravelFileTypes,
    name: string,
    filePath: string,
    namespace: string | undefined,
    overwrite: boolean = false
  ): void {
    if (fs.existsSync(filePath) && !overwrite) {
      vscode.window.showErrorMessage(this.msgFileExists);
      return;
    }

    name = name.replace(/\.php+$/g, "");

    let content = "<?php\n\n";

    if (namespace !== "" && namespace !== undefined) {
      content += "namespace " + namespace + ";\n";
      content += "\n";
    }

    switch (type) {
      case LaravelFileTypes.SingleActionController:
        content += `class ${name}\n`;
        content += "{\n";
        content += "    public function __invoke()\n";
        content += "    {\n";
        content += "        \n";
        content += "    }\n";
        content += "}\n";
        break;
      case LaravelFileTypes.FormRequest:
        content += "use Illuminate\\Foundation\\Http\\FormRequest;";
        content += "\n";
        content += "\n";
        content += `class ${name} extends FormRequest\n`;
        content += "{\n";
        content += "    public function rules(): array\n";
        content += "    {\n";
        content += "        return [\n";
        content += "        //\n";
        content += "        ];\n";
        content += "    }\n";
        content += "}\n";
        break;
      case LaravelFileTypes.Model:
        content += "use Illuminate\\Database\\Eloquent\\Model;";
        content += "\n";
        content += "\n";
        content += `class ${name} extends Model\n`;
        content += "{\n";
        content += "\n";
        content += "}\n";
        break;
      case LaravelFileTypes.Migration:
        content += "use Illuminate\\Database\\Migrations\\Migration;";
        content += "use Illuminate\\Database\\Schema\\Blueprint;";
        content += "use Illuminate\\Support\\Facades\\Schema;";
        content += "\n";
        content += "\n";
        content += "return new class extends Migration {\n";
        content += "    public function up():void\n";
        content += "    {\n";
        content += "        Schema::table('', function (Blueprint $table) {\n";
        content += "        });\n";
        content += "    }\n";
        content += "};\n";
    }

    fs.writeFileSync(filePath, content);

    vscode.workspace
      .openTextDocument(vscode.Uri.file(filePath))
      .then((file) => {
        vscode.window.showTextDocument(file);
      });
  }

  private capitalize(text: string): string {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }
}
