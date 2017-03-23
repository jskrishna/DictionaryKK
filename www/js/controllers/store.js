angular.module('store.controllers', [])

.controller('storeCtrl', function ($scope, $state, $ionicNavBarDelegate) {
    $ionicNavBarDelegate.showBackButton(true);
})