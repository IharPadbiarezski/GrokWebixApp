import {JetView} from "webix-jet";
import CommonColumns from "./common/commonColumns";
import {goalsFiles} from "../models/goalsFiles";

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
							id: "changeDate",
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
									goalsFiles.remove(id);
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
									let id = this.getParam("id");
									if (id) {
										const values = {
											name: file.name,
											size: Math.round(file.size / 1000),
											changeDate: file.file.lastModifiedDate,
											goalId: id
										};
										goalsFiles.add(values);
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
		view.queryView("datatable").sync(goalsFiles);
	}

	urlChange() {
		const id = this.getParam("id");
		goalsFiles.data.filter(file => file.goalId === id);
	}
}

