angular.module('home.controllers', [])

.controller('homeCtrl', function ($scope, $state, $rootScope, $ionicNavBarDelegate) {
   
    $rootScope.location = true;
    $scope.details = 'nodetail';
    $rootScope.val = 'active5';
    $scope.detailsVar = function (val) {
       // alert(val)
        $scope.details = val;
    }
    $ionicNavBarDelegate.showBackButton(false);
})