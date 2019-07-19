export default class CommonColumns {
	static getCheckBoxColumn(checkboxId, checkboxName, checkName, uncheckName) {
		return {
			id: checkboxId,
			header: checkboxName,
			template: "{common.checkbox()}",
			width: 80,
			checkValue: checkName,
			uncheckValue: uncheckName,
			sort: "string"
		};
	}

	static getEditColumn() {
		return {
			id: "",
			template: "{common.editIcon()}",
			width: 60
		};
	}

	static getDeleteColumn() {
		return {
			id: "",
			template: "<span class='webix_icon wxi-trash deleteIcon'></span>",
			width: 60
		};
	}

	static deleteRow(name, collection) {
		return {
			deleteIcon: (e, id) => {
				webix.confirm({
					text: `The ${name} will be deleted. Deleting cannot be undone... <br/> Are you sure?`,
					ok: "OK",
					cancel: "Cancel"
				}).then(() => {
					if (id) {
						collection.remove(id);
					}
				});
				return false;
			}
		};
	}
}
