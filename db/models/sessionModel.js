var mongoose = require('mongoose');

var sessionSchema = require('../schemas/sessionSchema');

var Session = mongoose.model('Session', sessionSchema);

module.exports = Session;