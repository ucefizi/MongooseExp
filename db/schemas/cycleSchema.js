var mongoose = require('mongoose'),
	extend = require('mongoose-schema-extend'),
	Schema = mongoose.Schema;

cycleSchema = new Schema({
	title: String,
}, {
	collection: 'cycles'
});

module.exports = cycleSchema;