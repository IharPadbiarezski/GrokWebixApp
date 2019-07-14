const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const db = require('./config/db');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));

const client = new MongoClient(db.uri, { useNewUrlParser: true });

client.connect((err, database) => {
    if (err) {
        return console.log(err)
    }
    require('./routes')(app, database);
    // client.close();
    app.listen(port, () => {
        console.log(`App listening on port ${port}!`);
    });
  });