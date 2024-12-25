import * as fs from "fs";
import * as vscode from "vscode";

function createFile(filePath: string, content: string) {
  if (fs.existsSync(filePath)) {
    vscode.window.showErrorMessage("The file already exists.");
    return;
  }

  fs.writeFileSync(filePath, content);
}

function removeSpaces(name: string) {
  return name.replace(/\s+/g, "");
}

function removeExtension(name: string) {
  return name.split(".")[0];
}

function sanitizeFileName(name: string) {
  return removeSpaces(removeExtension(name));
}

function extractClassName(name: string) {
  return name.replace(/\.php+$/g, "");
}

export { createFile, extractClassName, removeExtension, sanitizeFileName };
