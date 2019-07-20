const ObjectID = require("mongodb").ObjectID;
const db = require("../config/db");

exports.all = (cb) => {
	db.get().collection("places").find().toArray((err, items) => {
		cb(err, items);
	});
};

exports.findById = (id, cb) => {
	db.get().collection("places").findOne({_id: new ObjectID(id)}, (err, item) => {
		cb(err, item);
	});
};

exports.create = (user, cb) => {
	db.get().collection("places").insert(user, (err, result) => {
		cb(err, result);
	});
};

exports.update = (id, gender, cb) => {
	db.get().collection("places").update({_id: new ObjectID(id)}, gender, (err) => {
			cb(err);
		}
	);
};

exports.delete = (id, cb) => {
	db.get().collection("places").deleteOne({_id: ObjectID(id)}, (err) => {
			cb(err);
		}
	);
}
