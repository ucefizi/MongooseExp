var mongoose = require('mongoose');

var db = require('../db/dbConnect');
var User = require('../db/models/userModel');
var Professor = require('../db/models/professorModel');


db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	User.find(function (err, users) {
		if (err) return console.error(err);
		var usr = users;
		var js1 = 'Found users: ' + users;
		console.log(js1);
		var js = '';
		for (var i = 0; i < usr.length; i++) {
			var us = new User(usr[i]);
			js += 'User' + i + ': ' + JSON.stringify(us) + '\n';
		}
		console.log('\n');
		console.log(js);
	});
});