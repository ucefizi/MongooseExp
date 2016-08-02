var mongoose = require('mongoose'),
	extend = require('mongoose-schema-extend'),
	Schema = mongoose.Schema;

var subjectSchema = new Schema({
	title: String,
	specialty: String
}, {
	collection: 'subjects'
});

module.exports = subjectSchema;