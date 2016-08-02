var mongoose = require('mongoose');

var professorSchema = require('../schemas/professorSchema');

var Professor = mongoose.model('Professor', professorSchema);

module.exports = Professor;