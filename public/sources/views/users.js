import {JetView} from "webix-jet";
import UsersTable from "./users/usersTable";
import UsersWindow from "./users/usersWindow";

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

// import {JetView} from "webix-jet";
// import {users} from "../models/users";
// import {genders} from "../models/genders";
// import CommonDataTable from "./common/datatable";
// import UsersWindow from "./users/usersWindow";
//
// export default class UsersDataTable extends JetView {
//
// 	config() {
// 		let myColumns = [
// 			{
// 				id: "name",
// 				header: ["Full Name", {content: "textFilter"}],
// 				fillspace: true,
// 				sort: "string"
// 			},
// 			{
// 				id: "gender",
// 				header: ["Gender", {content: "selectFilter"}],
// 				collection: genders,
// 				fillspace: true,
// 				sort: "select"
// 			},
// 			{
// 				id: "company",
// 				header: ["Company", {content: "textFilter"}],
// 				fillspace: true,
// 				sort: "string"
// 			},
// 			{
// 				id: "balance",
// 				header: ["Balance", {content: "numberFilter"}],
// 				template: obj => `$${obj.balance}`,
// 				sort: "int"
// 			},
// 		];
//
// 		let table = new CommonDataTable(this.app, "", users, "isActive", "Available", "Access", "Unavailable", "user");
//
// 		console.log(table.columns);
// 		return table
// 	}

	// ready(view) {
	// 	// let table = view.getRoot();
	// 	console.log(view)
	// 	users.waitData.then(() => {
	// 				view.queryView('datatable').sync(users);
	// 				// this.form = this.ui(UsersWindow);
	// 	});
	//
	// 	console.log(view.getRoot().queryView('datatable').getRoot().columns);
	// }

// 	init(view) {
// 		console.log("hi")
// 		genders.waitData.then(() => {
// 			view.sync(users);
// 			// this.form = this.ui(UsersWindow);
// 		});
// 	}
// }

