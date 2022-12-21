import { PluginTemplate } from "./pluginTemplate";

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
        let files = await fs.readdir(dir);
        for (let file of files) {
          // The current working is used to resolve the path to the plugins directory.
          let Plugin = await import(path.join(process.cwd(), dir, file));
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