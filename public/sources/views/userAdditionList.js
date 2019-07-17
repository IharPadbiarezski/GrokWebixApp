import {JetView} from "webix-jet";
import {places} from "../models/places";
import {userData} from "../models/userData";

export default class UserList extends JetView {
	config() {
		return {
			view: "list",
			localId: "list",
			padding: "0",
			scroll: "auto",
			select: true,
			template: "#place#"
		};
	}

	init(view) {
		this.webix.promise.all([
			places.waitData,
			userData.waitData
		]).then(() => {
			view.sync(places);
		});
	}

	urlChange() {
		places.waitData.then(() => {
			const id = this.getParam("id") || "";
			places.data.filter(obj => obj.userDataId.toString() === id.toString());
		});
	}
}