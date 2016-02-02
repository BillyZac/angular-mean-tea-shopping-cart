angular
  .module('app')
  .config(function($routeProvider) {
    $routeProvider
      .when('/main', {
        templateUrl: 'catalog/catalog.html'
      })
      .when('/bag', {
        templateUrl: '/cart/cart.html'
      })
      .otherwise({redirectTo: '/main'})
  })
