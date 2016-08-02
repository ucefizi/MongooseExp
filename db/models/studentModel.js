var mongoose = require('mongoose');

var studentSchema = require('../schemas/studentSchema');

var Student = mongoose.model('Student', studentSchema);

module.exports = Student;