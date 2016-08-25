var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var UserSchema = new mongoose.Schema({
    first_name: {
      type:  String,
      required : true,
      maxlength : 25
    },
    last_name : {
      type : String,
      required : true,
      maxlength : 25
    },
    email : {
     type : String,
     required : true,
     maxlength : 25
   },
   email_share : {
    type : Boolean
  },
    password : {
      type :  String,
      required : true
    },
    phone : {
      type : Number,
      required : true,
    },
    phone_share : {
     type : Boolean
   },
    profile_pic : {
      type : String,
      required : true
    },
    user_level : {
      type : Number,
      required : true
    },
    _post_id: [{
      type: Schema.Types.ObjectId,
      ref: 'posts'
    }],
    _comment_id: [{
      type: Schema.Types.ObjectId,
      ref: 'Comment'
    }]
  },
    {timestamps: true}
);

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
