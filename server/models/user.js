var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

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
module.exports = mongoose.model('users', UserSchema);

mongoose.model('users', UserSchema);
// Validations
// UserSchema.path('first_name').required(true, 'First name cannot be blank');
// UserSchema.path('last_name').required(true, 'Last name cannot be blank');
// UserSchema.path('email').required(true, 'Email cannot be blank');
// UserSchema.path('password').req
