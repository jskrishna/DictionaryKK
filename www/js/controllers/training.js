angular.module('training.controllers', [])

.controller('trainingCtrl', function ($scope, $state, $rootScope) {
    //  $rootScope.val = 'ior';
    $rootScope.location = true;
    $rootScope.training = true;
    $rootScope.position = 'start-train';
    $rootScope.posText = "Hi, Sachin! <br><br> Welcome to <br> Little Wordsmiths :) <br><br> Here’s a quick guide to <br> get you started.<br>";
    $rootScope.navTrain = 2;
    document.getElementsByClassName('ng-abcd')[0].style.zIndex = '10';
})