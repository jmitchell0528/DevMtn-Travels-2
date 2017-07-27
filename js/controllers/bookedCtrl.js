angular.module('devmtnTravel').controller('bookedCtrl', function($scope, mainSrv, $stateParams)  {

  $scope.package = mainSrv.getPackageById($stateParams.id)
  console.log(typeof $stateParams.id)
})
