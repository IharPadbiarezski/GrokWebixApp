import {JetView} from "webix-jet";
import UsersTable from "./users/usersTable";

export default class UsersView extends JetView {
	config() {
		const toolBar = {
			view: "toolbar",
			elements: [
				{
					view: "button",
					label: "Export to Excel",
					localId: "addButton",
					css: "webix_primary",
					align: "right",
					inputWidth: 200,
					click: () => {
						webix.toExcel(this.table, {
							filename: "users data",
							name: "Users",
							columns: {
								name: {header: "Full Name", width: 200},
								gender: {header: "Gender", width: 100},
								company: {header: "Company", width: 200},
								balance: {header: "Balance", width: 100}
							}
						});
					}
				},
				{
					view: "button",
					label: "Refresh",
					icon: "wxi-plus-square",
					css: "webix_primary",
					inputWidth: 200,
					align: "left",
					click: () => {
						this.table.refresh();
					}
				}
			]
		};

		return {
			rows: [
				UsersTable,
				toolBar
			]
		};
	}

	ready(view) {
		this.table = view.queryView("datatable");
	}
}
