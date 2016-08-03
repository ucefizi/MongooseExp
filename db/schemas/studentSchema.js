var mongoose = require('mongoose'),
	extend = require('mongoose-schema-extend'),
	Schema = mongoose.Schema;
	
var userSchema = require('./userSchema');

var studentSchema = userSchema.extend({});

// generate a hash for the password before any save operation
studentSchema.pre('save', function(next) {
    var student = this;
    if (this.isModified('password') || this.isNew) {
      bcrypt.genSalt(10, function(err, salt) {
          if (err) {
            return next(err);
          }
          bcrypt.hash(student.password, salt, null, function(err, hash) {
              if (err) {
                return next(err);
              }
              student.password = hash;
              next();
            });
        });
    } else {
      return next();
    }
  });

studentSchema.methods.rateSession = function (sess) {
	// body...
};

studentSchema.methods.receiveNotification = function (not) {
	// body...
};

studentSchema.methods.register = function () {
	// body...
};

studentSchema.methods.takeCourse = function (sub) {
	// body...
};

// checking if password is valid
studentSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };

module.exports = studentSchema;