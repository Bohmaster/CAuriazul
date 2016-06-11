var myApp = angular.module('myApp');

myApp.config(function(RestangularProvider) {

  RestangularProvider.setFullResponse(true);

  RestangularProvider.addFullRequestInterceptor(
    function(element, operation, what, url, headers, params, httpConfig) {
      console.log(element, operation, what, url, headers, params, httpConfig);
    });
});
