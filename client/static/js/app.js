var myapp = angular.module('myapp', ["ngRoute", "ngMessages"]);

myapp.config(function($routeProvider){
	
	$routeProvider
	.when("/dashboard", {
		templateUrl: "./static/partials/dashboard.html",
		controller: "productsController"
	})
	.when("/customers", {
		templateUrl: "./static/partials/customers.html",
		controller: 'customersController'
	})
	.when('/orders', {
		templateUrl: "./static/partials/orders.html",
		controller: "productsController"
	})
	.when('/productlist', {
		templateUrl: "./static/partials/products.html",
		controller: "productsController"
	})
})