const express = require("express");
const fileUpload = require("express-fileupload");
const MongoClient = require("mongodb").MongoClient;
const bodyParser = require("body-parser");
const db = require("./config/db");
const cors = require("cors");

const app = express();

const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));

app.use(fileUpload());

app.use(cors());

const client = new MongoClient(db.uri, {useNewUrlParser: true});

db.connect((err) => {
	if (err) {
		return console.log(err);
	}
	require("./routes")(app);
	app.listen(port, () => {
		console.log(`App listening on port ${port}!`);
	});
});
