angular.module('app')
.controller('CatalogController', function($scope, $http, $location, catalog, cart) {
  // Initialization
  $scope.catalog = catalog.getCatalog()

  // Navigation -- Should this really be in the catalog controller?
  $scope.goToCart = function () {
    console.log('going to cart');
    $location.path('/bag')
  }

  $scope.filterByName = function(searchTerm) {
    return function(item) {
      if (!searchTerm) {
        return true
      } else {
        return item.name.toLowerCase() === searchTerm.toLowerCase()
      }
    }
  }

  $scope.filterByCategory = function(searchTerm) {
    return function(item) {
      if (!searchTerm || item.categories.indexOf(searchTerm) + 1) {
        return true
      }
    }
  }

  $scope.categoryMasterList = function() {
    var categoryMasterList = []
    $scope.catalog.forEach(function(item, index, array) {
      item.categories.forEach(function(category, index, array) {
        if (!(categoryMasterList.indexOf(category) + 1)) {
          categoryMasterList.push(category)
        }
      })
    })
    return categoryMasterList
  }()

  $scope.itemCount = cart.countItems()

  // Handle add item to cart
  $scope.addItem = cart.addItem
})
