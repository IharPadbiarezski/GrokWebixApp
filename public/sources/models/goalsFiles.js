const dateFormat = webix.Date.strToDate("%Y-%m-%d %H:%i:%s");

export const goalsFiles = new webix.DataCollection({
	scheme: {
		$change: (obj) => {
			if (obj.changeDate) {
				obj.changeDate = dateFormat(obj.changeDate);
			}
		}
	},
	url: "http://localhost:3000/api/v1/goalsfiles/",
	save: "rest->http://localhost:3000/api/v1/goalsfiles/"
});
