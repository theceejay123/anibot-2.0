import { Honorific } from "../app/models/honorific.model";
import jsonHonorifics from "../data/honorifics.json";

export class CommandUtility {
	private _honorifics: Array<Honorific>;

	constructor() {
		this._honorifics = jsonHonorifics.honorifics.map(
			(honorific) => new Honorific({ name: honorific }),
		);
		console.log(this._honorifics);
	}

	getRandomHonorific(): Honorific {
    return this._honorifics[Math.floor(Math.random() * this._honorifics.length)];
  }
}
