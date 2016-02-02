angular
  .module('app')
  .controller('HeaderController', HeaderController)

function HeaderController($scope, $location) {
  $scope.goToMain = function () {
    $location.path('/main')
  }
}
