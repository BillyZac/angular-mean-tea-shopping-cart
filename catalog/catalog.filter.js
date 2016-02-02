angular.module('app')
.filter('yesno', function() {
  return function(input) {
    if (input) {
      return 'Yes'
    } else {
      return 'No'
    }
  }
})
