var mongoose = require('mongoose'),
	extend = require('mongoose-schema-extend'),
	Schema = mongoose.Schema;

var userSchema = new Schema({
	fName: {type: String, required: 'Please enter your first name'},
	lName: {type: String, required: 'Please enter your last name'},
	email: {type: String, required: 'Please enter your email'},
	passWord: {type: String, required: 'Please enter a password', min: [8, 'Not a valid password']},
	mobile: {type: String, required: 'Please enter your phone number'},
	created: {type: Date, default: Date.now}
}, {
	collection: 'users'
});

userSchema.methods.logIn = function () {
	// body...
};

userSchema.methods.logOut = function () {
	// body...
};

module.exports = userSchema;