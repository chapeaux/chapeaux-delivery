import { PluginTemplate } from "./pluginTemplate.ts";
import { join,basename } from "https://deno.land/std@0.167.0/path/mod.ts";

export class PluginManager<T> {
    private _plugins: PluginTemplate<T>[] = [];
    async load(plugin: PluginTemplate<T>) {
      this._plugins.push(plugin);
      await plugin.start();
    }
    async unload(pluginName: string) {
      let plugin = this._plugins.find(plugin => plugin.name === pluginName);
      if (!plugin) return false;
      await plugin.stop();
      return true;
    }

    async loadDir(app: T, dir: string) {
      console.log('Load:',dir);
        for await (const file of Deno.readDir(dir)) {
          // The current working is used to resolve the path to the plugins directory.
          const fileLocation = join(dir, file.name);
          console.log('File:',fileLocation);
          const moduleName = basename(fileLocation).split('.')[0];
          let Plugin = await import(fileLocation);
          console.log("Plugin:",Plugin);
          let plugin = new Plugin[moduleName](app);
          await this.load(plugin as PluginTemplate<T>);
        }
      }

      async unloadAll() {
        for await (let plugin of this._plugins) {
          plugin.stop();
        }
      }
  }