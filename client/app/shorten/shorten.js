angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {};
  $scope.url;
  $scope.addLink = function(){
    Links.shortenLink($scope.url)
      .then(function (createdLink) {
        $scope.link = createdLink;
      })
      .catch(function (error) {
        console.error(error);
      });
  };
});
