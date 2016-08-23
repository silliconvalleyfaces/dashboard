var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
    first_name: {Type: String, required: [true,'First name cannot be blank']}
    last_name : {Type: String, required: [true,'Last name cannot be blank']},
    email : {Type: String, required: [true,'Email name cannot be blank']},
    password : {Type: String, required: [true,'Password must be at least 8 characters'], minlength: 8 },
    phone : {Type: Number, required: [true,'First name cannot be blank']},
    profile_pic : {Type: String }
});

mongoose.model('Mongoosedb', UserSchema);
// Validations
// UserSchema.path('first_name').required(true, 'First name cannot be blank');
// UserSchema.path('last_name').required(true, 'Last name cannot be blank');
// UserSchema.path('email').required(true, 'Email cannot be blank');
// UserSchema.path('password').req
