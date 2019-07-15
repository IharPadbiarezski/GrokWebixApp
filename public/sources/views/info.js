import {JetView} from "webix-jet";
import {info} from "../models/info";

export default class UsersTable extends JetView {
	config() {
		return {
			view: "datatable",
			scroll: "y",
			editable: true,
			editaction: "dblclick",
			columns: [
				{
					id: "song",
					header: "Song",
					fillspace: true,
					editor: "text",
					sort: "string"
				},
				{
					id: "car",
					header: "Car",
					fillspace: true,
					editor: "text",
					sort: "string"
				},
				{
					id: "book",
					header: "Book",
					fillspace: true,
					editor: "text",
					sort: "string"
				},
				{
					id: "movie",
					header: "Movie",
					fillspace: true,
					editor: "text",
					sort: "string"
				},
				{
					id: "drink",
					header: "Drink",
					fillspace: true,
					editor: "text",
					sort: "string"
				}
			]
		};
	}

	init(view) {
		view.sync(info);
	}
}
