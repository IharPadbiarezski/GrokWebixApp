import {JetView} from "webix-jet";
import {info} from "../models/info";

export default class UsersTable extends JetView {
	config() {
		return {
			view: "datatable",
			scroll: "auto",
			editable: true,
			editaction: "dblclick",
			columns: [
				{
					id: "song",
					header: "Song",
					fillspace: true,
					editor: "text"
				},
				{
					id: "car",
					header: "Car",
					fillspace: true,
					editor: "text"
				},
				{
					id: "book",
					header: "Book",
					fillspace: true,
					editor: "text"
				},
				{
					id: "movie",
					header: "Movie",
					fillspace: true,
					editor: "text"
				},
				{
					id: "drink",
					header: "Drink",
					fillspace: true,
					editor: "text"
				}
			]
		};
	}

	init(view) {
		view.sync(info);
	}
}
