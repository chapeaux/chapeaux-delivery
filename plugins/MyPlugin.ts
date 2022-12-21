import {AppPlugin} from "../src/App";

export class MyPlugin extends AppPlugin {
    name = "my-plugin";
    
    version = "1.0.0";
    async start() {
      console.log("My plugin started");
    }
    async stop() {
      console.log("My plugin stopped");
    }
  }