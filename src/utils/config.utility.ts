import {
	ConfigurationSetting,
	DefaultSetting,
} from "../app/models/configuration.model";
import { AppOptions } from "../app/models/options.model";
import { Intents } from "discord.js";
import { config } from "dotenv";

config();
export class ConfigUtility {
	private _configurationSettings: ConfigurationSetting;
	private _defaultSettings: DefaultSetting;
	private _clientOptions: AppOptions;

	constructor() {
		this._configurationSettings = new ConfigurationSetting({
			token: process.env.TOKEN as string,
			prefix: "!",
			cooldown: 3000,
		});
		this._clientOptions = new AppOptions({
			clientOptions: {
				intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
			},
		});
	}

	getAppOptions(): AppOptions {
		return this._clientOptions;
	}

	getConfigurationSettings() {
		return this._configurationSettings;
	}
}
