var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var CustomerSchema = new mongoose.Schema({
  name: {type: String, required: true, minlength: 3},
  created_at: {type: String, default: Date().toString().substr(4,11)},
  product_name: [{type: Schema.Types.ObjectId, ref: 'Product'}]
});
mongoose.model('Customer', CustomerSchema);
