const ObjectID = require('mongodb').ObjectID;

module.exports = function(app, db) {

    app.get('/api/v1/users/:id', (req, res) => {
        const id = req.params.id;
        const details = {'_id': new ObjectID(id)};
        db.collection('users').findOne(details, (err, item) => {
            if (err) {
                res.send({'error': 'An error has occured'});
            } else {
                res.send(item);
            }
        })
    });

    app.delete('/api/v1/users/:id', (req, res) => {
        const id = req.params.id;
        const details = {'_id': new ObjectID(id)};
        db.collection('users').remove(details, (err, item) => {
            if (err) {
                res.send({'error': 'An error has occured'});
            } else {
                res.send(`User ${id} deleted`);
            }
        })
    });

    app.get('/api/v1/users/', (req, res) => {
        db.collection('users').find().toArray((err, items) => {
            if (err) {
                res.send({'error': 'An error has occured'});
            } else {
                res.send(items);
            }
        })
    });


    app.post('/api/v1/users', (req, res) => {
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

        db.collection('users').insert(user, (err, result) => {
            if (err) {
                res.send({'error': 'An error has occured'});
            } else {
                res.send(result.ops[0]);
            }
        });
    });

    app.put('/api/v1/users/:id', (req, res) => {
        const id = req.params.id;
        const details = {'_id': new ObjectID(id)};
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

        DB.collection('users').update(details, user, (err, item) => {
            if (err) {
                res.send({'error': 'An error has occured'});
            } else {
                res.send(user);
            }
        })
    });
};