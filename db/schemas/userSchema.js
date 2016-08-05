var mongoose = require('mongoose'),
	extend = require('mongoose-schema-extend'),
	Schema = mongoose.Schema;

var userSchema = new Schema({
	fName: {type: String, required: 'Please enter your first name'},
	lName: {type: String, required: 'Please enter your last name'},
	email: {type: String, required: 'Please enter your email'},
	passWord: {type: String, required: 'Please enter a password', min: [8, 'Not a valid password']},
	mobile: {type: String, required: 'Please enter your phone number'},
	created: {type: Date, default: Date.now}
}, {
	collection: 'users'
});

// generate a hash for the password before any save operation
userSchema.pre('save', function(next) {
    var user = this;
    if (this.isModified('password') || this.isNew) {
      bcrypt.genSalt(10, function(err, salt) {
          if (err) {
            return next(err);
          }
          bcrypt.hash(user.passWord, salt, null, function(err, hash) {
              if (err) {
                return next(err);
              }
              user.passWord = hash;
              next();
            });
        });
    } else {
      return next();
    }
});

// checking if password is valid
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.passWord);
  };

userSchema.methods.logIn = function () {
	// body...
};

userSchema.methods.logOut = function () {
	// body...
};

module.exports = userSchema;