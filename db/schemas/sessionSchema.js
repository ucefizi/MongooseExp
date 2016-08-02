var mongoose = require('mongoose'),
	extend = require('mongoose-schema-extend'),
	Schema = mongoose.Schema;

var sessionSchema = new Schema({
	start: Date,
	finish: Date,
	ressources: String,
	subject: String,
	students: Array
}, {
	collection: 'sessions'
});

module.exports = sessionSchema;