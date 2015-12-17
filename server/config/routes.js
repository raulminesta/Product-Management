  var customers = require('./../controllers/customers');
  var products = require('./../controllers/products');
  module.exports = function(app) {
    app.get('/customers', function(req, res) {
      customers.show(req, res);
    });
    app.post('/create', function(req,res){
    	customers.create(req,res);
    })
    app.delete('/delete/:id', function(req,res){
    	customers.delete(req,res)
    })
    app.get('/products', function(req, res){
      products.show(req,res);
    })
    app.post('/createproduct', function(req,res){
      products.create(req,res);
    })
    app.delete('/deleteproduct/:id', function(req,res){
      products.delete(req,res)
    })
    app.post('/associate', function(req,res){
      products.associate(req,res);
    })
    app.get("/show_associations", function(req, res){
      customers.join(req,res);
    })
  };