
var prev= '';
var a = angular.module("myApp", ['ngSanitize', 'ngRoute']);

a.config(function($routeProvider, $locationProvider){
	$locationProvider.html5Mode(true);
	$routeProvider
	.otherwise({
		templateUrl : "home.html",
		controller : function($scope, $location, $routeParams){
			console.log($routeParams);
			$scope.$on('$viewContentLoaded', function(){
	          $('#main-menu').collapse('hide');
	        });
		}
	});

	
})
.directive('headerImage', function(){
	return{
		link : function( scope, element, attrs, tabsCtrl){
			
		}
	}
});
