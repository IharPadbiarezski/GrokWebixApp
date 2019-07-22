<<<<<<< HEAD
import {urls} from "../config/urls";

export const genders = new webix.DataCollection({
	url: urls.genders,
	save: `rest->${urls.genders}`
=======
export const genders = new webix.DataCollection({
	// url: "http://localhost:3000/api/v1/genders/",
	// save: "rest->http://localhost:3000/api/v1/genders/"
	data: [
		{id: 1, value: "male"},
		{id: 2, value: "female"}
	]
>>>>>>> master
});
