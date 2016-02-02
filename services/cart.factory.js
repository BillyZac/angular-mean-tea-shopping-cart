angular
  .module('app')
  .factory('cart', cart)

function cart() {
  var cartContents = []

  function getItems() {
    console.log('Cart | cart factory | getItems(): ', cartContents);
    return cartContents
  }

  function addItem(object, quantity) {
    // If user did not select a quantity, assume they want 1
    quantity = quantity || 1
    // If item is not found, set the quantity to quantity
    if (indexOfObjectInArray(object, cartContents) != 'not found') {
      cartContents[indexOfObjectInArray(object, cartContents)].quantity
      = cartContents[indexOfObjectInArray(object, cartContents)].quantity + quantity
    }
    // If it is found, increment the cartContents by quantity
    else {
      cartContents.push(object)
      cartContents[indexOfObjectInArray(object, cartContents)].quantity = quantity
    }
    console.log('Cart | cart factory | addItem(): ', cartContents);
  }

  function indexOfObjectInArray(object, array) {
    for (var i=0; i<array.length; i++) {
      if (array[i]['_id'] === object['_id']) {
        return i
      }
    }
    return 'not found'
  }

  function getTotal() {
    return cartContents.reduce(function(previousValue, currentValue, currentIndex, array) {
      console.log('price from within getTotal: ', array[currentIndex].price);
      return previousValue + array[currentIndex].price * array[currentIndex].quantity
    }, 0)
  }

  function removeItem(item) {
    var index = indexOfObjectInArray(item, cartContents)
    if (index != 'not found') {
      cartContents.splice(index, 1)
    }
  }

  function countItems() {
    return cartContents.reduce(function(previousValue, currentValue, currentIndex, array) {
      return previousValue + 1
    }, 0)
  }

  return {
    getItems: getItems,
    addItem: addItem,
    getTotal: getTotal,
    removeItem: removeItem,
    countItems: countItems
  }
}
