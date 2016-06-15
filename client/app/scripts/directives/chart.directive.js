'use strict';

var chartDirective = function() {
  return {
    restrict: 'E',
    replace: true,
    template: '<div></div>',
    scope: {
      config: '='
    },
    link: function(scope, element, attrs) {
      var chart;
      var process = function() {
        Highcharts.chart(element[0], scope.config);
      };
      process();
      scope.$watch("config.loading", function(loading) {
        if (!chart) {
          return;
        }
        if (loading) {
          chart.showLoading();
        } else {
          chart.hideLoading();
        }
      }, true);
    }
  };
};

myApp.directive('chart', chartDirective);