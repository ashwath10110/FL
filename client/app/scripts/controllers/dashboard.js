'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:DashboardCtrl
 * @description
 * # DashboardCtrl
 * Controller of the clientApp
 */
myApp.controller('DashboardCtrl', function($scope, $state, chartService, dataService) {

  $scope.temperatureChartConfig = chartService.TemperatureChart;

});