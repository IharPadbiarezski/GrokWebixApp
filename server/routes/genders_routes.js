const ObjectID = require("mongodb").ObjectID;

module.exports = (app, db) => {
	const DB = db.db("Grok");

	app.get("/api/v1/genders/:id", (req, res) => {
		const id = req.params.id;
		const details = {_id: new ObjectID(id)};
		DB.collection("genders").findOne(details, (err, item) => {
			if (err) {
				res.send({error: "An error has occured"});
			}
			else {
				res.send(item);
			}
		});
	});

	app.delete("/api/v1/genders/:id", (req, res) => {
		const id = req.params.id;
		const details = {_id: new ObjectID(id)};
		DB.collection("genders").remove(details, (err) => {
			if (err) {
				res.send({error: "An error has occured"});
			}
			else {
				res.send(`User ${id} deleted`);
			}
		});
	});

	app.get("/api/v1/genders/", (req, res) => {
		DB.collection("genders").find().toArray((err, items) => {
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


	app.post("/api/v1/genders", (req, res) => {
		const gender = {
			id: req.body.id,
			value: req.body.value
		};

		DB.collection("genders").insert(gender, (err, result) => {
			if (err) {
				res.send({error: "An error has occured"});
			}
			else {
				result.ops[0].id = result.insertedIds[0];
				res.send(result.ops[0]);
			}
		});
	});

	app.put("/api/v1/genders/:id", (req, res) => {
		const id = req.params.id;
		const details = {_id: new ObjectID(id)};
		const gender = {
			value: req.body.value
		};

		DB.collection("genders").update(details, gender, (err) => {
			if (err) {
				res.send({error: "An error has occured"});
			}
			else {
				res.send(gender);
			}
		});
	});
};
