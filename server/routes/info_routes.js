const ObjectID = require('mongodb').ObjectID;

module.exports = function(app, db) {

    app.get('/info/:id', (req, res) => {
        const id = req.params.id;
        const details = {'_id': new ObjectID(id)};
        db.collection('info').findOne(details, (err, item) => {
            if (err) {
                res.send({'error': 'An error has occured'});
            } else {
                res.send(item);
            }
        })
    });

    app.delete('/info/:id', (req, res) => {
        const id = req.params.id;
        const details = {'_id': new ObjectID(id)};
        db.collection('info').remove(details, (err, item) => {
            if (err) {
                res.send({'error': 'An error has occured'});
            } else {
                res.send(`User ${id} deleted`);
            }
        })
    });

    app.get('/info/', (req, res) => {
        db.collection('info').find().toArray((err, items) => {
            if (err) {
                res.send({'error': 'An error has occured'});
            } else {
                res.send(items);
            }
        })
    });


    app.post('/info', (req, res) => {
        const info = {
            song: req.body.song,
            car: req.body.car,
            book: req.body.book,
            movie: req.body.movie,
            drink: req.body.drink
        };

        db.collection('info').insert(info, (err, result) => {
            if (err) {
                res.send({'error': 'An error has occured'});
            } else {
                res.send(result.ops[0]);
            }
        });
    });

    app.put('/info/:id', (req, res) => {
        const id = req.params.id;
        const details = {'_id': new ObjectID(id)};
        const info = {
            song: req.body.song,
            car: req.body.car,
            book: req.body.book,
            movie: req.body.movie,
            drink: req.body.drink
        };
        
        db.collection('info').update(details, info, (err, item) => {
            if (err) {
                res.send({'error': 'An error has occured'});
            } else {
                res.send(info);
            }
        })
    });
};