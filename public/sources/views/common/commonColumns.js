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
			template: "{common.trashIcon()}",
			width: 60
		};
	}
}
