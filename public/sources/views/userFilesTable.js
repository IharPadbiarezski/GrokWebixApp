import {JetView} from "webix-jet";
import CommonColumns from "./common/commonColumns";
import {files} from "../models/files";
import {users} from "../models/users";

export default class UserFilesTable extends JetView {
	config() {
		return {
			rows: [
				{
					view: "datatable",
					localId: "datatable",
					select: true,
					columns: [
						{
							id: "name",
							header: "Name",
							fillspace: true,
							sort: "string"
						},
						{
							id: "ChangeDate",
							header: "Change date",
							fillspace: true,
							sort: "date",
							format: webix.i18n.longDateFormatStr
						},
						{
							id: "size",
							header: "Size",
							fillspace: true,
							template: obj => `${obj.size}Kb`,
							sort: "int"
						},
						CommonColumns.getDeleteColumn()

					],
					onClick: {
						"wxi-trash": (e, id) => {
							webix.confirm({
								text: "The file will be deleted. Deleting cannot be undone... <br/> Are you sure?",
								ok: "OK",
								cancel: "Cancel"
							}).then(() => {
								if (id) {
									files.remove(id);
								}
							});
							return false;
						}
					}
				},
				{
					cols: [
						{},
						{
							view: "uploader",
							id: "uploader",
							type: "iconButton",
							label: "Upload file",
							width: 200,
							autosend: false,
							on: {
								onBeforeFileAdd: (file) => {
									let id = this.getParam("id", true);
									if (id) {
										const values = {
											name: file.name,
											size: Math.round(file.size / 1000),
											ChangeDate: file.file.lastModifiedDate,
											userId: id
										};
										files.add(values);
									}
									return false;
								},
								onFileUploadError: () => {
									webix.message("Upload failed.");
								}
							}
						},
						{}
					]
				}
			]
		};
	}

	init(view) {
		view.queryView("datatable").sync(files);
	}

	urlChange() {
		const id = this.getParam("id");
		files.data.filter(file => file.userId.toString() === id.toString());
	}
}

