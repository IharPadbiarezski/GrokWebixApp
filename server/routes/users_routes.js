const path = require("../config/path");
const usersController = require("../controllers/users");

module.exports = (app) => {
	app.get(`${path.users}`, usersController.all);
	app.get(`${path.users}:id`, usersController.findById);
	app.delete(`${path.users}:id`, usersController.delete);
	app.post(`${path.users}`, usersController.create);
	app.put(`${path.users}:id`, usersController.update);
	app.post(`${path.users}upload`, usersController.upload);
};
