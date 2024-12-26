import * as vscode from "vscode";
import { LaravelFileTypes } from "./inputBoxMapping";

export default function generateLaravelFile(
  type: LaravelFileTypes,
  className: string,
  namespace?: string
) {
  const generators: Record<LaravelFileTypes, () => string> = {
    [LaravelFileTypes.Migration]: () => migrationCode(),
    [LaravelFileTypes.SingleActionController]: () =>
      singleActionControllerCode(className, namespace),
    [LaravelFileTypes.FormRequest]: () => formRequestCode(className, namespace),
    [LaravelFileTypes.Model]: () => modelCode(className, namespace),
  };

  return generators[type]();
}

function singleActionControllerCode(className: string, namespace?: string) {
  if (!className.endsWith("Controller")) {
    className += "Controller";
  }

  return `<?php

${namespace ? `namespace ${namespace};` : ""}

class ${className}
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

${namespace ? `namespace ${namespace};` : ""}

use Illuminate\\Foundation\\Http\\FormRequest;

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

${namespace ? `namespace ${namespace};` : ""}

use Illuminate\\Database\\Eloquent\\Model;

class ${className} extends Model
{

}`;
}

function migrationCode() {
  const omitDownMethod = vscode.workspace
    .getConfiguration("laravelFileCreator")
    .get("omitDownMethodInMigration");

  if (omitDownMethod) {
    return `<?php

use Illuminate\\Database\\Migrations\\Migration;
use Illuminate\\Database\\Schema\\Blueprint;
use Illuminate\\Support\\Facades\\Schema;

return new class extends Migration {
    public function up(): void
    {
        
    }
};`;
  } else {
    return `<?php

use Illuminate\\Database\\Migrations\\Migration;
use Illuminate\\Database\\Schema\\Blueprint;
use Illuminate\\Support\\Facades\\Schema;

return new class extends Migration {
    public function up(): void
    {
        
    }

    public function down(): void
    {
        
    }
};`;
  }
}
