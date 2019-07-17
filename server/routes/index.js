const usersRoutes = require('./users_routes');
const gendersRoutes = require('./genders_routes');
const infoRoutes = require('./info_routes');
const userDataRoutes = require('./user_data_routes');
const placesRoutes = require('./places_routes');
module.exports = function(app, db) {
    // const DB = db.db('Grok');

    usersRoutes(app, db);
    gendersRoutes(app, db);
    infoRoutes(app, db);
    userDataRoutes(app, db);
    placesRoutes(app, db);
}