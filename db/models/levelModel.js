var mongoose = require('mongoose');

var levelSchema = require('../schemas/levelSchema');

var Level = mongoose.model('Level', levelSchema);

module.exports = Level;