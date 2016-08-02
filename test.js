var mongoose = require('mongoose');

var db = require('./db/dbConnect');
var User = require('./db/models/userModel');

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
		console.log('1st professor: ' + usr1 + ' saved!');
		mongoose.disconnect();
	});

	User.find({fName: /^aabb/, lName: /^bbcc/ }, function (err, users) {
		if (err) return console.error(err);
		var usr = users;
		var us = new User(usr[usr.length-1]);
		console.log(us.email);
	});
});