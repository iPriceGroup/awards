a.component('menuList', {
    templateUrl: 'menu-list/menu-list.template.html',
    controller: function menuListController( $scope, $http, $document) {
      $http({
      	method: "GET",
      	url: "data/data.json"
      }).then(function mySuccess(response){
      	 $scope.menus = response.data.menus;

         $scope.scroll = function( _target ){

                var $target = $(_target );
                  if ($target.length) {
                   $('html,body').animate({
                       scrollTop: $target.offset().top - 120
                  }, 1000);
                  return false;
              }
         }
      });
    }
  });
