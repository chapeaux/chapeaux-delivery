export abstract class PluginTemplate<T> {
    abstract name: string;
    abstract version: string;
    app: T;
    constructor(app: T) {
      this.app = app;
    }
    abstract start(): Promise<void>;
    abstract stop():  Promise<void>;
  }
  