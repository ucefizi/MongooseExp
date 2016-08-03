var mongoose = require('mongoose'),
	extend = require('mongoose-schema-extend'),
	Schema = mongoose.Schema;

var levelSchema = new Schema({
	title: {type: String, require: 'Please enter the level title'},
	cycle: {type: String, require: 'Please enter the cycle title'},
	created: {type: Date, default: Date.now}
}, {
	collection: 'levels'
});

module.exports = levelSchema;