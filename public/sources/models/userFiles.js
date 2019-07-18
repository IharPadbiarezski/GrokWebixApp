export const userFiles = new webix.DataCollection({
	url: "http://localhost:3000/api/v1/userfiles/",
	save: "rest->http://localhost:3000/api/v1/userfiles/"
});
