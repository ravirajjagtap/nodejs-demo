"use strict";

var express = require("express");
var path = require("path");
var app = express();
var PORT = process.env.PORT || 3000;

// Render HTML file
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

// Start the server
app.listen(PORT, function () {
  console.log("Server is running on http://localhost:".concat(PORT));
});