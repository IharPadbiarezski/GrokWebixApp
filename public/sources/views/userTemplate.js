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
					<h4 class="name">${obj.name || "Here gonna be a name"}</h4>
					<p>Goal: ${obj.goal || "Here gonna be a goal"}</p>
					<p>Time: ${obj.hours || "Here gonna be some"} hours</p>
					<p>Reminder: ${obj.reminder || "Here gonna be a reminder"}</p>
					<p>Wish: ${obj.wish || "Here gonna be a wish"}</p>
				</div>
			`
		};

		return userTemplate;
	}

	urlChange() {
		webix.promise.all([
			// users.waitData,
			userData.waitData
		]).then(() => {
			const id = this.getParam("id");
			if (id && userData.exists(id)) {
				let values = webix.copy(userData.getItem(id));
				if (values.userId) {
					const name = users.getItem(values.userId).name || "";
					values.name = name || "";
				}
				this.$$("template").setValues(values);
			}
		});
	}
}

