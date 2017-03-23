angular.module('thesaurus.controllers', [])

.controller('thesaurusCtrl', function ($scope, $state, $ionicNavBarDelegate) {
    $ionicNavBarDelegate.showBackButton(true);
})