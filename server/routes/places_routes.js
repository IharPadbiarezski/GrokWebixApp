const path = require("../config/path");
const placesController = require("../controllers/places");

module.exports = (app) => {
    app.get(`${path.places}`, placesController.all);
	app.get(`${path.places}:id`, placesController.findById);
	app.delete(`${path.places}:id`, placesController.delete);
	app.post(`${path.places}`, placesController.create);
    app.put(`${path.places}:id`, placesController.update);
};
