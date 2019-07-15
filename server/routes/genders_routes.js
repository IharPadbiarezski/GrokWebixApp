const ObjectID = require('mongodb').ObjectID;

module.exports = function(app, db) {

    app.get('/api/v1/genders/:id', (req, res) => {
        const id = req.params.id;
        const details = {'_id': new ObjectID(id)};
        db.collection('genders').findOne(details, (err, item) => {
            if (err) {
                res.send({'error': 'An error has occured'});
            } else {
                res.send(item);
            }
        })
    });

    app.delete('/api/v1/genders/:id', (req, res) => {
        const id = req.params.id;
        const details = {'_id': new ObjectID(id)};
        db.collection('genders').remove(details, (err, item) => {
            if (err) {
                res.send({'error': 'An error has occured'});
            } else {
                res.send(`User ${id} deleted`);
            }
        })
    });

    app.get('/api/v1/genders/', (req, res) => {
        db.collection('genders').find().toArray((err, items) => {
            if (err) {
                res.send({'error': 'An error has occured'});
            } else {
                res.send(items);
            }
        })
    });


    app.post('/api/v1/genders', (req, res) => {
        const gender = {
            id: req.body.id,
            value: req.body.value
        };

        db.collection('genders').insert(gender, (err, result) => {
            if (err) {
                res.send({'error': 'An error has occured'});
            } else {
                res.send(result.ops[0]);
            }
        });
    });

    app.put('/api/v1/genders/:id', (req, res) => {
        const id = req.params.id;
        const details = {'_id': new ObjectID(id)};
        const gender = {
            value: req.body.value
        };
        
        db.collection('genders').update(details, gender, (err, item) => {
            if (err) {
                res.send({'error': 'An error has occured'});
            } else {
                res.send(gender);
            }
        })
    });
};