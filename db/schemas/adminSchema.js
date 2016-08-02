var mongoose = require('mongoose'),
	extend = require('mongoose-schema-extend'),
	Schema = mongoose.Schema;

var userSchema = require('./userSchema');

var adminSchema = userSchema.extend({});

adminSchema.methods.addCycle = function (cyc) {
	// body...
};

adminSchema.methods.addLevel = function (lev) {
	// body...
};

adminSchema.methods.addSpecialty = function (spe) {
	// body...
};

adminSchema.methods.addSubject = function (sub) {
	// body...
};

adminSchema.methods.approveProfessor = function (prof) {
	// body...
};

adminSchema.methods.approveStudent = function (stu) {
	// body...
};

adminSchema.methods.delCycle = function (cyc) {
	// body...
};

adminSchema.methods.delLevel = function (lev) {
	// body...
};

adminSchema.methods.delSpecialty = function (spe) {
	// body...
};

adminSchema.methods.delSubject = function (sub) {
	// body...
};

adminSchema.methods.delUser = function (user) {
	// body...
};

adminSchema.methods.rejectProfessor = function (prof) {
	// body...
};

adminSchema.methods.rejectStudent = function (stu) {
	// body...
};

module.exports = adminSchema;