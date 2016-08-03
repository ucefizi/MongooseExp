var mongoose = require('mongoose'),
	extend = require('mongoose-schema-extend'),
	Schema = mongoose.Schema;

cycleSchema = new Schema({
	title: {type: String, require: 'Please enter the cycle title'},
	created: {type: Date, default: Date.now}
}, {
	collection: 'cycles'
});

module.exports = cycleSchema;