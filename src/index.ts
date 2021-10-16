import { App } from "./app/app";
import { ConfigUtility } from "./utils/config.utility";

class Main {
	private _config: ConfigUtility;
	private _app: App;

	constructor() {
		this._config = new ConfigUtility();
		this._app = new App(this._config.getAppOptions(), this._config.getConfigurationSettings());
	}

	async initialize() {
		await this._app.init();
	}
}

new Main().initialize();
