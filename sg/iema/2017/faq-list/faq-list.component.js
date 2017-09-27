a.component('faqList', {
    templateUrl: 'faq-list/faq-list.template.html',
    controller: function faqController( $scope, $http ) {
      $http({
      	method: "GET",
      	url: "data/data.json"
      }).then(function mySuccess(response){
      	 $scope.faq = response.data.faq;
         
         $scope.collapse = function($event){
          $($event.currentTarget).next('.collapse-content').slideToggle(500);

         }
      });
    }
  });
