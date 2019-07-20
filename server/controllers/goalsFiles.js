const GoalsFiles = require('../models/goalsFiles');
const path = require("../config/path");

exports.all = (req, res) => {
    GoalsFiles.all((err, items) => {
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
	GoalsFiles.findById(id, (err, item) => {
		if (err) {
            res.send({error: "An error has occured"});
        }
        else {
            res.send(item);
        }
	});
};

exports.create = (req, res) => {
	const goalsFile = {
        name: req.body.name,
        size: req.body.size,
        changeDate: req.body.changeDate,
        goalId: req.body.goalId
    };
    
	GoalsFiles.create(goalsFile, (err, result) => {
		if (err) {
            res.send({error: "An error has occured"});
        }
        else {
            result.ops[0].id = result.insertedIds[0];
            res.send(result.ops[0]);
        }
	});
};

exports.update = (req, res) => {
    const id = req.params.id;
    const goalsFile = {
        name: req.body.name,
        size: req.body.size,
        changeDate: req.body.changeDate,
        goalId: req.body.goalId
    };

	GoalsFiles.update(id, goalsFile, (err) => {
        if (err) {
            res.send({error: "An error has occured"});
        }
        else {
            res.send(goalsFile);
        }
		}
	);
};

exports.delete = (req, res) => {
    const id = req.params.id;
	GoalsFiles.delete(id, (err) => {
        if (err) {
            res.send({error: "An error has occured"});
        }
        else {
            res.send(`Goal's file ${id} deleted`);
        }
	});
};

exports.upload = (req, res) => {
    if (Object.keys(req.files).length == 0) {
        return res.status(400).send("No files were uploaded.");
    }

    req.files.upload.mv(`${path.goalFiles}${req.files.upload.name}`, (err) => {
        if (err) { return res.status(500).send(err); }
        res.send("File uploaded!");
    });
};
