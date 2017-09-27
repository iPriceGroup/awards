a.component('footerSection', {
    templateUrl: 'footer-section/footer-section.template.html',
    controller: function footerController( $scope, $http ) {
      $http({
      	method: "GET",
      	url: "data/data.json"
      }).then(function mySuccess(response){
      	 $scope.footer = response.data.footer;
      });
    }
  });
