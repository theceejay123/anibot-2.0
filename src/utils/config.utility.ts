import {
	ConfigurationSetting,
	DefaultSetting,
} from "../app/models/configuration.model";
import { AppOptions } from "../app/models/options.model";
import { Intents } from "discord.js";
import { config } from "dotenv";

import jsonDefaultSetting from "../data/default-setting.json";

config();
export class ConfigUtility {
	private _configurationSettings: ConfigurationSetting;
	private _defaultSettings: DefaultSetting;
	private _clientOptions: AppOptions;

  /**
   * Default Constructor.
   */
	constructor() {
		this._defaultSettings = new DefaultSetting(jsonDefaultSetting);
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

  /**
   * Gets the client options from AppOptions.
   * @returns AppOptions
   */
	getAppOptions(): AppOptions {
		return this._clientOptions;
	}

  /**
   * Gets the config settings for starting the discord bot.
   * @returns ConfigurationSettings
   */
	getConfigurationSettings(): ConfigurationSetting {
		return this._configurationSettings;
	}

  /**
   * Gets the default discord settings for a bot.
   * @returns DefaultSetting
   */
  getDefaultSettings(): DefaultSetting {
    return this._defaultSettings;
  }
}
