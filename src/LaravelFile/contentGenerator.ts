import { workspace } from "vscode";
import { camelCaseToSnakeCase, commandNameToSignature } from "../utils";
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
    [LaravelFileType.Config]: () => configCode(),
    [LaravelFileType.ConsoleCommand]: () =>
      consoleCommandCode(className, namespace),
    [LaravelFileType.Controller]: () => controllerCode(className, namespace),
    [LaravelFileType.Event]: () => eventCode(className, namespace),
    [LaravelFileType.EventListener]: () =>
      eventListenerCode(className, namespace),
    [LaravelFileType.Exception]: () => exceptionCode(className, namespace),
    [LaravelFileType.FormRequest]: () => formRequestCode(className, namespace),
    [LaravelFileType.Job]: () => jobCode(className, namespace),
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
  const snakeCaseClassName = camelCaseToSnakeCase(className);

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

function configCode() {
  return `<?php
  
  return [
    //
  ]
  `;
}

function consoleCommandCode(className: string, namespace?: string) {
  if (!className.endsWith("Command")) {
    className += "Command";
  }

  const commandName = className.replace("Command", "");
  const signature = commandNameToSignature(commandName);

  return `<?php
  ${
    namespace ? `\nnamespace ${namespace};\n\n` : "\n"
  }use Illuminate\\Console\\Command;

class ${className} extends Command
{
    protected $signature = '${signature}';

    protected $description = 'Command description';
      
    public function handle(): void
    {
          
    }
}`;
}

function controllerCode(className: string, namespace?: string) {
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

function eventCode(className: string, namespace?: string) {
  if (!className.endsWith("Event")) {
    className += "Event";
  }

  return `<?php
  ${
    namespace ? `\nnamespace ${namespace};\n\n` : "\n"
  }use Illuminate\\Foundation\\Events\\Dispatchable;

class ${className}
{     
    use Dispatchable;

    public function __construct()
    {   
    }
}`;
}

function eventListenerCode(className: string, namespace?: string) {
  if (!className.endsWith("Listener")) {
    className += "Listener";
  }

  return `<?php
  ${namespace ? `\nnamespace ${namespace};\n\n` : "\n"}class ${className}
{
  public function __construct()
  {
  }

  public function handle($event): void
  {
  }
}
`;
}

function exceptionCode(className: string, namespace?: string) {
  if (!className.endsWith("Exception")) {
    className += "Exception";
  }

  return `<?php
  ${namespace ? `\nnamespace ${namespace};\n\n` : "\n"}use Exception;

class ${className} extends Exception
{
}
`;
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

function jobCode(className: string, namespace?: string) {
  if (!className.endsWith("Job")) {
    className += "Job";
  }

  return `<?php
  ${
    namespace ? `\nnamespace ${namespace};\n\n` : "\n"
  }use Illuminate\\Bus\\Queueable;
use Illuminate\\Contracts\\Queue\\ShouldQueue;
use Illuminate\\Foundation\\Bus\\Dispatchable;
use Illuminate\\Queue\\InteractsWithQueue;
use Illuminate\\Queue\\SerializesModels;

class ${className} implements ShouldQueue
{
    use Dispatchable;
    use InteractsWithQueue;
    use Queueable;
    use SerializesModels;

    public function __construct()
    {
        
    }

    public function handle(): void
    {
        
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
