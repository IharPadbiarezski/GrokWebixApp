const ObjectID = require('mongodb').ObjectID;
const path = require("../config/path");

module.exports = (app, db) => {
    const DB = db.db('Grok');

    app.get(`${path.places}:id`, (req, res) => {
        const id = req.params.id;
        const details = {'_id': new ObjectID(id)};
        DB.collection('places').findOne(details, (err, item) => {
            if (err) {
                res.send({'error': 'An error has occured'});
            } else {
                res.send(item);
            }
        })
    });

    app.delete(`${path.places}:id`, (req, res) => {
        const id = req.params.id;
        const details = {'_id': new ObjectID(id)};
        DB.collection('places').remove(details, (err, item) => {
            if (err) {
                res.send({'error': 'An error has occured'});
            } else {
                res.send(`User ${id} deleted`);
            }
        })
    });

    app.get(`${path.places}`, (req, res) => {
        DB.collection('places').find().toArray((err, items) => {
            if (err) {
                res.send({'error': 'An error has occured'});
            } else {
                items.forEach((item) => {
                    item.id = item._id;
                });
                res.send(items);
            }
        })
    });


    app.post(`${path.places}`, (req, res) => {
        const place = {
            place: req.body.place,
            userDataId: req.body.userDataId
        };

        DB.collection('places').insert(place, (err, result) => {
            if (err) {
                res.send({'error': 'An error has occured'});
            } else {
                result.ops[0].id = result.insertedIds[0];
                res.send(result.ops[0]);
            }
        });
    });

    app.put(`${path.places}:id`, (req, res) => {
        const id = req.params.id;
        const details = {'_id': new ObjectID(id)};
        const place = {
            place: req.body.place,
            userDataId: req.body.userDataId
        };
        
        DB.collection('places').update(details, place, (err, item) => {
            if (err) {
                res.send({'error': 'An error has occured'});
            } else {
                res.send(place);
            }
        })
    });
};
