import {JetView} from "webix-jet";
import {userData} from "../models/userData";

export default class UsersTable extends JetView {
	config() {
		const userInfoTable = {
			view: "datatable",
			localId: "table",
			scroll: "auto",
			select: true,
			editable: true,
			editaction: "dblclick",
			columns: [
				{
					id: "goal",
					header: "Goals",
					fillspace: true,
					editor: "text"
				},
				{
					id: "reminder",
					header: "Reminders",
					fillspace: true,
					editor: "text"
				},
				{
					id: "wish",
					header: "Wishes",
					fillspace: true,
					editor: "text"
				},
				{
					id: "hours",
					header: "Hours",
					fillspace: true,
					editor: "text"
				}
			],
			on: {
				onAfterSelect: (id) => {
					this.displayInfo(id.row);
				}
			}
		};
		return {
			rows: [
				userInfoTable,
				{$subview: true}
			]
		};
	}

	init() {
		webix.promise.all([
			userData.waitData
		]).then(() => {
			this.$$("table").sync(userData);
			this.displayInfo();
		});
	}

	displayInfo(id) {
		let url = "userAdditionInfo";
		if (id) {
			url += `?id=${id}`;
			this.show(url);
		}
		else {
			this.show(url);
		}
	}
}

