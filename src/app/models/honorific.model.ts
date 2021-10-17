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
