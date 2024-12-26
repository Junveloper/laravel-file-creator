<p align="center">
    <img src="https://raw.githubusercontent.com/Junveloper/laravel-file-creator/main/logo.png" alt="Create PHP Class" style="width: 300px; height:300px"/>
</p>

# Create Laravel File easily for Visual Studio Code

A Visual Studio Code extension for creating various Laravel files from context menu in file explorer or in opened file.

This has been inspired from one of the features from a popular PHPStorm plugin, [Laravel Idea](https://laravel-idea.com/), and another VSCode Extension, [PHP Create Class](https://marketplace.visualstudio.com/items?itemName=jaguadoromero.vscode-php-create-class).

## Supported Files

The following files are supported:

- Blade File
- Blade Component Class
- Config
- Console Command
- Controller (Single Action)
- Controller (Resource)
- Event
- Event Listener
- Exception
- Form Request
- Job
- JSON Resource
- JSON Resource Collection
- Mailable
- Migration
- Model
- Notification
- PEST Test
- Policy
- Rule

The namespace is auto-resolved through `composer.json` file.

## Settings

You can select which file will appear in the context menu.

### Creating Model

![CreateModel](https://raw.githubusercontent.com/Junveloper/laravel-file-creator/main/model-creation.gif)

### Creating Single Action Controller

![CreateSingleActionController](https://raw.githubusercontent.com/Junveloper/laravel-file-creator/main/create-single-action-controller.gif)

### Creating Resource Controller

![CreatingResourceController](https://raw.githubusercontent.com/Junveloper/laravel-file-creator/main/resource-controller.gif)
