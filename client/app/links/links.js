angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  $scope.data = {};
  // $scope.x = "hi";
  $scope.getLinks = function(){
    Links.getLinks()
      .then(function (data) {
        $scope.data.links = data;
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  $scope.getLinks();

});
