var mongoose = require('mongoose'),
	extend = require('mongoose-schema-extend'),
	Schema = mongoose.Schema;
	
var userSchema = require('./userSchema');

var studentSchema = userSchema.extend({});



studentSchema.methods.rateSession = function (sess) {
	// body...
};

studentSchema.methods.receiveNotification = function (not) {
	// body...
};

studentSchema.methods.register = function () {
	// body...
};

studentSchema.methods.takeCourse = function (sub) {
	// body...
};

module.exports = studentSchema;