// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('DICTIONARY', ['ionic', 'main.controllers','ngAnimate', 'setting.controllers', 'about.controllers',
    'website.controllers', 'store.controllers', 'thesaurus.controllers',
    'account.controllers', 'login.controllers','training.controllers','forgetpassword.controllers', 'register.controllers','home.controllers'])

.run(function ($ionicPlatform) {

  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
}).config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
    $ionicConfigProvider.tabs.position('bottom'); $ionicConfigProvider.navBar.alignTitle('center');
    $ionicConfigProvider.form.checkbox('square'); $ionicConfigProvider.views.maxCache(0);
    $ionicConfigProvider.views.transition('none');
 
    $stateProvider

   // setup an abstract state for the tabs directive
   //.state('tabs', {
   //    url: '/tabs',
   //    abstract: true,
   //    templateUrl: 'templates/tabs.html',
   //    controller: 'tabsCtrl'
   //})
        .state('setting', {
       url: '/setting',
      
               templateUrl: 'templates/setting.html',
               controller: 'settingCtrl',
           
   }).state('about', {
       url: '/about',
      
               templateUrl: 'templates/about.html',
               controller: 'aboutCtrl',
       
   }).state('home', {
       url: '/home',
      
               templateUrl: 'templates/home.html',
               controller: 'homeCtrl',
          
   }).state('website', {
       url: '/website',
     
               templateUrl: 'templates/website.html',
               controller: 'websiteCtrl',
       
   }).state('store', {
       url: '/store',
     
               templateUrl: 'templates/store.html',
               controller: 'storeCtrl',
        
   }).state('thesaurus', {
       url: '/thesaurus',
      
               templateUrl: 'templates/thesaurus.html',
               controller: 'thesaurusCtrl',
          
   }).state('account', {
       url: '/account',
      
               templateUrl: 'templates/account.html',
               controller: 'accountCtrl',
          
   }).state('login', {
       url: '/login',
       templateUrl: 'templates/login.html',
      controller:'loginCtrl'
       

   }).state('forgetpassword', {
       url: '/forgetpassword',
       templateUrl: 'templates/forgetpassword.html',
       controller: 'forgetpasswordCtrl'

   }).state('register', {
       url: '/register',
     controller:'registerCtrl',
       templateUrl: 'templates/register.html',
             
         

   }).state('training1', {
       url: '/training1',

       templateUrl: 'views/training1.html',
       controller: 'trainingCtrl'


   }).state('training2', {
       url: '/training2',

       templateUrl: 'views/training2.html',



   }).state('training3', {
       url: '/training3',

       templateUrl: 'views/training3.html',



   }).state('training4', {
       url: '/training4',

       templateUrl: 'views/training4.html',



   }).state('training5', {
       url: '/training5',

       templateUrl: 'views/training5.html',



   }).state('training6', {
       url: '/training6',

       templateUrl: 'views/training6.html',



   }).state('training7', {
       url: '/training7',

       templateUrl: 'views/training7.html',



   }).state('training8', {
       url: '/training8',

       templateUrl: 'views/training8.html',



   }).state('training9', {
       url: '/training9',

       templateUrl: 'views/training9.html',



   }).state('training10', {
       url: '/training10',

       templateUrl: 'views/training10.html',



   })

   // Each tab has its own nav history stack:
  //.state('nav.tabs.tasklist', {
  //    url: '/tasklist12',
  //    views: {
  //        'tasklist-tab': {
  //            templateUrl: 'templates/tasklist.html',
  //            controller: 'tasklistCtrl',
  //        },
      
  //         //'tasklist-tab': {
  //         //    templateUrl: 'templates/tasklist.html',
  //         //    controller: 'listCtrl'
  //         //},
  //         //'chat-tab': {
  //         //    templateUrl: 'templates/chat.html',
  //         //    controller: 'chatCtrl'
  //         //},
  //         //'notification-tab': {
  //         //    templateUrl: 'templates/notification.html',
  //         //    controller: 'notificationCtrl'
  //         //}, 'earth-tab': {
  //         //    templateUrl: 'templates/earth.html',
  //         //    controller: 'earthCtrl'
  //         //},
  //     },
      
  // })
  

    $urlRouterProvider.otherwise('/login');

})
