let MongoClient = require('mongodb').MongoClient;

let state = {
	db: null
};

exports.connect = (url, done) => {
	if (state.db) {
		return done();
	}

	MongoClient.connect(url, (err, db) => {
		if (err) {
			return done(err);
		}
		state.db = db;
		done();
	});
};

exports.get = function() {
	return state.db;
};
