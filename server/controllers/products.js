var mongoose = require('mongoose');
var Product = mongoose.model('Product');
var Customer = mongoose.model("Customer");

module.exports = (function() {
 return {
  show: function(req, res) {
     Product.find({}, function(err, results) {
       if(err) {
         console.log(err);
       } else {
         res.json(results);
       }
   })
  },
  create: function(req,res){
  	var product = new Product(req.body)
  	product.save(function(err){
  		if(err){
  			console.log(err)
  		}
  		else{
  			res.json()
  		}
  	})
  },
  delete: function(req,res){
  	// console.log(req.params.id)
  	Product.remove({_id: req.params.id}, function(err,product){
  		if(err){
  			console.log(err);
  		}
  		else{
  			console.log('Deleted')
  			res.json()
  		}
  	})
  },
  associate : function(req,res){
    Product.update({_id: req.body.product}, {$push: {customer_name : req.body.customer}}, function(err){
      console.log(err);
    })
    Customer.update({_id: req.body.customer._id}, {$push: {product_name: req.body.product}}, function (err){
      console.log(err);
    })
    res.json();
  }
 }
})();
