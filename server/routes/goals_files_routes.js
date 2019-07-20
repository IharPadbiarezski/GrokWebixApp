const path = require("../config/path");
const goalsFilesController = require("../controllers/goalsFiles");

module.exports = (app) => {
	app.get(`${path.goalsfiles}`, goalsFilesController.all);
	app.get(`${path.goalsfiles}:id`, goalsFilesController.findById);
	app.delete(`${path.goalsfiles}:id`, goalsFilesController.delete);
	app.post(`${path.goalsfiles}`, goalsFilesController.create);
	app.put(`${path.goalsfiles}:id`, goalsFilesController.update);
	app.post(`${path.goalsfiles}upload`, goalsFilesController.upload);
};
