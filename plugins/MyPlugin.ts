import { PluginTemplate } from "../lib/pluginTemplate.ts";
import { App } from "../src/App.ts";

export class MyPlugin extends PluginTemplate<App> {
    name = "my-plugin";
    
    version = "1.0.0";
    async start() {
      console.log("My plugin started");
    }
    async stop() {
      console.log("My plugin stopped");
    }
  }

