var mongoose = require('mongoose');
var Customer = mongoose.model('Customer');

module.exports = (function() {
 return {
  show: function(req, res) {
     Customer.find({}, function(err, results) {
       if(err) {
         console.log(err);
       } else {
         res.json(results);
       }
   })
  },
  create: function(req,res){
  	var customer = new Customer(req.body)
  	customer.save(function(err){
  		if(err){
  			console.log(err)
  		}
  		else{
  			res.json()
  		}
  	})
  },
  delete: function(req,res){
  	console.log(req.params.id)
  	Customer.remove({_id: req.params.id}, function(err,customer){
  		if(err){
  			console.log(err);
  		}
  		else{
  			console.log('sucess?')
  			res.json()
  		}
  	})
  }, 
  join: function(req,res){
    Customer.find({}).populate("product_name").exec(function(err, customers){
      if(err){
        console.log(err);
      }
      else{
        res.json(customers)
      }
    })
  }
 }
})();