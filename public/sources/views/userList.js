import {JetView} from "webix-jet";
import {users} from "../models/users";
import {relatedUsersData} from "../models/relatetedData"

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
					relatedUsersData.waitData.then(() => {
						if (id && relatedUsersData.exists(id)) {
							relatedUsersData.data.filter(obj => obj.userId.toString() === id.toString());
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
		relatedUsersData.waitData.then(() => {
			const id = relatedUsersData.getFirstId();
			if (id) {
				this.$$("list").select(id);
			}
		});
	}
}
