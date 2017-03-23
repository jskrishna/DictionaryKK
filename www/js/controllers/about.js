angular.module('about.controllers', [])

.controller('aboutCtrl', function ($scope, $state, $ionicNavBarDelegate) {
    $ionicNavBarDelegate.showBackButton(true);
})