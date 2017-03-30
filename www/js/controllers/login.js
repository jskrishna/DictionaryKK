angular.module('login.controllers', [])

.controller('loginCtrl', function ($scope, $state, $rootScope) {
    //  $rootScope.val = 'ior';
    // $rootScope.val = 'novalueset';
   // alert();
    $scope.user = { email: '', pass: '' };

    $scope.signIn = function () {

        if (localStorage.getItem('training') == undefined || localStorage.getItem('training') == null) {
            //  alert('train unde')
            $state.go('training1');
        }
        else {
            //alert('train def')
            $state.go('home');
        }
    }

    $scope.clearField = function () {
       
        $scope.user[property] = '';
    }
    $rootScope.location = false;
})