const ObjectID = require("mongodb").ObjectID;

module.exports = (app, db) => {
	const DB = db.db("Grok");

	app.get("/api/v1/users/:id", (req, res) => {
		const id = req.params.id;
		const details = {_id: new ObjectID(id)};
		DB.collection("users").findOne(details, (err, item) => {
			if (err) {
				res.send({error: "An error has occured"});
			}
			else {
				res.send(item);
			}
		});
	});

	app.post("/api/v1/users/upload", (req, res) => {
		if (Object.keys(req.files).length == 0) {
			return res.status(400).send("No files were uploaded.");
		}

		req.files.upload.mv(`/Dev/Projects/files/${  req.files.upload.name}`, (err) => {
			if (err) { return res.status(500).send(err); }
			res.send("File uploaded!");
		});
	});

	app.delete("/api/v1/users/:id", (req, res) => {
		const id = req.params.id;
		const details = {_id: new ObjectID(id)};
		DB.collection("users").remove(details, (err) => {
			if (err) {
				res.send({error: "An error has occured"});
			}
			else {
				res.send(`User ${id} deleted`);
			}
		});
	});

	app.get("/api/v1/users/", (req, res) => {
		DB.collection("users").find().toArray((err, items) => {
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


	app.post("/api/v1/users", (req, res) => {
		const user = {
			name: req.body.name,
			gender: req.body.gender,
			isActive: req.body.isActive,
			balance: req.body.balance,
			age: req.body.age,
			eyeColor: req.body.eyeColor,
			company: req.body.company,
			email: req.body.email,
			phone: req.body.phone,
			address: req.body.address
		};

		DB.collection("users").insert(user, (err, result) => {
			if (err) {
				res.send({error: "An error has occured"});
			}
			else {
				result.ops[0].id = result.insertedIds[0];
				res.send(result.ops[0]);
			}
		});
	});

	app.put("/api/v1/users/:id", (req, res) => {
		const id = req.params.id;
		const details = {_id: new ObjectID(id)};
		const user = {
			name: req.body.name,
			gender: req.body.gender,
			isActive: req.body.isActive,
			balance: req.body.balance,
			age: req.body.age,
			eyeColor: req.body.eyeColor,
			company: req.body.company,
			email: req.body.email,
			phone: req.body.phone,
			address: req.body.address
		};

		DB.collection("users").update(details, user, (err) => {
			if (err) {
				res.send({error: "An error has occured"});
			}
			else {
				res.send(user);
			}
		});
	});
};
