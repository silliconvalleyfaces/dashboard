var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostSchema = new mongoose.Schema({
    // _user :  [{type: Schema.Types.ObjectId, ref: 'User'}],

    // // FOR NOW USER ID IS A PLACEHOLDER, LATER WE WILL USE THIS ONE:

    _user_id: [{type: Schema.Types.ObjectId, ref: 'users'}],
    title: {
      type:  String,
      required : true,
      maxlength : 50
    },
    text: {
      type:  String,
      required : true,
      maxlength : 255
    },
    url: {
      type:  String,
      maxlength : 255
    },
    comments: [{
      type: Schema.Types.ObjectId,
      ref: 'comments'
    }],
    // created_at: {type: Date, default: new Date};

},{timestamps: true});
module.exports = mongoose.model('posts', PostSchema);
mongoose.model('posts', PostSchema);
// Validations
// MongooseSchema.path('color').required(true, 'Color cannot be blank');
// MongooseSchema.path('weight').required(true, 'Weight cannot be blank');
// MongooseSchema.path('name').required(true, 'Name cannot be blank');
