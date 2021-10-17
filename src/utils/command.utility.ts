import { Honorific, Phrase } from "../app/models/common.model";
import jsonCommon from "../data/common.json";

export class CommandUtility {
	private _honorifics: Array<Honorific>;
	private _phrases: Array<Phrase>;

	constructor() {
		this._honorifics = jsonCommon.honorifics.map(
			(honorific) => new Honorific({ name: honorific }),
		);
		this._phrases = jsonCommon.phrases.map(
			(phrase) => new Phrase({ description: phrase }),
		);
	}

	/**
	 * Gets a randomized honorific
	 * @returns Honorific
	 */
	getRandomHonorific(): Honorific {
		return this._honorifics[
			Math.floor(Math.random() * this._honorifics.length)
		];
	}

	/**
	 * Gets a randomized string of a phrase
	 * @param name Name of the user
	 * @param honorific The honorific given
	 * @returns Description of the Phrase
	 */
	getRandomPhrases(name: string, honorific: string): string {
		return this._phrases[
			Math.floor(Math.random() * this._phrases.length)
		].description.replace(
			"namePlaceholder-honorificPlaceholder",
			`${name}-${honorific}`,
		);
	}
}
