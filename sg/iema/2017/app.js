
var prev= '';
var data = 'data.json';
var data_section = 'section.data.json';
var a = angular.module("myApp", ['ngSanitize', 'ngRoute']);

a.directive('mainContent', function() {
  return {
  	restrict: 'C',
    templateUrl: 'home.html'
  };
})
.directive('headerImage', function(){
	return{
		link : function( scope, element, attrs, tabsCtrl){
			
		}
	}
});
