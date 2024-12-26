import { existsSync, writeFileSync } from "fs";
import { window } from "vscode";

function createFile(filePath: string, content: string) {
  if (existsSync(filePath)) {
    window.showErrorMessage("The file already exists.");
    return;
  }

  writeFileSync(filePath, content);
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
