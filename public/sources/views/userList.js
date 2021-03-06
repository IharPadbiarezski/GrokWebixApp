import {JetView} from "webix-jet";
import {users} from "../models/users";
import {userData} from "../models/userData";

export default class UserList extends JetView {
	config() {
		return {
			view: "list",
			localId: "list",
			padding: "0",
			borderless: true,
			scroll: "auto",
			width: 250,
			select: true,
			template: "#name#",
			on: {
				onAfterSelect: (id) => {
					this.app.callEvent("userinfo:show", [id]);
				}
			}
		};
	}

	init(view) {
		view.sync(users);
	}

	urlChange() {
		webix.promise.all([
			users.waitData,
			userData.waitData
		]).then(() => {
			let id = this.getParam("id") || users.getFirstId();
			if (id && users.exists(id)) {
				this.$$("list").select(id);
			}
			else {
				id = "";
			}
			userData.data.filter(obj => obj.userId === id);
		});
	}
}
