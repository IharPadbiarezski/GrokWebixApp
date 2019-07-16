import {JetView} from "webix-jet";
import {userData} from "../models/userData";
import {users} from "../models/users";
import userAdditionInfo from "./userAdditionInfo";

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
					this.show(`userAdditionInfo?id=${id.row}`);
				}
			}
		};
		return {
			rows: [
				userInfoTable,
				{$subview: true}
			]
		}
	}

	init() {
		webix.promise.all([
			users.waitData,
			userData.waitData
		]).then(() => {
			this.$$("table").sync(userData);
		});
	}
}

