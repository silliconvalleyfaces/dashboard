var mongoose = require('mongoose');
var PostSchema = new mongoose.Schema({
    first_name: {Type: String, required: [true,'First name cannot be blank']},
    last_name: {Type: String, required: [true,'Last name cannot be blank']},
    title: {Type: String, required: [true,'Title cannot be blank']},
    text: {Type: String, required: [true,'text cannot be blank']},
    url: {Type: String}
    comments: [{
      first_name: String,
      last_name: String,
      text: String
    }]
});

mongoose.model('Mongoosedb', PostSchema);
// Validations
// MongooseSchema.path('color').required(true, 'Color cannot be blank');
// MongooseSchema.path('weight').required(true, 'Weight cannot be blank');
// MongooseSchema.path('name').required(true, 'Name cannot be blank');
