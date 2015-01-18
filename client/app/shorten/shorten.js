angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links, Auth) {
  // Your code here
  $scope.link = {};
  $scope.url;
  $scope.invalid;
  $scope.addLink = function(isValid){
    if(isValid) {
    Links.shortenLink($scope.url)
      .then(function (createdLink) {
        $scope.link = createdLink;
      })
      .catch(function (error) {
        console.error(error);
      });
      $scope.invalid = "";
    } else {
      console.log('hi');
      $scope.invalid = "Invalid!";
    }
  };
  $scope.logout = Auth.signout;
});
