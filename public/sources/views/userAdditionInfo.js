import {JetView} from "webix-jet";
import UserAdditionList from "./userTemplate";
import UserTemplate from "./userTemplate";
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
					value: "Template",
					id: "userinfo:template"
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
					id: "userinfo:template",
					$subview: UserTemplate
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

