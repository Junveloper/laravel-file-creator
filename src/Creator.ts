import * as fs from "fs";
import * as vscode from "vscode";
import NamespaceResolver from "./NamespaceResolver";
import path = require("path");

export enum LaravelFileTypes {
  SingleActionController = "Single Action Controller",
  FormRequest = "Form Request",
}

export default class Creator {
  readonly msgFileExists = "File already exists!";
  readonly msgMustOpenFile = "You must open a file to generate code";

  public async createFile(type: LaravelFileTypes, folder: any) {
    if (!folder) {
      let askedFolder = await vscode.window.showOpenDialog({
        canSelectFiles: false,
        canSelectFolders: true,
        canSelectMany: false,
      });

      if (!askedFolder || !askedFolder[0]) {
        return;
      }

      folder = askedFolder[0];
    }

    let name = await vscode.window.showInputBox({
      title: "New " + this.capitalize(type),
      placeHolder: "Name",
      prompt: "Name of " + type,
    });

    if (!name) {
      return;
    }

    let namespaceResolver: NamespaceResolver = new NamespaceResolver();

    let namespace = await namespaceResolver.resolve(folder.fsPath);

    let filename = name.endsWith(".php") ? name : name + ".php";

    let spaceIndex: number = filename.indexOf(" ");
    if (spaceIndex > 0) {
      filename = filename.substring(0, spaceIndex) + ".php";
    }

    let fullFilename = folder.fsPath + path.sep + filename;

    this.writeFile(type, name, fullFilename, namespace);
  }

  public async generateCode(type: LaravelFileTypes) {
    const currentFile = vscode.window.activeTextEditor?.document.fileName;

    if (!currentFile) {
      vscode.window.showErrorMessage(this.msgMustOpenFile);
      return;
    }

    let namespaceResolver: NamespaceResolver = new NamespaceResolver();
    let namespace = await namespaceResolver.resolve(path.dirname(currentFile));

    if (namespace === undefined) {
      return;
    }

    this.writeFile(
      type,
      path.basename(currentFile),
      currentFile,
      namespace,
      true
    );
  }

  private writeFile(
    type: LaravelFileTypes,
    name: string,
    filename: string,
    namespace: string | undefined,
    overwrite: boolean = false
  ): void {
    console.log("here 1");

    if (fs.existsSync(filename) && !overwrite) {
      console.log("here 2");
      vscode.window.showErrorMessage(this.msgFileExists);
      return;
    }

    name = name.replace(/\.php+$/g, "");

    let content = "<?php\n";

    if (namespace !== "" && namespace !== undefined) {
      content += "namespace " + namespace + ";\n";
      content += "\n";
    }

    switch (type) {
      case LaravelFileTypes.SingleActionController:
        content += `class ${name}Controller extends Controller\n`;
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
        content += `class ${name}Request extends FormRequest\n`;
        content += "{\n";
        content += "    public function rules(): array\n";
        content += "    {\n";
        content += "        return [\n";
        content += "        //\n";
        content += "        ];\n";
        content += "    }\n";
        content += "}\n";
        break;
    }

    console.log("here 3");

    fs.writeFileSync(filename, content);

    vscode.workspace
      .openTextDocument(vscode.Uri.file(filename))
      .then((file) => {
        vscode.window.showTextDocument(file);
      });
  }

  private capitalize(text: string): string {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }
}
