angular.module('account.controllers', [])

.controller('accountCtrl', function ($scope, $state, $ionicNavBarDelegate) {
    $ionicNavBarDelegate.showBackButton(true);
    $scope.user = { fname: 'Irshad', lname: 'Gouri', email: 'Gouri@mail.com',pass:'asdfadsfasdf',country:'Canada' }
    $scope.goToLogin = function () {
       
        $state.go('login');
    }
})