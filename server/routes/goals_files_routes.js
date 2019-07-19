const ObjectID = require("mongodb").ObjectID;
const path = require("../config/path");

module.exports = (app, db) => {
	const DB = db.db("Grok");

	app.get(`${path.goalsfiles}:id`, (req, res) => {
		const id = req.params.id;
		const details = {_id: new ObjectID(id)};
		DB.collection("goalsfiles").findOne(details, (err, item) => {
			if (err) {
				res.send({error: "An error has occured"});
			}
			else {
				res.send(item);
			}
		});
	});

	app.delete(`${path.goalsfiles}:id`, (req, res) => {
		const id = req.params.id;
		const details = {_id: new ObjectID(id)};
		DB.collection("goalsfiles").deleteOne(details, (err) => {
			if (err) {
				res.send({error: "An error has occured"});
			}
			else {
				res.send(`User ${id} deleted`);
			}
		});
	});

	app.get(`${path.goalsfiles}`, (req, res) => {
		DB.collection("goalsfiles").find().toArray((err, items) => {
			if (err) {
				res.send({error: "An error has occured"});
			}
			else {
				items.forEach((item) => {
					item.id = item._id;
				});
				res.send(items);
			}
		});
	});


	app.post(`${path.goalsfiles}`, (req, res) => {
		const goalsfile = {
			name: req.body.name,
			size: req.body.size,
			changeDate: req.body.changeDate,
			goalId: req.body.goalId
		};

		DB.collection("goalsfiles").insert(goalsfile, (err, result) => {
			if (err) {
				res.send({error: "An error has occured"});
			}
			else {
				result.ops[0].id = result.insertedIds[0];
				res.send(result.ops[0]);
			}
		});
	});

	app.post(`${path.genders}upload`, (req, res) => {
		if (Object.keys(req.files).length == 0) {
			return res.status(400).send("No files were uploaded.");
		}

		req.files.upload.mv(`${path.goalFiles}${req.files.upload.name}`, (err) => {
			if (err) { return res.status(500).send(err); }
			res.send("File uploaded!");
		});

		console.log(req.files);
	});

	app.put(`${path.goalsfiles}:id`, (req, res) => {
		const id = req.params.id;
		const details = {_id: new ObjectID(id)};
		const goalsfile = {
			name: req.body.name,
			size: req.body.size,
			changeDate: req.body.changeDate,
			goalId: req.body.goalId
		};

		DB.collection("goalsfiles").update(details, goalsfile, (err, item) => {
			if (err) {
				res.send({error: "An error has occured"});
			}
			else {
				res.send(goalsfile);
			}
		});
	});
};
