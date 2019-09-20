import {urls} from "../config/urls";

const dateFormat = webix.Date.strToDate("%Y-%m-%d %H:%i:%s");

export const goalsFiles = new webix.DataCollection({
	scheme: {
		$change: (obj) => {
			if (obj.changeDate) {
				obj.changeDate = dateFormat(obj.changeDate);
			}
		}
	},
	url: urls.goalsFiles,
	save: `rest->${urls.goalsFiles}`
});
