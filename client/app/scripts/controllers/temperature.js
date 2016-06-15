'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:DashboardCtrl
 * @description
 * # DashboardCtrl
 * Controller of the clientApp
 */
myApp.controller('TemperatureCtrl', function($scope, $state, chartService, dataService) {

  $scope.temperatureChartConfig = chartService.TemperatureChart;

});