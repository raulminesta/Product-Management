myapp.factory('customerFactory', function($http) {
  var factory = {};
  var customers = {};
  factory.getCustomers = function(callback) {
    $http.get('/customers').success(function(output) {
    customers = output;
    callback(customers);
    }) 
  }  
  factory.addCustomer = function(info, callback){
    $http.post('/create', info).success(function(){
    })
    callback()
  }
  factory.removeCustomer = function(info,callback){
    $http.delete('/delete/'+info).success(function(){})
    callback();
  }
  factory.show = function(callback){
  	$http.get("/show_associations").success(function(output){
  		customers = output;
  		callback(customers);
  	})
  }
  return factory;
});
myapp.factory('productFactory', function($http){
	var factory = {};
	var products={};
	factory.getProducts = function(callback){
		$http.get('/products').success(function(output){
			products= output;
			callback(products)
		})
	}
	factory.addProduct = function(info, callback){
		$http.post('/createproduct', info).success(function(){})
		callback();
	}
	factory.removeProduct = function(info,callback){
	    $http.delete('/deleteproduct/'+info).success(function(){})
		    callback();
	}
	factory.associate = function(info, callback){
		$http.post('/associate', info).success(function(){})
		callback();
	}
	return factory;
})