'use strict';

myApp.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
      .state('about', {
      url: '/about',
      templateUrl: 'views/about.html',
      controller: 'AboutCtrl'
    })
    .state('contact', {
      url: '/contact',
      templateUrl: 'views/contact.html',
      controller: 'ContactCtrl'
    })
    .state('dashboard', {
      url: '/dashboard',
      views: {
        '': {
          templateUrl: 'views/dashboard.html',
          controller: 'DashboardCtrl'
        },
        'temperature@dashboard': {
          templateUrl: 'views/temperature.html',
          controller: 'TemperatureCtrl'
        },
        'humidity@dashboard': {
          templateUrl: 'views/humidity.html',
          controller: 'HumidityCtrl'
        }
      }
    });

  $urlRouterProvider.otherwise('/dashboard');

});