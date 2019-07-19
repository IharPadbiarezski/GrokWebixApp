let Users = require('../models/users');

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
    const details = {'_id': new ObjectID(id)};
    Users.findById(details, (err, item) => {
        if (err) {
            res.send({'error': 'An error has occured'});
        } else {
            res.send(item);
        }
    })
}

exports.create = (req, res) => {}