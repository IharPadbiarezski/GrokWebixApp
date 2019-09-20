const usersRoutes = require("./users_routes");
const gendersRoutes = require("./genders_routes");
const infoRoutes = require("./info_routes");
const userDataRoutes = require("./user_data_routes");
const placesRoutes = require("./places_routes");
const goalsFilesRoutes = require("./goals_files_routes");

module.exports = (app) => {
	usersRoutes(app);
	gendersRoutes(app);
	infoRoutes(app);
	userDataRoutes(app);
	placesRoutes(app);
	goalsFilesRoutes(app);
};
