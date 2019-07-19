const ObjectID = require("mongodb").ObjectID;
const path = require("../config/path");

module.exports = (app, db) => {
	const DB = db.db("Grok");

	app.get(`${path.genders}:id`, (req, res) => {
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

	app.delete(`${path.genders}:id`, (req, res) => {
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

	app.get(`${path.genders}`, (req, res) => {
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


	app.post(`${path.genders}`, (req, res) => {
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

	app.put(`${path.genders}:id`, (req, res) => {
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
