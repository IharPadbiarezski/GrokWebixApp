import {JetView} from "webix-jet";
import {genders} from "../models/genders";
import {users} from "../models/users";

export default class ContactForm extends JetView {
	config() {
		const mainInfo = {
			margin: 10,
			rows: [
				{
					view: "text",
					name: "name",
					label: "Full name",
					labelWidth: 90,
					labelPosition: "top",
					placeholder: "Full name",
					invalidMessage: "Full name is required"
				},
				{
					view: "combo",
					name: "gender",
					label: "Gender",
					labelWidth: 90,
					labelPosition: "top",
					options: genders,
					invalidMessage: "Gender is required"
				},
				{
					view: "text",
					name: "age",
					label: "Age",
					labelWidth: 90,
					labelPosition: "top",
					placeholder: "Age",
					invalidMessage: "Age is required"
				},
				{
					view: "text",
					name: "company",
					label: "Company",
					labelWidth: 90,
					labelPosition: "top",
					placeholder: "Company",
					invalidMessage: "Company's name is required"
				},
				{
					view: "text",
					name: "balance",
					label: "Balance",
					labelWidth: 90,
					labelPosition: "top",
					placeholder: "Balance",
					invalidMessage: "Balance is requkired"
				}
			],
			x: 0,
			y: 0,
			dx: 1,
			dy: 2
		};

		const moreInfo = {
			margin: 10,
			rows: [
				{
					view: "text",
					name: "address",
					label: "Address",
					labelWidth: 90,
					labelPosition: "top",
					placeholder: "Address",
					invalidMessage: "An address is required"
				},
				{
					view: "text",
					name: "email",
					label: "Email",
					labelWidth: 90,
					labelPosition: "top",
					placeholder: "Email",
					invalidMessage: "Email is required"
				},
				{
					view: "text",
					name: "phone",
					label: "Phone",
					labelWidth: 90,
					labelPosition: "top",
					placeholder: "Phone",
					pattern: {mask: "###-## #######", allow: /[0-9]/g},
					invalidMessage: "Please enter any 12 numbers"
				},
				{
					view: "text",
					name: "eyeColor",
					label: "Color of eyes",
					labelWidth: 90,
					labelPosition: "top",
					placeholder: "Color pf eyes",
					invalidMessage: "Color of eyes is required"
				},
				{
					view: "checkbox",
					name: "isActive",
					labelRight: "Available",
					labelPosition: "top",
					checkValue: "Available",
					uncheckValue: "Unavailable"
				}
			],
			x: 1,
			y: 0,
			dx: 1,
			dy: 2
		};


		const buttons = {
			cols: [
				{
					view: "button",
					localId: "saveButton",
					value: "Save",
					type: "form",
					width: 200,
					tooltip: "Save changes",
					click: () => {
					}
				},
				{
					view: "button",
					localId: "clearButton",
					value: "Clear",
					type: "form",
					width: 200,
					tooltip: "Clear form",
					click: () => {
						this.form.clear();
					}
				}
			],
			x: 0,
			y: 3,
			dx: 2,
			dy: 0.25
		};

		return {
			rows: [
				{
					type: "header",
					localId: "headerForm",
					template: "User Form",
					css: "webix_header"
				},
				{
					view: "form",
					localId: "form",
					rows: [
						{
							view: "gridlayout",
							gridColumns: 2,
							gridRows: 3.25,
							cells: [
								mainInfo,
								moreInfo,
								{
									template: "Square",
									x: 0,
									y: 2,
									dx: 2,
									dy: 1
								},
								buttons
							]

						}
					]
					// rules: {
					// 	name: webix.rules.isNotEmpty,
					// 	eyeColor: webix.rules.isNotEmpty,
					// 	gender: webix.rules.isNotEmpty,
					// 	balance: webix.rules.isNumber,
					// 	age: webix.rules.isNumber,
					// 	company: webix.rules.isNotEmpty,
					// 	address: webix.rules.isNotEmpty,
					// 	email: webix.rules.isEmail
					// }
				}
			]
		};
	}

	init() {
		this.form = this.$$("form");
	}
}
