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
					userData.waitData.then(() => {
						if (id && userData.exists(id)) {
							userData.data.filter(obj => obj.userId.toString() === id.toString());
						}
					});
				}
			}
		};
	}

	init(view) {
		view.sync(users);
	}

	urlChange() {
		userData.waitData.then(() => {
			const id = userData.getFirstId();
			if (id) {
				this.$$("list").select(id);
			}
		});
	}
}
