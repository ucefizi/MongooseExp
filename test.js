var mongoose = require('mongoose');

var db = require('./db/dbConnect');
var User = require('./db/models/userModel');
var Professor = require('./db/models/professorModel');

var usr1 = new User({
	fName: 'aabb',
	lName: 'bbcc',
	email: 'abc@example.com',
	passWord: 'abc123',
	mobile: '0666666666'
});

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	console.log('Connected to database');

	usr1.save(function (err, usr1) {
		if (err) return console.error(err);
		console.log('User: ' + usr1 + ' saved!');
	});

	User.find(function (err, users) {
		if (err) return console.error(err);
		var usr = users;
		for (var i = 0; i < usr.length; i++) {
			var us = new User(usr[i]);
			console.log('User' + i + ': ' + us + '\n');
		}
	});
});