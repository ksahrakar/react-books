const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes/API");
const app = express();
const PORT = process.env.PORT || 3001;

// Configure body parser for AJAX requests
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());

// Serve up static assets
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/public"));
}

// Add routes
app.use(routes);

// Connect to the Mongo DB
var CONNECT_URI = process.env.MONGODB_URI || "mongodb://localhost/reactbooks";
mongoose.connect(CONNECT_URI)
    .then(()=>console.log("Connected to MongoDB"))
    .catch(err => console.log(err));

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});