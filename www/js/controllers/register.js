angular.module('register.controllers', [])

.controller('registerCtrl', function ($scope, $state,$rootScope) {
    $rootScope.location = false;
    $scope.user = { fname: "", lname: '', email: '', pass: '', country: '' };
})