const ObjectID = require("mongodb").ObjectID;
const db = require("../config/db");

exports.all = (cb) => {
	db.get().collection("goalsfiles").find().toArray((err, items) => {
		cb(err, items);
	});
};

exports.findById = (id, cb) => {
	db.get().collection("goalsfiles").findOne({_id: new ObjectID(id)}, (err, item) => {
		cb(err, item);
	});
};

exports.create = (user, cb) => {
	db.get().collection("goalsfiles").insertOne(user, (err, result) => {
		cb(err, result);
	});
};

exports.update = (id, goalsFile, cb) => {
	db.get().collection("goalsfiles").update({_id: new ObjectID(id)}, goalsFile, (err) => {
			cb(err);
		}
	);
};

exports.delete = (id, cb) => {
	db.get().collection("goalsfiles").deleteOne({_id: ObjectID(id)}, (err) => {
			cb(err);
		}
	);
}
