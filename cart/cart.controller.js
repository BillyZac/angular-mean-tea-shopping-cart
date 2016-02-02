angular
  .module('app')
  .controller('CartController', CartController)

function CartController($scope, cart) {
  $scope.cart = cart.getItems()
  $scope.total = cart.getTotal()
  $scope.editItem = editItem
  $scope.removeItem = cart.removeItem
  $scope.toggleEdit = false
  $scope.editButtonText = 'Edit'
  // console.log('Cart - inside CartController: ', $scope.cart)
  // console.log('Subtotal - inside CartController: ', $scope.total)

  function editItem(item, newQuantity) {
    console.log('newQuantity', newQuantity)
    $scope.toggleEdit = !$scope.toggleEdit
    if ($scope.toggleEdit) {
      $scope.editButtonText = 'Save'
    } else {
      $scope.editButtonText = 'Edit'
    }
    item.quantity = newQuantity
    console.log('Edit item not yet implemented.')
  }
}
