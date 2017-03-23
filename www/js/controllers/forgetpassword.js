angular.module('forgetpassword.controllers', [])

.controller('forgetpasswordCtrl', function ($scope, $state,$rootScope) {
    $rootScope.location = false;
    $scope.user = { email: '' };
})