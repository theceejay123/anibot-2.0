import { App } from "../app";

interface IEvent {
  name?: string;
  execute?: (app: App, ...args: any[]) => Promise<unknown | void> | unknown | void;
}

export class Event implements IEvent {
  name?: string;
  execute: (app: App, ...args: any[]) => Promise<unknown | void> | unknown | void;

  constructor(options: IEvent = {}) {
    this.name = options.name || "";
    this.execute = options.execute;
  }
}