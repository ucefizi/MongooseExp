var mongoose = require('mongoose'),
	extend = require('mongoose-schema-extend'),
	Schema = mongoose.Schema;

var specialtySchema = new Schema({
	name: String,
	level: String
}, {
	collection: 'specialties'
});

module.exports = specialtySchema;