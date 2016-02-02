angular
  .module('app')
  .directive('item', item)

function item() {
  return {
    templateUrl: '/item/item.template.html'
  }
}
