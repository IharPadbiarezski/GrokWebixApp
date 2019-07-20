const path = require("../config/path");
const userDataController = require("../controllers/userdata");

module.exports = (app) => {
	app.get(`${path.userdata}`, userDataController.all);
	app.get(`${path.userdata}:id`, userDataController.findById);
	app.delete(`${path.userdata}:id`, userDataController.delete);
	app.post(`${path.userdata}`, userDataController.create);
    app.put(`${path.userdata}:id`, userDataController.update);
};
