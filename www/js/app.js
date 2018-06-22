// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var myApp = angular.module('starter', ['ionic', 'ui.router', 'starter.controllers', 'starter.routes'])

  .run(function ($ionicPlatform, $rootScope) {

    $ionicPlatform.ready(function () {

      // $rootScope.notificationCount = null;

      // if(window.cordova && window.cordova.plugins.Keyboard) {
      //   // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      //   // for form inputs)
      //   cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      //   // Don't remove this line unless you know what you are doing. It stops the viewport
      //   // from snapping when text inputs are focused. Ionic handles this internally for
      //   // a much nicer keyboard experience.
      //   cordova.plugins.Keyboard.disableScroll(true);
      // }
      // if(window.StatusBar) {
      //   StatusBar.styleDefault();
      // }


      const push = PushNotification.init({
        android: {
        },
        ios: {
          alert: "true",
          badge: true,
          sound: 'false'
        },
        windows: {}
      });

      push.getNotificationCount((data) => {
        console.log("Notification Count: " + data);
        $rootScope.$broadcast('notification', { "count": data });
      }, () => { });

      push.on('registration', (data) => {
        console.log(data.registrationId);
      });

      push.on('notification', (data) => {
        console.log(data.message);
        console.log(data.title);
        console.log(data.count);
        console.log(data.sound);
        console.log(data.image);
        console.log(data.additionalData);

        push.getNotificationCount((data) => {
          console.log("Notification Count: " + data);
          $rootScope.$broadcast('notification', { "count": data });
        }, () => { });

      });

      push.on('error', (e) => {
        console.log(e.message);
      });


      $rootScope.$on("clearnotification", function (event, data) {
        push.clearNotificationCount((data) => {
          console.log("Notification Count: " + data);
          $rootScope.$broadcast('notification', { "count": 0 });
        }, () => { });
      });

      $rootScope.$on("getnotificationcount", function (event, data) {
        push.getNotificationCount((data) => {
          console.log("Notification Count: " + data);
          $rootScope.$broadcast('notification', { "count": data });
        }, () => { });
      });

      document.addEventListener("resume", function (event) {
        // will execute when device resume.
        console.log("onResume");
        push.getNotificationCount((data) => {
          console.log("Notification Count: " + data);
          $rootScope.$broadcast('notification', { "count": data });
        }, () => { });
      }, false);

    });
    
  })
