export default class CommonColumns {

	static getCheckBoxColumn(checkBoxId, checkBoxHeader, checkValue, uncheckValue) {
		return {
			id: checkBoxId,
			header: checkBoxHeader,
			template: "{common.checkbox()}",
			width: 90,
			checkValue: checkValue,
			uncheckValue: uncheckValue,
			sort: "string"
		}
	}

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
