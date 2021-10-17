/**
 * Footer model
 * Footer object
 */

interface IFooter {
	text?: string;
	iconURL?: string;
	proxyIconURL?: string;
}

export class Footer implements IFooter {
	text?: string;
	iconURL?: string;
	proxyIconURL?: string;

	constructor(options: IFooter = {}) {
		this.text = options.text || "";
		this.iconURL = options.iconURL || "";
		this.proxyIconURL = options.proxyIconURL || "";
	}
}

/**
 * Embed model
 * Embed object
 */

interface IEmbed {
	color?: string;
	title?: string;
	description?: string;
	timestamp?: Date;
	footer?: Footer;
}

export class Embed implements IEmbed {
	color?: string;
	title?: string;
	description?: string;
	timestamp?: Date;
	footer?: Footer;

	constructor(options: IEmbed = {}) {
		this.color = options.color || "";
		this.title = options.title || "";
		this.description = options.description || "";
		this.timestamp = options.timestamp || new Date();
		this.footer = options.footer || new Footer();
	}
}
