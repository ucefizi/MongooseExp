var mongoose = require('mongoose');

mongoose.connect('mongodb://youssef:abc123@localhost/myDb');
var db = mongoose.connection;

module.exports = db;