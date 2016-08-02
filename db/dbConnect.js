var mongoose = require('mongoose');

mongoose.connect('<Enter your MongoDB connection string>');
var db = mongoose.connection;

module.exports = db;