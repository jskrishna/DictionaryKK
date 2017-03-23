angular.module('website.controllers', [])

.controller('websiteCtrl', function ($scope, $state,$ionicNavBarDelegate) {
    $ionicNavBarDelegate.showBackButton(true);
})