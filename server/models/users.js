// const ObjectID = require('mongodb').ObjectID;
// const db = require('./db');

// exports.all = (cb) => {
//     db.get().collection('users').find().toArray((err, docs) => {
//         cb(err, docs);
//     })
// }

// exports.findById = (id, cb) => {
//     // const id = req.params.id;
//     // const details = {'_id': new ObjectID(id)};
//     DB.collection('users').findOne(details, (err, item) => {
//         cb(err, item);
//         // if (err) {
//         //     res.send({'error': 'An error has occured'});
//         // } else {
//         //     res.send(item);
//         // }
//     })
// }

// exports.create = (user, cb) => {
//     // const user = {
//     //     name: req.body.name,
//     //     gender: req.body.gender,
//     //     isActive: req.body.isActive,
//     //     balance: req.body.balance,
//     //     age: req.body.age,
//     //     eyeColor: req.body.eyeColor,
//     //     company: req.body.company,
//     //     email: req.body.email,
//     //     phone: req.body.phone,
//     //     address: req.body.address
//     // };

//     DB.collection('users').insert(user, (err, result) => {
//         cb(err, result);
//         // if (err) {
//         //     res.send({'error': 'An error has occured'});
//         // } else {
//         //     result.ops[0].id = result.insertedIds[0];
//         //     res.send(result.ops[0]);
//         // }
//     });
// }