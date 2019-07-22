const path = require("../config/path");
const gendersController = require("../controllers/genders");

module.exports = (app) => {
	app.get(`${path.genders}`, gendersController.all);
	app.get(`${path.genders}:id`, gendersController.findById);
	app.delete(`${path.genders}:id`, gendersController.delete);
	app.post(`${path.genders}`, gendersController.create);
	app.put(`${path.genders}:id`, gendersController.update);
};
