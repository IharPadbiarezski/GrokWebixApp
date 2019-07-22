const Genders = require('../models/genders');

exports.all = (req, res) => {
    Genders.all((err, items) => {
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
	Genders.findById(id, (err, item) => {
		if (err) {
            res.send({error: "An error has occured"});
        }
        else {
            res.send(item);
        }
	});
};

exports.create = (req, res) => {
	const gender = {
        id: req.body.id,
        value: req.body.value
    };
    
	Genders.create(gender, (err, result) => {
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
	const gender = {
		value: req.body.value
	};

	Genders.update(id, gender, (err) => {
        if (err) {
            res.send({error: "An error has occured"});
        }
        else {
            res.send(gender);
        }
		}
	);
};

exports.delete = (req, res) => {
    const id = req.params.id;
	Genders.delete(id, (err) => {
        if (err) {
            res.send({error: "An error has occured"});
        }
        else {
            res.send(`Gender ${id} deleted`);
        }
	});
};
