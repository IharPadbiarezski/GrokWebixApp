import {JetView} from "webix-jet";
import {userData} from "../models/userData";
import {users} from "../models/users";

export default class UsersTemplate extends JetView {
	config() {
		const userTemplate = {
			view: "template",
			localId: "template",
			template: obj => `
				<div class="user-info">
					<p>Goal: ${obj.goal || "-"}</p>
					<p>Time: ${obj.hours || "0"} hours</p>
					<p>Reminder: ${obj.reminder || "-"}</p>
					<p>Wish: ${obj.wish || "-"}</p>
				</div>
			`
		};

		return userTemplate;
	}

	urlChange() {
		webix.promise.all([
			users.waitData,
			userData.waitData
		]).then(() => {
			const id = this.getParam("id");
			if (id && userData.exists(id)) {
				let values = webix.copy(userData.getItem(id));
				// if (values.StatusID) {
				// 	const status = statuses.getItem(values.StatusID) || "";
				// 	values.status = status ? status.Value : "";
				// 	const icon = icons.getItem(status.Icon) || "";
				// 	values.icon = icon.value || "";
				// }
				this.$$("template").setValues(values);
			}
		});
	}
}

