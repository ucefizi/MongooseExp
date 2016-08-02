var mongoose = require('mongoose');

var specialtySchema = require('../schemas/specialtySchema');

var Specialty = mongoose.model('Specialty', specialtySchema);

module.exports = Specialty;