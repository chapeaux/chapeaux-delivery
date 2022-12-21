import { PluginManager } from "../lib/PluginManager.ts";
import { resolve } from "https://deno.land/std@0.167.0/path/mod.ts";

export class App {
    pluginManager = new PluginManager<App>();
    constructor() {}
    start() {
      this.pluginManager.loadDir(this, resolve('./plugins'))
    }
    stop() {
      this.pluginManager.unloadAll();
    }
  }
