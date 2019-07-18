export const genders = new webix.DataCollection({
	url: "http://localhost:3000/api/v1/genders/",
	save: "rest->http://localhost:3000/api/v1/genders/"
});
