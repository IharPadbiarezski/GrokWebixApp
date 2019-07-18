const ObjectID = require('mongodb').ObjectID;

module.exports = function(app, db) {
    const DB = db.db('Grok');

    app.get('/api/v1/info/:id', (req, res) => {
        const id = req.params.id;
        const details = {'_id': new ObjectID(id)};
        DB.collection('info').findOne(details, (err, item) => {
            if (err) {
                res.send({'error': 'An error has occured'});
            } else {
                res.send(item);
            }
        })
    });

    app.delete('/api/v1/info/:id', (req, res) => {
        const id = req.params.id;
        const details = {'_id': new ObjectID(id)};
        DB.collection('info').remove(details, (err, item) => {
            if (err) {
                res.send({'error': 'An error has occured'});
            } else {
                res.send(`User ${id} deleted`);
            }
        })
    });

    app.get('/api/v1/info', (req, res) => {
        // setTimeout(() => {
            DB.collection('info').find().toArray((err, items) => {    
                if (err) {
                    res.send({'error': 'An error has occured'});
                } else {
                    items.forEach((item) => {
                        item.id = item._id;
                    });
                    res.send(items);
                }
            })
        // }, 5000)
    });


    app.post('/api/v1/info', (req, res) => {
        const info = {
            song: req.body.song,
            car: req.body.car,
            book: req.body.book,
            movie: req.body.movie,
            drink: req.body.drink
        };

        DB.collection('info').insert(info, (err, result) => {
            if (err) {
                res.send({'error': 'An error has occured'});
            } else {
                result.ops[0].id = result.insertedIds[0];
                res.send(result.ops[0]);
            }
        });
    });

    app.put('/api/v1/info/:id', (req, res) => {
        const id = req.params.id;
        const details = {'_id': new ObjectID(id)};
        const info = {
            song: req.body.song,
            car: req.body.car,
            book: req.body.book,
            movie: req.body.movie,
            drink: req.body.drink
        };
        
        DB.collection('info').update(details, info, (err, item) => {
            if (err) {
                res.send({'error': 'An error has occured'});
            } else {
                res.send(info);
            }
        })
    });
};