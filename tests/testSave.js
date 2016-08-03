var mongoose = require('mongoose');
const fs = require('fs');

var db = require('../db/dbConnect');
var User = require('../db/models/userModel');
var Professor = require('../db/models/professorModel');

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	console.log('Connected to database');
	var users = JSON.parse(fs.readFileSync('./users.json', 'utf8'));

	for (var i = 0; i < users.length; i++) {
		usr = new User(users[i]);
		usr.save(function (err, usr1) {
			if (err) return console.error(err);
			console.log('User: ' + usr._id + ' saved!');
		});
	}
	
});