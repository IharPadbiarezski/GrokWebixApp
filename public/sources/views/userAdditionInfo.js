import {JetView} from "webix-jet";
import UserAdditionList from "./userAdditionList";
import UserAdditionTable from "./userAdditionTable";
import UserFilesTable from "./userFilesTable";

export default class UsersAdditionTable extends JetView {
	config() {
		const userTabbar = {
			view: "tabbar",
			multiview: true,
			localID: "tabbar",
			options: [
				{
					value: "List",
					id: "userinfo:list"
				},
				{
					value: "DataTable",
					id: "userinfo:datatable"
				},
				{
					value: "Files",
					id: "userinfo:files"
				}
			],
			height: 50
		};
		const userTabbarElements = {
			animate: false,
			cells: [
				{
					id: "userinfo:list",
					$subview: UserAdditionList
				},
				{
					id: "userinfo:datatable",
					$subview: UserAdditionTable
				},
				{
					id: "userinfo:files",
					$subview: UserFilesTable
				}
			]
		};
		return {
			rows: [
				userTabbar,
				userTabbarElements
			]
		}
	}

	init(view) {

	}
}

