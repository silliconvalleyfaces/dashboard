var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');
var bcrypt = require('bcrypt');
var password = require('password-hash-and-salt');

var UserSchema = new mongoose.Schema({
    first_name: String,
    last_name : String,
    email : String,
    password : String,
    phone : Number,
    profile_pic : String
});

// the following codes are for passport
// they need to be above mongoose.model('users', UserSchema);
UserSchema.plugin(passportLocalMongoose);



//bcrype method
// take a user's password and add salt to it
UserSchema.methods.generateHash = function (password){
  return bcrypt.hashSync(password, bcrypt.genSaltSync(9));
};
UserSchema.methods.validPassword = function(password){
  return bcrypt.compareSync(password, this.password);
};


module.exports = mongoose.model('users', UserSchema);
mongoose.model('users', UserSchema);
// Validations
// UserSchema.path('first_name').required(true, 'First name cannot be blank');
// UserSchema.path('last_name').required(true, 'Last name cannot be blank');
// UserSchema.path('email').required(true, 'Email cannot be blank');
// UserSchema.path('password').req
