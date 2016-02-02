angular.module('app')
.directive('catalog', catalog)

function catalog() {
  return {
    templateUrl: '/catalog/catalog.template.html'
  }
}
