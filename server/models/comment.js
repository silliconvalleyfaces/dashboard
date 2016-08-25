var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var CommentSchema = new mongoose.Schema({
    text: {
      type:  String,
      required : true,
      maxlength : 255
    },
    _user : {
      type: Schema.Types.ObjectId,
      ref: 'users'
    },
    _post : {
      type: Schema.Types.ObjectId,
      ref: 'posts'
    }
  },
    {timestamps: true}
);

// the following codes are for passport
// they need to be above mongoose.model('users', CommentSchema);
CommentSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model('Comment', CommentSchema);

mongoose.model('Comment', CommentSchema);
// Validations
// UserSchema.path('first_name').required(true, 'First name cannot be blank');
// UserSchema.path('last_name').required(true, 'Last name cannot be blank');
// UserSchema.path('email').required(true, 'Email cannot be blank');
// UserSchema.path('password').req
