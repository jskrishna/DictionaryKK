angular.module('login.controllers', [])

.controller('loginCtrl', function ($scope, $state, $rootScope) {
    //  $rootScope.val = 'ior';
    // $rootScope.val = 'novalueset';
   // alert();
    $scope.user = { email: '', pass: '' };
    $scope.clearField = function () {
        alert();
        $scope.user[property] = '';
    }
    $rootScope.location = false;
})