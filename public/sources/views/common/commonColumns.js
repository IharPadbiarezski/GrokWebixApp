export default class CommonColumns {
	static getCheckBoxColumn(checkboxId, checkboxName, checkValue, uncheckValue) {
		return {
			id: checkboxId,
			header: checkboxName,
			template: "{common.checkbox()}",
			width: 40,
			checkValue: checkValue,
			uncheckValue: uncheckValue,
			sort: "string"
		}
	};

	static getEditColumn() {
		return {
			id: "",
			template: "{common.editIcon()}",
			width: 60
		}
	}

	static getDeleteColumn() {
		return {
			id: "",
			template: "{common.trashIcon()}",
			width: 60
		}
	}
}
