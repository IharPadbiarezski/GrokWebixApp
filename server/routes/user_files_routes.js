const ObjectID = require('mongodb').ObjectID;

module.exports = function(app, db) {
    const DB = db.db('Grok');

    app.get('/api/v1/userfiles/:id', (req, res) => {
        const id = req.params.id;
        const details = {'_id': new ObjectID(id)};
        DB.collection('userfiles').findOne(details, (err, item) => {
            if (err) {
                res.send({'error': 'An error has occured'});
            } else {
                res.send(item);
            }
        })
    });

    app.delete('/api/v1/userfiles/:id', (req, res) => {
        const id = req.params.id;
        const details = {'_id': new ObjectID(id)};
        DB.collection('userfiles').remove(details, (err, item) => {
            console.log(details)
            if (err) {
                res.send({'error': 'An error has occured'});
            } else {
                res.send(`User ${id} deleted`);
            }
        })
    });

    app.get('/api/v1/userfiles/', (req, res) => {
        DB.collection('userfiles').find().toArray((err, items) => {
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


    app.post('/api/v1/userfiles', (req, res) => {
        const userfile = { 
            name: req.body.name,
            size: req.body.size,
            changeDate: req.body.changeDate
        };
        
        DB.collection('userfiles').insert(userfile, (err, result) => {
            if (err) {
                res.send({'error': 'An error has occured'});
            } else {
                result.ops[0].id = result.insertedIds[0];
                res.send(result.ops[0]);
            }
        });
    });

    app.put('/api/v1/userfiles/:id', (req, res) => {
        const id = req.params.id;
        const details = {'_id': new ObjectID(id)};
        const userfile = {
            name: req.body.name,
            size: req.body.size,
            changeDate: req.body.changeDate
        };
        
        DB.collection('userfiles').update(details, userfile, (err, item) => {
            if (err) {
                res.send({'error': 'An error has occured'});
            } else {
                res.send(userfile);
            }
        })
    });
};