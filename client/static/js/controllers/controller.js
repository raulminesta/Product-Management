myapp.controller('customersController', function($scope, customerFactory) {
  $scope.index = function(){
    customerFactory.getCustomers(function (data) {
      $scope.customers = data;
    });
  }
  $scope.createcustomer = function() {
    customerFactory.addCustomer($scope.new_customer, function(data) {
      $scope.new_customer={}
      $scope.index();
    })
  };
  $scope.removeCustomer = function(data){
    console.log('removeFriendfactory')
    customerFactory.removeCustomer(data, function(){
      $scope.index();
    })
  }
  $scope.index();
})
myapp.controller('productsController', function($scope, customerFactory, productFactory){
	$scope.index = function(){
	    customerFactory.getCustomers(function (data) {
			$scope.customers = data;
	    });
	}
	$scope.product_index= function(){
		productFactory.getProducts(function(data){
			$scope.products = data;
		})
	}
	$scope.createproduct = function(){
		productFactory.addProduct($scope.new_product, function(data){
			$scope.new_product = {};
			$scope.product_index();
		})
	}
	$scope.removeProduct = function(data){
	    productFactory.removeProduct(data, function(){
	      $scope.product_index();
	    })
	  }
	$scope.show = function(){
		customerFactory.show(function(data){
			$scope.customers = data;
		})
	}
	$scope.associate = function(){
		info = {
			customer: $scope.customer, 
			product: $scope.product
		}
		productFactory.associate(info, function(){
			$scope.show();
			$scope.product_index()
		})
	}
	$scope.product_index();
	$scope.show();
})