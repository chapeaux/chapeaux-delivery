import { PluginTemplate } from "../../lib/pluginTemplate.ts";
import { App } from "../App.ts";

export default class MyPlugin extends PluginTemplate<App> {
    name = "my-plugin";
    
    version = "1.0.0";
    async start() {
      console.log("My plugin started");
    }
    async stop() {
      console.log("My plugin stopped");
    }
  }

  