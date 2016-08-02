var mongoose = require('mongoose'),
	extend = require('mongoose-schema-extend'),
	Schema = mongoose.Schema;

var userSchema = new Schema({
	fName: String,
	lName: String,
	email: String,
	passWord: String,
	mobile: String
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