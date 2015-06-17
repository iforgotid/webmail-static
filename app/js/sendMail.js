
angular.element(document).ready(function() {
  angular.module('sendMail', []);
  var sendMail = angular.module('sendMail');
  angular.bootstrap(document, ['sendMail']);
});

function sendMailCtrl($scope) {
  $('#textarea').wysihtml5();

  $scope.show = function(){
    alert('show');
  }
  $scope.data = '1234';
}
