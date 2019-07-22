import {urls} from "../config/urls";

export const genders = new webix.DataCollection({
	url: urls.genders,
	save: `rest->${urls.genders}`
});
