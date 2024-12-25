import { LaravelFileTypes } from "./inputBoxMapping";

export default function generateLaravelFile(
  type: LaravelFileTypes,
  className: string,
  namespace?: string
) {
  if (type === LaravelFileTypes.Migration) {
    return migrationCode();
  }

  return "";
}

function migrationCode() {
  let content = "<?php\n\n";

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

  return content;
}
