/**
 * ConfigurationSetting model
 * ConfigurationSetting object
 */

interface IConfigurationSetting {
	token?: string;
	prefix?: string;
	cooldown?: number;
}

export class ConfigurationSetting implements IConfigurationSetting {
  token?: string;
  prefix?: string;
  cooldown?: number;

  constructor(options: IConfigurationSetting = {}) {
    this.token = options.token || "";
    this.prefix = options.prefix || "";
    this.cooldown = options.cooldown || 0;
  }
}

/**
 * DefaultSetting model
 * DefaultSetting object
 */

 interface IDefaultSetting {
	prefix?: string;
	modLogChannel?: string;
	modRole?: string;
	adminRole?: string;
	systemNotice?: boolean;
	commandReply?: boolean;
	welcomeChannel?: string;
	welcomeMessage?: string;
	welcomeEnabled?: boolean;
}

export class DefaultSetting implements IDefaultSetting {
	prefix?: string;
	modLogChannel?: string;
	modRole?: string;
	adminRole?: string;
	systemNotice?: boolean;
	commandReply?: boolean;
	welcomeChannel?: string;
	welcomeMessage?: string;
	welcomeEnabled?: boolean;

	constructor(options: DefaultSetting = {}) {
		this.prefix = options.prefix || "";
		this.modLogChannel = options.modLogChannel || "";
		this.modRole = options.modRole || "";
		this.systemNotice = options.systemNotice || false;
		this.commandReply = options.commandReply || false;
		this.welcomeChannel = options.welcomeChannel || "";
		this.welcomeMessage = options.welcomeMessage || "";
		this.welcomeEnabled = options.welcomeEnabled || false;
	}
}