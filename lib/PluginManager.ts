import { PluginTemplate } from "./pluginTemplate.ts";
import { join } from "https://deno.land/std@0.167.0/path/mod.ts";

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
          console.log('File:',join( dir, file.name));
          let Plugin = await import(join(dir, file.name));
          let plugin = new Plugin(app);
          await this.load(plugin as PluginTemplate<T>);
        }
      }

      async unloadAll() {
        for (let plugin of this._plugins) {
          await plugin.stop();
        }
      }
  }