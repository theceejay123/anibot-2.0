/**
 * Honorific model
 * Honorific object
 */

interface IHonorific {
	name?: string;
}

export class Honorific implements IHonorific {
	name?: string;

	constructor(options: IHonorific = {}) {
		this.name = options.name || "";
	}
}

/**
 * Phrase model
 * Phrase object
 */

interface IPhrase {
	description?: string;
}

export class Phrase implements IPhrase {
	description?: string;

	constructor(options: IPhrase = {}) {
		this.description = options.description || "";
	}
}