import { WorldInitializeSignal } from "@serenityjs/core";
import { LoggerColors } from "@serenityjs/logger";
import { Plugin, PluginEvents, PluginPriority } from "@serenityjs/plugins";
import { ItemTypes } from "./items";
class SamplePlugin extends Plugin implements PluginEvents {
  // Declare the priorty of the plugin.

  // Depending on the priority, plugins will be initialized in a specific order.
  // Plugins with a higher priority will be initialized first.
  public readonly priority: PluginPriority = PluginPriority.Low;

  public constructor() {
    // Super assigns the name and version of the plugin.
    // There is an additional parameter that can be passed to the super constructor,
    // but since this is a class-based plugin, it is not required, as the properties & methods can be directly created in the class.
    super("ruby-equipment", "1.0.0");

    // Set the color of the logger for this plugin.
    this.logger.color = LoggerColors.MaterialRedstone;
  }

  // This method is called right after the plugin is loaded from the file system.
  // Once this method is called, `this.serenity` & `this.pipeline` will be in scope.
  // This method should be used when registering any custom features; such as commands, traits, generators, providers, blocks, etc.
  public onInitialize(): void {
    
  }

  // This method is called once all plugins have been initialized and all worlds have been loaded.
  // This method should be used to start any services and tasks that the plugin requires.
  public onStartUp(): void {
    this.logger.info("Sample plugin started up!");
  }

  // This method is called when the server is shutting down, but is called before the worlds and raknet server are shut down.
  // This method should be used to stop any services and tasks that the plugin started up.
  // This also should be used to clean up any resources that the plugin created via the `onInitialize` method.
  public onShutDown(): void {
    this.logger.info("Sample plugin shut down!");
  }

  public onWorldInitialize({ world }: WorldInitializeSignal): void {
    // Register custom item types to the item palette.
    for (const itemType of ItemTypes) {
      world.itemPalette.registerType(itemType);
    }
  }
}

export default new SamplePlugin();
