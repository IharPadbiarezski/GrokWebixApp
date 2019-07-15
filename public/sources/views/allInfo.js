import {JetView} from "webix-jet";
import UserList from "./userList";
import {relatedUsersData} from "../models/relatetedData";
import UsersTable from "./users/usersTable";

export default class AllInfoView extends JetView {
	config() {

		const relatedUserTable = {
			view: "datatable",
			localId: "relatedUserTable",
			scroll: "auto",
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
			]
		};
		return {
			cols: [
				UserList,
				{
					rows: [
						relatedUserTable,
						{}
					]
				}
			]
		};
	}

	init() {
		this.$$("relatedUserTable").sync(relatedUsersData);
	}
}
