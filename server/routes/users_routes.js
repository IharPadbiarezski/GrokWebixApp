const ObjectID = require('mongodb').ObjectID;

module.exports = function(app, db) {

    const usersDB = db.db('Grok');

    app.get('/users/:id', (req, res) => {
        const id = req.params.id;
        const details = {'_id': new ObjectID(id)};
        usersDB.collection('users').findOne(details, (err, item) => {
            if (err) {
                res.send({'error': 'An error has occured'});
            } else {
                res.send(item);
            }
        })
    });

    app.delete('/users/:id', (req, res) => {
        const id = req.params.id;
        const details = {'_id': new ObjectID(id)};
        usersDB.collection('users').remove(details, (err, item) => {
            if (err) {
                res.send({'error': 'An error has occured'});
            } else {
                res.send(`User ${id} deleted`);
            }
        })
    });

    app.get('/users', (req, res) => {
        usersDB.collection('users').find().toArray((err, items) => {
            if (err) {
                res.send({'error': 'An error has occured'});
            } else {
                res.send(items);
            }
        })
    });


    app.post('/users', (req, res) => {
        const user = {name: req.body.name, gender: req.body.gender};
        usersDB.collection('users').insert(user, (err, result) => {
            if (err) {
                res.send({'error': 'An error has occured'});
            } else {
                res.send(result.ops[0]);
            }
        });
    });

    app.put('/users/:id', (req, res) => {
        const id = req.params.id;
        const details = {'_id': new ObjectID(id)};
        const user = {name: req.body.name, gender: req.body.gender};
        usersDB.collection('users').update(details, user, (err, item) => {
            if (err) {
                res.send({'error': 'An error has occured'});
            } else {
                res.send(user);
            }
        })
    });
};