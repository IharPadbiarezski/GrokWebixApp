const path = require("../config/path");
const infoController = require("../controllers/info");

module.exports = (app) => {
	app.get(`${path.info}`, infoController.all);
	app.get(`${path.info}:id`, infoController.findById);
	app.delete(`${path.info}:id`, infoController.delete);
	app.post(`${path.info}`, infoController.create);
	app.put(`${path.info}:id`, infoController.update);
};
