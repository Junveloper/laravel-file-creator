import { workspace } from "vscode";
import { camelCaseToSnakeCase, commandNameToSignature } from "../utils";
import { SupportedFileType } from "./commandMapping";

export default function generateLaravelFile(
  type: SupportedFileType,
  className: string,
  namespace?: string
) {
  const generators: Record<SupportedFileType, () => string> = {
    [SupportedFileType.PhpClass]: () => newPhpClassCode(className, namespace),
    [SupportedFileType.PhpEnum]: () => newPhpEnumCode(className, namespace),
    [SupportedFileType.PhpInterface]: () =>
      newPhpInterfaceCode(className, namespace),
    [SupportedFileType.PhpTrait]: () => newPhpTraitCode(className, namespace),
    [SupportedFileType.BladeFile]: () => bladeFileCode(),
    [SupportedFileType.BladeComponentClass]: () =>
      BladeComponentClassCode(className, namespace),
    [SupportedFileType.Config]: () => configCode(),
    [SupportedFileType.ConsoleCommand]: () =>
      consoleCommandCode(className, namespace),
    [SupportedFileType.Controller]: () => controllerCode(className, namespace),
    [SupportedFileType.Event]: () => eventCode(className, namespace),
    [SupportedFileType.EventListener]: () =>
      eventListenerCode(className, namespace),
    [SupportedFileType.Exception]: () => exceptionCode(className, namespace),
    [SupportedFileType.Factory]: () => factoryCode(className, namespace),
    [SupportedFileType.FormRequest]: () =>
      formRequestCode(className, namespace),
    [SupportedFileType.Job]: () => jobCode(className, namespace),
    [SupportedFileType.JsonResource]: () =>
      jsonResourceCode(className, namespace),
    [SupportedFileType.JsonResourceCollection]: () =>
      jsonCollectionResourceCode(className, namespace),
    [SupportedFileType.Model]: () => modelCode(className, namespace),
    [SupportedFileType.Migration]: () => migrationCode(),
    [SupportedFileType.Mailable]: () => mailableCode(className, namespace),
    [SupportedFileType.Notification]: () =>
      notificationCode(className, namespace),
    [SupportedFileType.PestTest]: () => pestCode(),
    [SupportedFileType.Policy]: () => policyCode(className, namespace),
    [SupportedFileType.ResourceController]: () =>
      resourceControllerCode(className, namespace),
    [SupportedFileType.Rule]: () => ruleCode(className, namespace),
    [SupportedFileType.Seeder]: () => seederCode(className, namespace),
  };

  return generators[type]();
}

function newPhpClassCode(className: string, namespace?: string) {
  return `<?php
  ${namespace ? `\nnamespace ${namespace};\n\n` : "\n"}class ${className}
{
    
}`;
}

function newPhpEnumCode(className: string, namespace?: string) {
  return `<?php
  ${namespace ? `\nnamespace ${namespace};\n\n` : "\n"}enum ${className}
{
    
}`;
}

function newPhpInterfaceCode(className: string, namespace?: string) {
  return `<?php
  ${namespace ? `\nnamespace ${namespace};\n\n` : "\n"}interface ${className}
{
    
}`;
}

function newPhpTraitCode(className: string, namespace?: string) {
  return `<?php
  ${namespace ? `\nnamespace ${namespace};\n\n` : "\n"}trait ${className}
{
    
}`;
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

function jsonResourceCode(className: string, namespace?: string) {
  if (!className.endsWith("Resource")) {
    className += "Resource";
  }

  return `<?php
  ${
    namespace ? `\nnamespace ${namespace};\n\n` : "\n"
  }use Illuminate\\Http\\Request;
use Illuminate\\Http\\Resources\\Json\\JsonResource;

class ${className} extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
        
        ];
    }
}`;
}

function jsonCollectionResourceCode(className: string, namespace?: string) {
  if (!className.endsWith("Collection")) {
    className += "Collection";
  }

  return `<?php
  ${
    namespace ? `\nnamespace ${namespace};\n\n` : "\n"
  }use Illuminate\\Database\\Eloquent\\Collection;
use Illuminate\\Http\\Request;
use Illuminate\\Http\\Resources\\Json\\ResourceCollection;

class ${className} extends ResourceCollection
{
    public function __construct(Collection $resource)
    {
        parent::__construct($resource);
    }
        
    public function toArray(Request $request): array
    {
        return [
        
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

function mailableCode(className: string, namespace?: string) {
  if (!className.endsWith("Mail")) {
    className += "Mail";
  }

  return `<?php
${
  namespace ? `\nnamespace ${namespace};\n\n` : "\n"
}use Illuminate\\Bus\\Queueable;
use Illuminate\\Mail\\Mailable;
use Illuminate\\Mail\\Mailables\\Content;
use Illuminate\\Mail\\Mailables\\Envelope;
use Illuminate\\Queue\\SerializesModels;

class ${className} extends Mailable
{
    use Queueable;
    use SerializesModels;

    public function __construct()
    {
    }

    public function envelope(): Envelope
    {
        return new Envelope(
            subject: '',
        );
    }

    public function content(): Content
    {
        return new Content(
            markdown: '',
        );
    }

    public function attachments(): array
    {
        return [];
    }
}`;
}

function notificationCode(className: string, namespace?: string) {
  if (!className.endsWith("Notification")) {
    className += "Notification";
  }

  return `<?php
${
  namespace ? `\nnamespace ${namespace};\n\n` : "\n"
}use Illuminate\\Bus\\Queueable;
use Illuminate\\Contracts\\Queue\\ShouldQueue;
use Illuminate\\Notifications\\Messages\\MailMessage;
use Illuminate\\Notifications\\Notification;

class ${className} extends Notification implements ShouldQueue
{
    use Queueable;

    public function __construct()
    {
    }

    public function via(object $notifiable): array
    {
        return ['mail'];
    }

    public function toMail(object $notifiable): MailMessage
    {
        return (new MailMessage)
            ->line('The introduction to the notification.')
            ->action('Notification Action', url('/'))
            ->line('Thank you for using our application!');
    }

    public function toArray(object $notifiable): array
    {
        return [];
    }
}`;
}

function pestCode() {
  return `<?php

it('', function () {
});
  `;
}

function policyCode(className: string, namespace?: string) {
  if (!className.endsWith("Policy")) {
    className += "Policy";
  }

  return `<?php
${namespace ? `\nnamespace ${namespace};\n\n` : "\n"}use Domain\\Users\\User;
use Illuminate\\Auth\\Access\\HandlesAuthorization;

class ${className}
{
    use HandlesAuthorization;

    public function action(User $user): bool
    {
        
    }
}`;
}

function resourceControllerCode(className: string, namespace?: string) {
  if (!className.endsWith("Controller")) {
    className += "Controller";
  }

  return `<?php
${
  namespace ? `\nnamespace ${namespace};\n\n` : "\n"
}use Illuminate\\Http\\Request;

class ${className}
{
    public function index()
    {
        
    }

    public function store(Request $request)
    {
    }

    public function show($id)
    {
    }

    public function update(Request $request, $id)
    {
    }

    public function destroy($id)
    {
    }
}`;
}

function ruleCode(className: string, namespace?: string) {
  if (!className.endsWith("Rule")) {
    className += "Rule";
  }

  return `<?php
${namespace ? `\nnamespace ${namespace};\n\n` : "\n"}use Closure;
use Illuminate\\Contracts\\Validation\\ValidationRule;

class ${className} implements ValidationRule
{
    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        
    }
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

function factoryCode(className: string, namespace?: string) {
  if (!className.endsWith("Factory")) {
    className += "Factory";
  }

  return `<?php
${
  namespace ? `\nnamespace ${namespace};\n\n` : "\n"
}use Illuminate\\Database\\Eloquent\\Factories\\Factory;

class ${className} extends Factory
{
    protected $model = '';

    public function definition(): array
    {
        return [
            
        ];
    }
}`;
}

function seederCode(className: string, namespace?: string) {
  if (!className.endsWith("Seeder")) {
    className += "Seeder";
  }

  return `<?php
${
  namespace ? `\nnamespace ${namespace};\n\n` : "\n"
}use Illuminate\\Database\\Seeder;

class ${className} extends Seeder
{
    public function run()
    {

    }
}
  `;
}
