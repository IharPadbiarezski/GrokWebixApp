const ObjectID = require("mongodb").ObjectID;

module.exports = (app, db) => {
	const DB = db.db("Grok");

	app.get("/api/v1/goalsfiles/:id", (req, res) => {
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

	app.delete("/api/v1/goalsfiles/:id", (req, res) => {
		const id = req.params.id;
		const details = {_id: new ObjectID(id)};
		DB.collection("goalsfiles").remove(details, (err) => {
			if (err) {
				res.send({error: "An error has occured"});
			}
			else {
				res.send(`User ${id} deleted`);
			}
		});
	});

	app.get("/api/v1/goalsfiles/", (req, res) => {
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


	app.post("/api/v1/goalsfiles", (req, res) => {
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

	app.put("/api/v1/goalsfiles/:id", (req, res) => {
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
