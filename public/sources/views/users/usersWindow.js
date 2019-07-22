import {JetView} from "webix-jet";
import {genders} from "../../models/genders";
import {users} from "../../models/users";

export default class UsersWindow extends JetView {
	config() {
		return {
			view: "window",
			head: false,
			position: "center",
			modal: true,
			body: {
				view: "form",
				localId: "activityform",
				width: 600,
				elements: [
					{
						view: "template",
						template: "User",
						type: "header"
					},
					{
						view: "textarea",
						name: "name",
						label: "Full Name",
						invalidMessage: "Please entry your full name"
					},
					{
						view: "combo",
						name: "gender",
						label: "Gender",
						options: genders,
						invalidMessage: "Please select a gender"
					},
					{
						view: "textarea",
						name: "company",
						label: "Company",
						invalidMessage: "Please entry your company's name"
					},
					{
						view: "textarea",
						name: "balance",
						label: "Balance",
						invalidMessage: "Please entry your company's name"
					},
					{
						view: "checkbox",
						name: "isActive",
						labelRight: "Available",
						checkValue: "Available",
						uncheckValue: "Unavailable"
					},
					{cols: [
						{gravity: 2},
						{
							view: "button",
							type: "form",
							value: "Edit",
							css: "webix_primary",
							click: () => {
								if (this.form.validate()) {
									const values = this.form.getValues();
									users.updateItem(values.id, values);
									this.hideForm();
								}
							}
						},
						{
							view: "button",
							value: "Cancel",
							click: () => {
								this.hideForm();
							}
						}
					]},
					{}
				],
				rules: {
<<<<<<< HEAD
					name: webix.rules.isNotEmpty,
					gender: webix.rules.isNotEmpty,
					balance: webix.rules.isNumber,
					company: webix.rules.isNotEmpty
=======
					$all: webix.rules.isNotEmpty
>>>>>>> master
				}
			}
		};
	}

	init(view) {
		this.form = view.getBody();
	}

	showForm(values) {
		this.form.setValues(values);
		this.getRoot().show();
	}

	hideForm() {
		this.getRoot().hide();
		this.form.clear();
		this.form.clearValidation();
	}
}

