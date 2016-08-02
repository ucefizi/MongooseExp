var mongoose = require('mongoose');

var cycleSchema = require('../schemas/cycleSchema');

var Cycle = mongoose.model('Cycle', cycleSchema);

module.exports = Cycle;