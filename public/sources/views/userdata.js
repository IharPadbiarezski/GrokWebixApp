import {JetView} from "webix-jet";
import UserList from "./userList";
import {userData} from "../models/userData";

export default class AllInfoView extends JetView {
	config() {
		return {
			cols: [
				UserList,
				{$subview: true}
			]
		};
	}

	init() {
		// this.$$("relatedUserTable").sync(userData);

		this.on(this.app, "userinfo:show", (id) => {
			this.show(`/top/userdata?id=${id}/userinfo`);
		});
	}
}
