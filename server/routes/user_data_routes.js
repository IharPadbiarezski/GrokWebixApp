const ObjectID = require("mongodb").ObjectID;
const path = require("../config/path");

module.exports = (app, db) => {
	const DB = db.db("Grok");

	app.get(`${path.userdata}:id`, (req, res) => {
		const id = req.params.id;
		const details = {_id: new ObjectID(id)};
		DB.collection("userdata").findOne(details, (err, item) => {
			if (err) {
				res.send({error: "An error has occured"});
			}
			else {
				res.send(item);
			}
		});
	});

	app.delete(`${path.userdata}:id`, (req, res) => {
		const id = req.params.id;
		const details = {_id: new ObjectID(id)};
		DB.collection("userdata").remove(details, (err) => {
			if (err) {
				res.send({error: "An error has occured"});
			}
			else {
				res.send(`User ${id} deleted`);
			}
		});
	});

	app.get(`${path.userdata}`, (req, res) => {
		DB.collection("userdata").find().toArray((err, items) => {
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


	app.post(`${path.userdata}`, (req, res) => {
		const userData = {
			goal: req.body.goal,
			userId: req.body.userId,
			hours: req.body.hours,
			reminder: req.body.reminder,
			wish: req.body.wish
		};

		DB.collection("userdata").insert(userData, (err, result) => {
			if (err) {
				res.send({error: "An error has occured"});
			}
			else {
				result.ops[0].id = result.insertedIds[0];
				res.send(result.ops[0]);
			}
		});
	});

	app.put(`${path.userdata}:id`, (req, res) => {
		const id = req.params.id;
		const details = {_id: new ObjectID(id)};
		const userData = {
			goal: req.body.goal,
			userId: req.body.userId,
			hours: req.body.hours,
			reminder: req.body.reminder,
			wish: req.body.wish
		};

		DB.collection("userdata").update(details, userData, (err) => {
			if (err) {
				res.send({error: "An error has occured"});
			}
			else {
				res.send(userData);
			}
		});
	});
};
