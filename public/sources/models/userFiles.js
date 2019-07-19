import {urls} from "../config/urls";

export const userFiles = new webix.DataCollection({
	url: urls.userFiles,
	save: `rest->${urls.userFiles}`
});
