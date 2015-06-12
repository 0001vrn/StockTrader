angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope,$http) {
  
  $scope.count=5;
  $http.get("http://193.34.144.236:107/api/country")
    .success(function(response) {$scope.names = response.records;})
	.error(function(response) {
                alert("ERROR: " + response);
            });
	
	$scope.plusone = function(){
	$scope.count+=1;
	};
	
	$scope.minusone = function(){
	if($scope.count>0)
	$scope.count-=1;
	else
	alert("Hold it there bru");
	};
	
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})

.controller('newsCtrl', function($scope,$http) {
 
   $http.get("//ajax.googleapis.com/ajax/services/feed/load?num=10&q=http://www.business-standard.com/rss/home_page_top_stories.rss&v=1.0")
  .success(function (response) {$scope.feeds = response.responseData.feed.entries;})
  .error(function(response) {
                alert("ERROR: " + response);
            });

  $scope.browse = function(v) {
    window.open(v, "_system", "location=yes");
}
});

