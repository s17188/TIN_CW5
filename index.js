const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/tin_cw5', { useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;

const apiRoutes = require("./routes/api-routes");
const app = express();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set("view options", { layout: false } );

if(!db)
    console.log("Error connecting db")
else
    console.log("Db connected successfully")

app.use('/', apiRoutes);
app.listen(8080, () => {
    console.log("Running API on port " + 8080);
});