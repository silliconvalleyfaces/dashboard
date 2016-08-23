var mongoose = require('mongoose');
var MongooseSchema = new mongoose.Schema({
    name: String,
    weight: Number,
    color: String
});

mongoose.model('Mongoosedb', MongooseSchema);
// Validations
MongooseSchema.path('color').required(true, 'Color cannot be blank');
MongooseSchema.path('weight').required(true, 'Weight cannot be blank');
MongooseSchema.path('name').required(true, 'Name cannot be blank');