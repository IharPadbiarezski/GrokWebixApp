const express = require("express");
const fileUpload = require("express-fileupload");
const bodyParser = require("body-parser");
const db = require("./config/db");
const cors = require("cors");

const app = express();

const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));

app.use(fileUpload());

app.use(cors());

db.connect((err) => {
	if (err) {
		return console.log(err);
	}
	require("./routes")(app);
	app.listen(port, () => {
		console.log(`App listening on port ${port}!`);
	});
});
