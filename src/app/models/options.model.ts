import { ClientOptions } from "discord.js";

/**
 * AppIntents model
 * AppIntents object
 */
interface IAppOptions {
	clientOptions?: ClientOptions;
}

export class AppOptions implements IAppOptions {
	clientOptions: ClientOptions;

  constructor(options: IAppOptions = {}) {
    this.clientOptions = options.clientOptions;
  }
}
