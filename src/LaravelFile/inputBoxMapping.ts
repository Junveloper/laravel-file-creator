import * as vscode from "vscode";

export enum LaravelFileTypes {
  SingleActionController = "Single Action Controller",
  FormRequest = "Form Request",
  Model = "Model",
  Migration = "Migration",
}

export const inputBoxMapping: Record<LaravelFileTypes, vscode.InputBoxOptions> =
  {
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
