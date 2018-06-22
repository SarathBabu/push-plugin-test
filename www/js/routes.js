angular.module('starter.routes', ['ionic', 'ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'templates/home.html',
                controller: 'homeController'
            });

        $urlRouterProvider.otherwise("/home");
    });