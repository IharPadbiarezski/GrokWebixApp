import {urls} from "../config/urls";

export const userData = new webix.DataCollection({
	url: urls.userData,
	save: `rest->${urls.userData}`
});
