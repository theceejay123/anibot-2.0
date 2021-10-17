import { Command } from "../app/models/command.model";
import { readdirSync } from "fs";
import { join } from "path";
import { App } from "../app/app";
import { Event } from "../app/models/event.model";

export class AppUtility {
	private _app: App;

	/**
	 * Default Constructor.
	 * @param app Discord Client App
	 */
	constructor(app: App) {
		this._app = app;
	}

	/**
	 * Loads all commands specified in the @app/commands folder.
	 */
	async loadAllCommands() {
		const commandFiles = readdirSync(join(__dirname, "..", "app", "commands"));
		for (const filename of commandFiles) {
			const command: Command = (
				await import(join(__dirname, "..", "app", "commands", filename))
			).default;
			this._app.commands.set(command.name, command);
		}
	}

	/**
	 * Loads all events specified in the @app/events folder.
	 */
	async loadAllEvents() {
		const eventFiles = readdirSync(join(__dirname, "..", "app", "events"));
		for (const filename of eventFiles) {
			const event: Event = (
				await import(join(__dirname, "..", "app", "events", filename))
			).default;
			this._app.on(event.name, (...args) => {
				event.execute(this._app, ...args);
			});
		}
	}
}
