angular.module('home.controllers', [])

.controller('homeCtrl', function ($scope, $state, $rootScope, $ionicNavBarDelegate) {
   
    $rootScope.location = true;
    $scope.details = 'nodetail';
    $ionicNavBarDelegate.showBackButton(false);
})