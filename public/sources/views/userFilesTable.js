import {JetView} from "webix-jet";

export default class UserFilesTable extends JetView {
	config() {
		return {
			template: "Place for UserFiles Table",
			css: "webix_shadow_medium app_start"
		}
	}
};
