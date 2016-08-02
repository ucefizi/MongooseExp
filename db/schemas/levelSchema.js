var mongoose = require('mongoose'),
	extend = require('mongoose-schema-extend'),
	Schema = mongoose.Schema;

var levelSchema = new Schema({
	title: String,
	cycle: String
}, {
	collection: 'levels'
});

module.exports = levelSchema;