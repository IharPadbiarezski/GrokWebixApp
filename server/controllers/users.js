const Users = require('../models/users');
const path = require("../config/path");

exports.all = (req, res) => {
    Users.all((err, items) => {
        if (err) {
            res.send({error: "An error has occured"});
        }
        else {
            items.forEach((item) => {
                item.id = item._id;
            });
            res.send(items);
        }
    })
}

exports.findById = (req, res) => {
    const id = req.params.id;
	Users.findById(id, (err, item) => {
		if (err) {
            res.send({error: "An error has occured"});
        }
        else {
            res.send(item);
        }
	});
};

exports.create = (req, res) => {
	const user = {
		name: req.body.name || "",
		gender: req.body.gender || "",
		isActive: req.body.isActive  || "",
		balance: req.body.balance  || "",
		age: req.body.age  || "",
		eyeColor: req.body.eyeColor  || "",
		company: req.body.company  || "",
		email: req.body.email  || "",
		phone: req.body.phone  || "",
		address: req.body.address  || "",
		fileName: req.body.fileName  || "",
		fileSize: req.body.fileSize  || "",
		filePath: req.body.fileName ? `${path.userFiles}${req.body.fileName}` : ""
    };
    
	Users.create(user, (err, result) => {
		if (err) {
            res.send({error: "An error has occured"});
        }
        else {
            result.ops[0].id = result.insertedId;
            res.send(result.ops[0]);
        }
	});
};

exports.update = (req, res) => {
    const id = req.params.id;
    const user = {
        name: req.body.name || "",
        gender: req.body.gender || "",
        isActive: req.body.isActive || "",
        balance: req.body.balance || "",
        age: req.body.age || "",
        eyeColor: req.body.eyeColor || "",
        company: req.body.company || "",
        email: req.body.email || "",
        phone: req.body.phone || "",
        address: req.body.address || "",
        fileName: req.body.fileName || "",
		fileSize: req.body.fileSize || "",
		filePath: req.body.fileName ? `${path.userFiles}${req.body.fileName}` : ""
    };

	Users.update(id, user, (err) => {
        if (err) {
            res.send({error: "An error has occured"});
        }
        else {
            res.send(user);
        }
		}
	);
};

exports.delete = (req, res) => {
    const id = req.params.id;
	Users.delete(id, (err) => {
        if (err) {
            res.send({error: "An error has occured"});
        }
        else {
            res.send(`User ${id} deleted`);
        }
	});
};

exports.upload = (req, res) => {
    if (Object.keys(req.files).length == 0) {
		return res.status(400).send("No files were uploaded.");
	}

	req.files.upload.mv(`${path.userFiles}${req.files.upload.name}`, (err) => {
		if (err) { return res.status(500).send(err) }
	});
};
