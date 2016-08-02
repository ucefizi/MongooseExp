var mongoose = require('mongoose');

var subjectSchema = require('../schemas/subjectSchema');

var Subject = mongoose.model('Subject', subjectSchema);

module.exports = Subject;