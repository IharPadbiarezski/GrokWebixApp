import {JetView} from "webix-jet";

export default class CommonDataTable extends JetView {
	constructor(app, name, data, checkBoxId, checkValue, uncheckValue, formUI) {
		super(app, name);
		this.tdata = data;
		this.checkBoxId = checkBoxId;
		this.checkValue = checkValue;
		this.uncheckValue = uncheckValue;
		this.formUI = formUI;

	}

	config() {

		return {
			view: "datatable",
			select: true,
			columns: [
				{
					id: this.checkBoxId,
					header: "",
					template: "{common.checkbox()}",
					width: 40,
					checkValue: this.checkValue,
					uncheckValue: this.uncheckValue,
					sort: "string"
				},
				{
					id: "",
					template: "{common.editIcon()}",
					width: 60
				},
				{
					id: "",
					template: "{common.trashIcon()}",
					width: 60
				}
			],
			onClick: {
				"wxi-trash": (e, id) => {
					webix.confirm({
						text: "The activity will be deleted. Deleting cannot be undone... <br/> Are you sure?",
						ok: "OK",
						cancel: "Cancel"
					}).then((res) => {
						if (res) {
							this.app.callEvent(this.tdata, [id.row]);
						}
					});
					return false;
				},
				"wxi-pencil": (e, id) => {
					const item = this.getRoot().getItem(id);
					this.form.showForm(item);
				}
			}
		};
	}

	init() {
		this.form = this.ui(this.formUI);

		this.on(this.app, `${this.tdata}:save`, (values) => {
			if (values.id) {
				this.tdata.updateItem(values.id, values);
			}
			else {
				this.tdata.add(values);
			}
		});

		this.on(this.app, `${this.tdata}:delete`, id => this.tdata.remove(id));
	}
}
