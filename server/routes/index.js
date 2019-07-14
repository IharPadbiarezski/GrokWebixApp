const usersRoutes = require('./users_routes');
const gendersRoutes = require('./genders_routes');
const infoRoutes = require('./info_routes');
const userDataRoutes = require('./user_data_routes');
module.exports = function(app, db) {
    const DB = db.db('Grok');

    usersRoutes(app, DB);
    gendersRoutes(app, DB);
    infoRoutes(app, DB);
    userDataRoutes(app, DB);

}