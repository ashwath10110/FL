'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clientApp
 */
myApp.controller('MainCtrl', function($scope, $state) {

  $scope.tab = 0;

  $scope.setTab = function(tabId) {
    $scope.tab = tabId;
  };

  $scope.isSet = function(tabId) {
    return $scope.tab === tabId;
  };

});