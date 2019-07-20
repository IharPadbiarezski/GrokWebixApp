const UserData = require('../models/userdata');

exports.all = (req, res) => {
    UserData.all((err, items) => {
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
	UserData.findById(id, (err, item) => {
		if (err) {
            res.send({error: "An error has occured"});
        }
        else {
            res.send(item);
        }
	});
};

exports.create = (req, res) => {
	const userData = {
        goal: req.body.goal,
        userId: req.body.userId,
        hours: req.body.hours,
        reminder: req.body.reminder,
        wish: req.body.wish
    };
    
	UserData.create(userData, (err, result) => {
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
    const userData = {
        goal: req.body.goal,
        userId: req.body.userId,
        hours: req.body.hours,
        reminder: req.body.reminder,
        wish: req.body.wish
    };

	UserData.update(id, userData, (err) => {
        if (err) {
            res.send({error: "An error has occured"});
        }
        else {
            res.send(userData);
        }
		}
	);
};

exports.delete = (req, res) => {
    const id = req.params.id;
	UserData.delete(id, (err) => {
        if (err) {
            res.send({error: "An error has occured"});
        }
        else {
            res.send(`User's data ${id} deleted`);
        }
	});
};
