import {JetView} from "webix-jet";
import {genders} from "../models/genders";
import {users} from "../models/users";
import {urls} from "../config/urls";

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
					view: "checkbox",
					name: "isActive",
					labelRight: "Available",
					labelPosition: "top",
					checkValue: "Available",
					uncheckValue: "Unavailable"
				}
			],
			x: 0,
			y: 0,
			dx: 1,
			dy: 7
		};

		const moreInfo = {
			margin: 10,
			localId: "moreInfo",
			rows: [
				{
					view: "text",
					name: "address",
					localId: "addressField",
					label: "Address",
					labelWidth: 90,
					labelPosition: "top",
					placeholder: "Address",
					invalidMessage: "An address is required"
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
					localId: "companyField",
					label: "Company",
					labelWidth: 90,
					labelPosition: "top",
					placeholder: "Company",
					invalidMessage: "Company's name is required"
				},
				{
					view: "text",
					name: "balance",
					localId: "balanceField",
					label: "Balance",
					labelWidth: 90,
					labelPosition: "top",
					placeholder: "Balance",
					invalidMessage: "Balance is requkired"
				},
				{
					view: "text",
					name: "eyeColor",
					localId: "eyeColorField",
					label: "Color of eyes",
					labelWidth: 90,
					labelPosition: "top",
					placeholder: "Color pf eyes",
					invalidMessage: "Color of eyes is required"
				}
			],
			x: 1,
			y: 0,
			dx: 1,
			dy: 7
		};

		const fileUploader = {
			rows: [
				{
					view: "uploader",
					value: "Upload file",
					localId: "uploader",
					name: "userFiles",
					link: "filelist",
					autosend: false,
					multiple: false,
					upload: urls.usersUpload,
					on: {
						onBeforeFileAdd: (file) => {
							this.fileName = file.name;
							this.fileSize = Math.round(file.size / 1000);
						},
						onFileUploadError: () => {
							webix.message("Upload failed.");
						}
					}
				},
				{
					view: "list",
					id: "filelist",
					type: "uploader",
					autoheight: true,
					borderless: true
				}
			],
			x: 0,
			y: 7,
			dx: 1,
			dy: 3
		};

		const controlCheckboxes = {
			rows: [
				{
					height: 30,
					template: "Form Controls",
					borderless: true
				},
				{
					view: "checkbox",
					labelRight: "Main fields",
					labelPosition: "top",
					checkValue: "Checked",
					uncheckValue: "Unchecked",
					on: {
						onChange(newVal) {
							const additionInfo = this.$scope.$$("moreInfo");
							if (newVal === "Checked") {
								additionInfo.hide();
							}
							else {
								additionInfo.show();
							}
						}
					}

				}
			],
			x: 1,
			y: 7,
			dx: 1,
			dy: 3
		};

		const buttons = {
			cols: [
				{
					view: "button",
					localId: "saveButton",
					value: "Add user",
					type: "form",
					width: 200,
					tooltip: "Add user",
					click: () => {
						this.onSubmit();
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
						this.clearForm();
					}
				}
			],
			x: 0,
			y: 9,
			dx: 2,
			dy: 1
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
							gridRows: 10,
							cells: [
								mainInfo,
								moreInfo,
								fileUploader,
								controlCheckboxes,
								buttons
							]

						}
					],
					rules: {
						name: webix.rules.isNotEmpty,
						gender: webix.rules.isNotEmpty,
						age: webix.rules.isNumber,
						email: webix.rules.isEmail
					}
				}
			]
		};
	}

	init() {
		this.form = this.$$("form");
	}

	onSubmit() {
		if (this.form.validate()) {
			const values = this.form.getValues();
			values.fileName = this.fileName;
			values.fileSize = this.fileSize;
			users.add(values);
			this.$$("uploader").send();
			webix.message({type: "success", text: "Users is added"});
			this.clearForm();
		}
	}

	clearForm() {
		this.form.clear();
		this.form.clearValidation();
	}
}
