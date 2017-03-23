angular.module('main.controllers', [])

.controller('mainCtrl', function ($scope, $state, $rootScope) {
   
    $rootScope.location = true;
    $rootScope.val = 'active5';
    $scope.goBack = function () {
        $state.go('home');
       // $scope.val = '123';
    }
})