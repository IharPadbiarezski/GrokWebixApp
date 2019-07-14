module.exports = function(app, db) {
    app.post('/users', (req, res) => {
        // res.send("Hello there");
        const user = {name: req.body.name, gender: req.body.gender};
        const usersDB = db.db('Grok');
        usersDB.collection('users').insert(user, (err, result) => {
            if (err) {
                res.send({'error': 'An error has occured'});
            } else {
                res.send(result.ops[0]);
            }
        });
    });
};