const ObjectID = require('mongodb').ObjectID;

module.exports = (app, db) => {
    const DB = db.db('Grok');

    app.get('/api/v1/places/:id', (req, res) => {
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

    app.delete('/api/v1/places/:id', (req, res) => {
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

    app.get('/api/v1/places', (req, res) => {
        DB.collection('places').find().toArray((err, items) => {
            if (err) {
                res.send({'error': 'An error has occured'});
            } else {
                res.send(items);
            }
        })
    });


    app.post('/api/v1/places', (req, res) => {
        const place = {
            place: req.body.place,
            userDataId: req.body.userDataId
        };

        DB.collection('places').insert(place, (err, result) => {
            items.forEach((item) => {
                item.id = item._id;
            });

            if (err) {
                res.send({'error': 'An error has occured'});
            } else {
                res.send(result.ops[0]);
            }
        });
    });

    app.put('/api/v1/places/:id', (req, res) => {
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

// [
//     {
//         "_id": "5d2b1e5289fe9570f8761743",
//         "goal": "Go to the movie",
//         "userId": "7",
//         "hours": "5",
//         "reminder": "Do some crazy stuff",
//         "wish": "new car"
//     },
//     {
//         "_id": "5d2b1e8889fe9570f8761744",
//         "goal": "Ride a bike",
//         "userId": "2",
//         "hours": "4",
//         "reminder": "Never go to the shop",
//         "wish": "new clother"
//     },
//     {
//         "_id": "5d2b1eac89fe9570f8761745",
//         "goal": "Drink some beer",
//         "userId": "1",
//         "hours": "2",
//         "reminder": "Stay tuned",
//         "wish": "nothing"
//     },
//     {
//         "_id": "5d2b1ec489fe9570f8761746",
//         "goal": "Drink some beer2",
//         "userId": "2",
//         "hours": "3",
//         "reminder": "Stay aqui",
//         "wish": "nothing"
//     },
//     {
//         "_id": "5d2b1ef689fe9570f8761747",
//         "goal": " Beber la cerbesa",
//         "userId": "3",
//         "hours": "1",
//         "reminder": "Vivir",
//         "wish": "Guitar"
//     }