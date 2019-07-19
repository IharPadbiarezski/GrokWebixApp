const ObjectID = require("mongodb").ObjectID;
const path = require("../config/path");

module.exports = (app, db) => {
	const DB = db.db("Grok");

	app.get(`${path.userfiles}:id`, (req, res) => {
		const id = req.params.id;
		const details = {_id: new ObjectID(id)};
		DB.collection("userfiles").findOne(details, (err, item) => {
			if (err) {
				res.send({error: "An error has occured"});
			}
			else {
				res.send(item);
			}
		});
	});

	app.delete(`${path.userfiles}:id`, (req, res) => {
		const id = req.params.id;
		const details = {_id: new ObjectID(id)};
		DB.collection("userfiles").remove(details, (err) => {
			console.log(details);
			if (err) {
				res.send({error: "An error has occured"});
			}
			else {
				res.send(`User ${id} deleted`);
			}
		});
	});

	app.get(`${path.userfiles}`, (req, res) => {
		DB.collection("userfiles").find().toArray((err, items) => {
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


	app.post(`${path.userfiles}`, (req, res) => {
		const userfile = {
			name: req.body.name,
			size: req.body.size,
			changeDate: req.body.changeDate
		};

		DB.collection("userfiles").insert(userfile, (err, result) => {
			if (err) {
				res.send({error: "An error has occured"});
			}
			else {
				result.ops[0].id = result.insertedIds[0];
				res.send(result.ops[0]);
			}
		});
	});

	app.put(`${path.userfiles}:id`, (req, res) => {
		const id = req.params.id;
		const details = {_id: new ObjectID(id)};
		const userfile = {
			name: req.body.name,
			size: req.body.size,
			changeDate: req.body.changeDate
		};

		DB.collection("userfiles").update(details, userfile, (err) => {
			if (err) {
				res.send({error: "An error has occured"});
			}
			else {
				res.send(userfile);
			}
		});
	});
};
