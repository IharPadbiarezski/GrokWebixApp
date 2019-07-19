import {urls} from "../config/urls";

export const places = new webix.DataCollection({
	url: urls.places,
	save: `rest->${urls.places}`
});
