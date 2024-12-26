import { workspace } from "vscode";
import { toSnakeCase } from "../utils";
import { LaravelFileType } from "./commandMapping";

export default function generateLaravelFile(
  type: LaravelFileType,
  className: string,
  namespace?: string
) {
  const generators: Record<LaravelFileType, () => string> = {
    [LaravelFileType.BladeFile]: () => bladeFileCode(),
    [LaravelFileType.BladeComponentClass]: () =>
      BladeComponentClassCode(className, namespace),
    [LaravelFileType.SingleActionController]: () =>
      singleActionControllerCode(className, namespace),
    [LaravelFileType.FormRequest]: () => formRequestCode(className, namespace),
    [LaravelFileType.Model]: () => modelCode(className, namespace),
    [LaravelFileType.Migration]: () => migrationCode(),
  };

  return generators[type]();
}

function bladeFileCode() {
  return `<div>
  
</div>`;
}

function BladeComponentClassCode(className: string, namespace?: string) {
  const snakeCaseClassName = toSnakeCase(className);

  return `<?php
${
  namespace ? `\nnamespace ${namespace};\n\n` : "\n"
}use Illuminate\\Contracts\\View\\View;
use Illuminate\\View\\Component;

class ${className} extends Component
{
    public function render(): View
    {
        return view('components.${snakeCaseClassName}');
    }
}`;
}

function singleActionControllerCode(className: string, namespace?: string) {
  if (!className.endsWith("Controller")) {
    className += "Controller";
  }

  return `<?php
${namespace ? `\nnamespace ${namespace};\n\n` : "\n"}class ${className}
{
    public function __invoke()
    {
        
    }
}`;
}

function formRequestCode(className: string, namespace?: string) {
  if (!className.endsWith("Request")) {
    className += "Request";
  }

  return `<?php
${
  namespace ? `\nnamespace ${namespace};\n\n` : "\n"
}use Illuminate\\Foundation\\Http\\FormRequest;

class ${className} extends FormRequest
{
    public function rules(): array
    {
        return [
        //
        ];
    }
}`;
}

function modelCode(className: string, namespace?: string) {
  return `<?php
${
  namespace ? `\nnamespace ${namespace};\n\n` : "\n"
}use Illuminate\\Database\\Eloquent\\Model;

class ${className} extends Model
{

}`;
}

function migrationCode() {
  const omitDownMethod = workspace
    .getConfiguration("laravelFileCreator")
    .get("omitDownMethodInMigration");

  return `<?php

use Illuminate\\Database\\Migrations\\Migration;
use Illuminate\\Database\\Schema\\Blueprint;
use Illuminate\\Support\\Facades\\Schema;

return new class extends Migration {
    public function up(): void
    {
        
    }${
      omitDownMethod
        ? ""
        : "\n\n    public function down(): void\n    {\n        \n    }"
    }
};`;
}
