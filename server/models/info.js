const ObjectID = require("mongodb").ObjectID;
const db = require("../config/db");

exports.all = (cb) => {
	db.get().collection("info").find().toArray((err, items) => {
		cb(err, items);
	});
};

exports.allSorted = (type, cb) => {
	db.get().collection("info").find().sort(type).toArray((err, items) => {
		cb(err, items);
	});
};

exports.findById = (id, cb) => {
	db.get().collection("info").findOne({_id: new ObjectID(id)}, (err, item) => {
		cb(err, item);
	});
};

exports.create = (info, cb) => {
	db.get().collection("info").insertOne(info, (err, result) => {
		cb(err, result);
	});
};

exports.update = (id, info, cb) => {
	db.get().collection("info").update({_id: new ObjectID(id)}, info, (err) => {
			cb(err);
		}
	);
};

exports.delete = (id, cb) => {
	db.get().collection("info").deleteOne({_id: ObjectID(id)}, (err) => {
			cb(err);
		}
	);
}
