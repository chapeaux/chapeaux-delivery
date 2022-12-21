import { PluginManager } from "../lib/PluginManager";
import { PluginTemplate } from "../lib/pluginTemplate";

export class App {
    pluginManager = new PluginManager<App>();
    constructor() {}
    start() {
      this.pluginManager.loadDir(this, './plugins')
    }
    stop() {
      this.pluginManager.unloadAll();
    }
  }

export type AppPlugin = PluginTemplate<App>;
  