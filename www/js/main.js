angular.module('starter.controllers', ['ionic','ui.router'])
.controller('homeController', function($scope, $ionicPlatform){

    $scope.notificationCount= {"count":0};

    $scope.clearNotifications = function(){
        $scope.$emit("clearnotification");
    };

    // $scope.initialize = function(){
    //     $scope.$emit("getnotificationcount");
    // };


    $scope.$on('notification', function (event, data) {
        //do something with new value 'data'
        console.log("home count function: "+data.count);
        $scope.notificationCount= data;
        $scope.$apply();
    });




});
