import {JetView} from "webix-jet";

export default class UsersTable extends JetView {
	config() {
		return {
			view: "datatable",
			scroll: "y",
			editable: true,
			editaction: "dblclick",
			datafetch: 20,
			url: "http://localhost:3000/api/v1/info/",
			save: "rest->http://localhost:3000/api/v1/info/",
			columns: [
				{
					id: "song",
					header: "Song",
					fillspace: true,
					editor: "text",
					sort: "server"
				},
				{
					id: "car",
					header: "Car",
					fillspace: true,
					editor: "text",
					sort: "server"
				},
				{
					id: "book",
					header: "Book",
					fillspace: true,
					editor: "text",
					sort: "server"
				},
				{
					id: "movie",
					header: "Movie",
					fillspace: true,
					editor: "text",
					sort: "server"
				},
				{
					id: "drink",
					header: "Drink",
					fillspace: true,
					editor: "text",
					sort: "server"
				}
			]
		};
	}
}
