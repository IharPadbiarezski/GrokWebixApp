const Places = require('../models/places');

exports.all = (req, res) => {
    Places.all((err, items) => {
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
	Places.findById(id, (err, item) => {
		if (err) {
            res.send({error: "An error has occured"});
        }
        else {
            res.send(item);
        }
	});
};

exports.create = (req, res) => {
	const place = {
        place: req.body.place,
        userDataId: req.body.userDataId
    };
    
	Places.create(place, (err, result) => {
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
    const place = {
        place: req.body.place,
        userDataId: req.body.userDataId
    };

	Places.update(id, place, (err) => {
        if (err) {
            res.send({error: "An error has occured"});
        }
        else {
            res.send(place);
        }
		}
	);
};

exports.delete = (req, res) => {
    const id = req.params.id;
	Places.delete(id, (err) => {
        if (err) {
            res.send({error: "An error has occured"});
        }
        else {
            res.send(`Place ${id} deleted`);
        }
	});
};
