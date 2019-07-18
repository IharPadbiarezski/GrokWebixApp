export const places = new webix.DataCollection({
	url: "http://localhost:3000/api/v1/places/",
	save: "rest->http://localhost:3000/api/v1/places/"
});
