var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ProductSchema = new mongoose.Schema({
  pname: {type: String, required: true, minlength: 2},
  quantity: Number,
  created_at: {type: String, default: Date().toString().substr(4,11)},
  customer_name: [{type: Schema.Types.ObjectId, ref: 'Customer'}]
});
mongoose.model('Product', ProductSchema);

