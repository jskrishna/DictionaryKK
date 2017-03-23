angular.module('setting.controllers', [])

.controller('settingCtrl', function ($scope, $state, $ionicNavBarDelegate) {
    $ionicNavBarDelegate.showBackButton(true);
})