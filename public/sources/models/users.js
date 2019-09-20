import {urls} from "../config/urls";

export const users = new webix.DataCollection({
	url: urls.users,
	save: `rest->${urls.users}`
});
