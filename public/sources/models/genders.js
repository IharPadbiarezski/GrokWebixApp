export const genders = new webix.DataCollection({
	url: "http://localhost:3000/genders/",
	save: "rest->http://localhost:3000/genders/"
	// data: [
	// 	{id: 1, value: "male"},
	// 	{id: 2, value: "female"}
	// ]
});
