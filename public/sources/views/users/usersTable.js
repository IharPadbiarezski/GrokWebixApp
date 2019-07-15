import {JetView} from "webix-jet";
import {users} from "../../models/users";
import {genders} from "../../models/genders";
import UsersWindow from "./usersWindow";

export default class UsersTable extends JetView {
	config() {
		return {
			view: "datatable",
			scroll: "auto",
			columns: [
				{
					id: "isActive",
					header: "Available",
					template: "{common.checkbox()}",
					checkValue: "Available",
					uncheckValue: "Unavailable",
					sort: "string"
				},
				{
					id: "name",
					header: ["Full Name", {content: "textFilter"}],
					fillspace: true,
					sort: "string"
				},
				{
					id: "gender",
					header: ["Gender", {content: "selectFilter"}],
					collection: genders,
					fillspace: true,
					sort: "select"
				},
				{
					id: "company",
					header: ["Company", {content: "textFilter"}],
					fillspace: true,
					sort: "string"
				},
				{
					id: "balance",
					header: ["Balance", {content: "numberFilter"}],
					template: obj => `$${obj.balance}`,
					sort: "int"
				},
				{
					id: "edit",
					template: "{common.editIcon()}",
					width: 60
				}
			],

			onClick: {
				"wxi-pencil": (e, id) => {
					const item = this.getRoot().getItem(id);
					this.form.showForm(item);
				}
			}
		};
	}

	init(view) {
		genders.waitData.then(() => {
			view.sync(users);
			this.form = this.ui(UsersWindow);
		});
	}
}
