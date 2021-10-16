import { AppUtility } from "../utils/app.utility";
import { Client, Collection } from "discord.js";
import { Command } from "./models/command.model";
import { ConfigurationSetting } from "./models/configuration.model";
import { AppOptions } from "./models/options.model";

export class App extends Client {
	private readonly utility: AppUtility;

	config: ConfigurationSetting;
	commands: Collection<string, Command>;
	constructor(options: AppOptions, config: ConfigurationSetting) {
		super(options.clientOptions);
		this.config = config;
		this.commands = new Collection<string, Command>();
		this.utility = new AppUtility(this);
	}

	async init() {
		await this.login(this.config.token);
	}
}
