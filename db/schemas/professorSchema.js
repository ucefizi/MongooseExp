var mongoose = require('mongoose'),
	extend = require('mongoose-schema-extend'),
	Schema = mongoose.Schema;

var userSchema = require('./userSchema');

var professorSchema = userSchema.extend({
	profession: {type: String, require: 'Please enter your profession'},
	desc: {type: String, required: 'Please enter a description about yourself'},
	cycles: [{type: Schema.Types.ObjectId, ref: 'Cycle'}]
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