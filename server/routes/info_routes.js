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
        if (req.query.sort) {
            const sortField = Object.keys(req.query.sort)[0];
            if (req.query.sort[sortField] === 'asc') {
                req.query.sort[sortField] = 1
            } else if(req.query.sort[sortField] === 'desc') {
                req.query.sort[sortField] = -1
            }
            DB.collection('info').find().sort( req.query.sort ).toArray((err, items) => { 
                if (err) {
                    res.send({'error': 'An error has occured'});
                } else {

                    let finalData;
                    let itemsPackage;
                    if ( req.query.count && req.query.start) {
                        const count = +req.query.count;
                        const startIndex = +req.query.start + 1;
                        const endIndex = count + startIndex;
                        finalData = {
                            "pos": +req.query.start,
                            "total_count": items.length
                        }
                        itemsPackage = items.slice(startIndex, endIndex);
                        itemsPackage.forEach((item) => {
                            item.id = item._id;
                        });
                        finalData.data = itemsPackage;
                    }
                    res.send(finalData);
                }
            });
        } else {
            DB.collection('info').find().toArray((err, items) => { 
                if (err) {
                    res.send({'error': 'An error has occured'});
                } else {
                    let finalData;
                    
                    if ( req.query.count && req.query.start) {
                        const count = +req.query.count;
                        const startIndex = +req.query.start + 1;
                        const endIndex = count + startIndex;
                        finalData = {
                            "pos": +req.query.start,
                            "total_count": items.length
                        }
                        itemsPackage = items.slice(startIndex, endIndex);
                        itemsPackage.forEach((item) => {
                            item.id = item._id;
                        });
                        finalData.data = itemsPackage;
                    } else {
                        const count = +req.query.count;
                        const startIndex = 1;
                        const endIndex = count + startIndex;
                        finalData = {
                            "pos": +req.query.start,
                            "total_count": items.length
                        }
                        items = items.slice(startIndex, endIndex);
                        items.forEach((item) => {
                            item.id = item._id;
                        });
                        finalData.data = items;
                    }
                    res.send(finalData);
                }
            });
        }
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