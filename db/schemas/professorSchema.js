var mongoose = require('mongoose'),
	extend = require('mongoose-schema-extend'),
	Schema = mongoose.Schema;

var userSchema = require('./userSchema');

var professorSchema = userSchema.extend({
	profession: String,
	desc: String,
	cycles: Array
});

professorSchema.methods.addSession = function (sess) {
	// body...
};

professorSchema.methods.delSession = function (sess) {
	// body...
};

professorSchema.methods.startSession = function (sess) {
	// body...
};

professorSchema.methods.finishSession = function (sess) {
	// body...
};

professorSchema.methods.offerCourse = function (sub, lev, cyc, spe) {
	// body...
};

professorSchema.methods.setSchedule = function (sch) {
	// body...
};

module.exports = professorSchema;