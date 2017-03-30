angular.module('main.controllers', [])

.controller('mainCtrl', function ($scope, $state, $rootScope) {
   
   
    $rootScope.val = 'active9';
    if (localStorage.getItem('training') == undefined || localStorage.getItem('training') == null) {
       
        $rootScope.location = true;
        $rootScope.training = true;
        $rootScope.position = 'start-train';
        $rootScope.posText = "Hi, Sachin! <br><br> Welcome to <br> Little Wordsmiths :) <br><br> Here’s a quick guide to <br>get you started.<br>";
        $rootScope.navTrain = 2;
        document.getElementsByClassName('ng-abcd')[0].style.zIndex = '10';
    }
    else {
        //   alert('train');
        $rootScope.val = 'active5';
        $rootScope.location = false;
        localStorage.setItem('training', 'seen');
    }
   // $rootScope.training=false;
    $scope.goBack = function () {
        $state.go('home');
       // $scope.val = '123';
    }
   
   

    // $rootScope.val = 'novalueset';
    // alert();
    
  






    $rootScope.goToTrain = function () {
        var location = 'training' + $rootScope.navTrain;
        if (location == 'training1') {
           // alert(location);
            $rootScope.position = 'topPos';
            $rootScope.posText = "Use this<br>when you want to search words by letter. ";
            $rootScope.navTrain = $rootScope.navTrain + 1;
        }
        // alert('contro' + substrLoc);
       
        if (location == 'training2') {
           // alert(location);
            $scope.position = 'topPos';
            $scope.posText = "Use this<br>when you want to search words by letter.";
            document.getElementsByClassName('ng-abcd')[0].style.zIndex = '999';
            $rootScope.navTrain = $rootScope.navTrain + 1;
        }
        if (location == 'training3') {
            $scope.position = 'topPosbottom1';
            document.getElementsByClassName('ng-abcd')[0].style.zIndex = '10';
            document.getElementsByClassName('cusFooter')[0].style.zIndex = '999';
             $scope.posText = "Use this when<br> you want to search <br>for just a word.";
            $rootScope.navTrain = $rootScope.navTrain + 1;

        }
        if (location == 'training4') {
          //  alert(location);
            $scope.position = 'topPosbottom1-think';
            
            $scope.posText = "Let Little Wordsmiths pick<br> a new word for you to learn.";
            $rootScope.navTrain = $rootScope.navTrain + 1;
        }
        if (location == 'training5') {
            // alert(substrLoc);
            $scope.position = 'topPosbottom2';
            $rootScope.val = 'active5';
            $scope.posText = "This is our<br><span style='color:#62caf1'> Dictionary & Thesaurus</span>.<br> Where all the words are :)";
            $rootScope.navTrain = $rootScope.navTrain + 1;
        }
        else if (location == 'training6') {
            $scope.position = 'topPosbottom2-web';
            $rootScope.val = 'active3';
            $scope.posText = "This will open<br> our Website .<br> That’s right!<br> Little Wordsmiths<br> is not just an app :)";
            $rootScope.navTrain = $rootScope.navTrain + 1;
        }
        else if (location == 'training7') {
            $scope.position = 'topPosbottom2-bag';
            $rootScope.val = 'active4';
            $scope.posText = "This is our Store.<br> Where you get all the cool<br> Little Wordsmiths stuff<br> like the hard-copy version<br> of our<br> Dictionary & Thesaurus ";
            $rootScope.navTrain = $rootScope.navTrain + 1;
        }
        else if (location == 'training8') {
            $scope.position = 'topPosbottom1-choclate';
            $rootScope.val = 'active2';
            $scope.posText = "This is our<br> About section.<br> Where you can find<br> the latest news and<br>  updates about<br> Little Wordsmiths.";
            $rootScope.navTrain = $rootScope.navTrain + 1;
        }
        else if (location == 'training9') {
            $scope.position = 'topPosbottom1-setting';
            $rootScope.val = 'active1';
            $scope.posText = "This is your <span style='color:#62caf1'>Settings</span> .<br> Stuff like getting <br>notified when a new<br> word is added";
            $rootScope.navTrain = $rootScope.navTrain + 1;
        }
        else if (location == 'training10') {
            $scope.position = 'topPosbottom1-account';
            $rootScope.val = 'active6';
            $scope.posText = "This is your<br><span style='color:#62caf1'> Account</span>  section.";
            $rootScope.navTrain = $rootScope.navTrain + 1;
           // localStorage.setItem('training', 'seen');
           // $state.go('login');
        }
        else if (location == 'training11') {
			
            $scope.position = 'topPosbottom1-back';
            $rootScope.val = 'active11';
            $scope.posText = "Tapping on the logo<br> will bring you back to<br> the homescreen";
            $rootScope.navTrain = $rootScope.navTrain + 1;
            localStorage.setItem('training', 'seen');
          
        }
        else if (location == 'training12') {
             $rootScope.val = 'active5';
             $rootScope.location = false;
             $rootScope.training = false;
        localStorage.setItem('training', 'seen');
            $state.go('login');
        }
        //$state.go('training1');
    }
})