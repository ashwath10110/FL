myApp.service("dataService", function($http) {

  var data = {
    name: 'Ashwath Bharadwaj',
    company: 'Pramati Technologies'
  };

  return {
    data: data
  };

});