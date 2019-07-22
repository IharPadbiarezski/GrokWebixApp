import {JetView} from "webix-jet";
<<<<<<< HEAD
import {urls} from "../config/urls";
=======
import {info} from "../models/info";
>>>>>>> master

export default class UsersTable extends JetView {
	config() {
		return {
			view: "datatable",
			scroll: "y",
			editable: true,
			editaction: "dblclick",
<<<<<<< HEAD
			datafetch: 20,
			url: urls.info,
			save: `rest->${urls.info}`,
=======
>>>>>>> master
			columns: [
				{
					id: "song",
					header: "Song",
					fillspace: true,
					editor: "text",
<<<<<<< HEAD
					sort: "server"
=======
					sort: "string"
>>>>>>> master
				},
				{
					id: "car",
					header: "Car",
					fillspace: true,
					editor: "text",
<<<<<<< HEAD
					sort: "server"
=======
					sort: "string"
>>>>>>> master
				},
				{
					id: "book",
					header: "Book",
					fillspace: true,
					editor: "text",
<<<<<<< HEAD
					sort: "server"
=======
					sort: "string"
>>>>>>> master
				},
				{
					id: "movie",
					header: "Movie",
					fillspace: true,
					editor: "text",
<<<<<<< HEAD
					sort: "server"
=======
					sort: "string"
>>>>>>> master
				},
				{
					id: "drink",
					header: "Drink",
					fillspace: true,
					editor: "text",
<<<<<<< HEAD
					sort: "server"
=======
					sort: "string"
>>>>>>> master
				}
			]
		};
	}
<<<<<<< HEAD
=======

	init(view) {
		view.sync(info);
	}
>>>>>>> master
}
