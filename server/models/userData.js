const ObjectID = require("mongodb").ObjectID;
const db = require("../config/db");

exports.all = (cb) => {
	db.get().collection("userdata").find().toArray((err, items) => {
		cb(err, items);
	});
};

exports.findById = (id, cb) => {
	db.get().collection("userdata").findOne({_id: new ObjectID(id)}, (err, item) => {
		cb(err, item);
	});
};

exports.create = (user, cb) => {
	db.get().collection("userdata").insertOne(user, (err, result) => {
		cb(err, result);
	});
};

exports.update = (id, gender, cb) => {
	db.get().collection("userdata").update({_id: new ObjectID(id)}, gender, (err) => {
			cb(err);
		}
	);
};

exports.delete = (id, cb) => {
	db.get().collection("userdata").deleteOne({_id: ObjectID(id)}, (err) => {
			cb(err);
		}
	);
}
