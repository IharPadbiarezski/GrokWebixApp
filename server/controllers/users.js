// let Users = require('../models/users');

// exports.all = (req, res) => {
//     Users.all((err, docs) => {
//         if (err) {
//             console.log(err)
//             return res.sendStatus(500);
//         }
//         res.send(docs)
//     })
// }

// exports.findById = (req, res) => {
//     const id = req.params.id;
//     const details = {'_id': new ObjectID(id)};
//     Users.findById(details, (err, item) => {
//         if (err) {
//             res.send({'error': 'An error has occured'});
//         } else {
//             res.send(item);
//         }
//     })
// }

// exports.create = (req, res) =>