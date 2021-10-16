import { Message } from "discord.js";
import { App } from "../app";

/**
 * CommandArgs model
 * CommandArgs object 
 */

interface ICommandArgs {
	client?: App;
	message?: Message;
	args?: Array<string>;
}

export class CommandArgs implements ICommandArgs {
	client?: App;
	message?: Message;
	args?: Array<string>;

	constructor(options: ICommandArgs = {}) {
		this.client = options.client;
		this.message = options.message;
		this.args = options.args || new Array<string>();
	}
}

/**
 * Command model
 * Command object
 */

interface ICommand {
	name?: string;
	aliases?: Array<string>;
	execute?: (args: ICommandArgs) => Promise<unknown | void> | unknown | void;
}

export class Command implements ICommand {
	name?: string;
	aliases?: Array<string>;
	execute?: (args: CommandArgs) => Promise<unknown | void> | unknown | void;

	constructor(options: ICommand = {}) {
		this.name = options.name || "";
		this.aliases = options.aliases || new Array<string>();
		this.execute = options.execute;
	}
}
