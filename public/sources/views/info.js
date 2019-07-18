import {JetView} from "webix-jet";

let url = "http://localhost:3000/api/v1/info/";

webix.proxy.idata = {
	$proxy: true,
	load(view, params) {
		this._attachHandlers(view);

		url = this.source;
		url += url.indexOf("?") === -1 ? "?" : "&";

		let count = params ? params.count : view.config.datafetch || 0;
		let start = params ? params.start : 0;

		url += `count=${count}`;
		url += start ? `&start=${start}` : "&start=0";
		return webix.ajax(url).then(webix.bind((data) => {
			data = data.json();
			if (data.length === 0) {
				this._checkLoadNext(data);
			}
			return data;
		},
		this));
	},
	_checkLoadNext(data) {
		if (!data.length) { this._dontLoadNext = true; }
	},
	_attachHandlers(view) {
		let proxy = this;
		if (view.config.columns) {
			view.attachEvent("onScrollY", function () {
				proxy._loadNext(this);
			});
		}
		else { view.attachEvent("onAfterScroll", () => { proxy._loadNext(this); }); }
		this._attachHandlers = () => {};
	},
	_loadNext(view) {
		let contentScroll = view.getScrollState().y + view.$view.clientHeight;
		let node = view.getItemNode(view.getLastId());
		let height = view.config.rowHeight || view.type.height;

		if (node && contentScroll >= node.offsetTop + height && !this._dontLoadNext) {
			view.loadNext(view.config.datafetch, view.count() + 1);
		}
	}
};

export default class UsersTable extends JetView {
	config() {
		return {
			view: "datatable",
			scroll: "y",
			editable: true,
			editaction: "dblclick",
			datafetch: 20,
			url: "http://localhost:3000/api/v1/info/",
			save: `rest->${url}`,
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
