const usersRoutes = require("./users_routes");
const gendersRoutes = require("./genders_routes");
const infoRoutes = require("./info_routes");
const userDataRoutes = require("./user_data_routes");
const placesRoutes = require("./places_routes");
const goalsFilesRoutes = require("./goals_files_routes");
const userFilesRoutes = require("./user_files_routes");

module.exports = (app, db) => {
	usersRoutes(app, db);
	gendersRoutes(app, db);
	infoRoutes(app, db);
	userDataRoutes(app, db);
	placesRoutes(app, db);
	goalsFilesRoutes(app, db);
	userFilesRoutes(app, db);
};
