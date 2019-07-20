const Info = require('../models/info');

exports.all = (req, res) => {
        if (req.query.sort) {
			const sortField = Object.keys(req.query.sort)[0];
			if (req.query.sort[sortField] === "asc") {
				req.query.sort[sortField] = 1;
			}
			else if (req.query.sort[sortField] === "desc") {
				req.query.sort[sortField] = -1;
			}
			Info.allSorted(req.query.sort, (err, items) => {
				if (err) {
					res.send({error: "An error has occured"});
				}
				else {
					let finalData;
					let itemsPackage;
					if (req.query.count && req.query.start) {
						const count = +req.query.count;
						const startIndex = +req.query.start;
						const endIndex = count + startIndex;
						finalData = {
							pos: +req.query.start,
							total_count: items.length
						};
						itemsPackage = items.slice(startIndex, endIndex);
						itemsPackage.forEach((item) => {
							item.id = item._id;
						});
						finalData.data = itemsPackage;
					}
					res.send(finalData);
				}
			});
        }
        else {
			Info.all((err, items) => {
				if (err) {
					res.send({error: "An error has occured"});
				}
				else {
					let finalData;

					if (req.query.count && req.query.start) {
						const count = +req.query.count;
						const startIndex = +req.query.start;
						const endIndex = count + startIndex;
						finalData = {
							pos: +req.query.start,
							total_count: items.length
						};
						let itemsPackage = items.slice(startIndex, endIndex);
						itemsPackage.forEach((item) => {
							item.id = item._id;
						});
						finalData.data = itemsPackage;
					}
					else {
						const count = +req.query.count;
						const startIndex = 0;
						const endIndex = count + startIndex;
						finalData = {
							pos: +req.query.start,
							total_count: items.length
						};
						items = items.slice(startIndex, endIndex);
						items.forEach((item) => {
							item.id = item._id;
						});
						finalData.data = items;
					}
					res.send(finalData);
				}
			});
		}
}


exports.findById = (req, res) => {
    const id = req.params.id;
	Info.findById(id, (err, item) => {
		if (err) {
            res.send({error: "An error has occured"});
        }
        else {
            res.send(item);
        }
	});
};

exports.create = (req, res) => {
	const info = {
        song: req.body.song,
        car: req.body.car,
        book: req.body.book,
        movie: req.body.movie,
        drink: req.body.drink
    };
    
	Info.create(info, (err, result) => {
		if (err) {
            res.send({error: "An error has occured"});
        }
        else {
            result.ops[0].id = result.insertedIds[0];
            res.send(result.ops[0]);
        }
	});
};

exports.update = (req, res) => {
    const id = req.params.id;
	const info = {
        song: req.body.song,
        car: req.body.car,
        book: req.body.book,
        movie: req.body.movie,
        drink: req.body.drink
    };

	Info.update(id, info, (err) => {
        if (err) {
            res.send({error: "An error has occured"});
        }
        else {
            res.send(info);
        }
		}
	);
};

exports.delete = (req, res) => {
    const id = req.params.id;
	Info.delete(id, (err) => {
        if (err) {
            res.send({error: "An error has occured"});
        }
        else {
            res.send(`Info ${id} deleted`);
        }
	});
};
