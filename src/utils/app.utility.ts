import { App } from "../app/app";

export class AppUtility {
  private _app: App;

  /**
   * Default Constructor.
   * @param app Discord Client App
   */
  constructor(app: App) {
    this._app = app;
  }

  async loadAllCommands() {

  }

  async loadAllEvents() {
    
  }
}