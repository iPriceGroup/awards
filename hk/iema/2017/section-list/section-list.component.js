var open = false;
a.
  component('sectionList', {
    templateUrl: 'section-list/section-list.template.html',
    controller: function sectionListController( $scope, $http, $location, $window, $sce) {
      $http({
      	method: "GET",
      	url: "data/section.data.json"
      }).then(function mySuccess(response){

          $scope.testtext = "<strong>this is html</strong>";
      	  $scope.sections = response.data;
          $scope.trustAsHtml = function(html) {
            return $sce.trustAsHtml(html);
          }
          $window.onload = function(){

              var deadline = new Date("2018/01/31");
                function updateClock(){
                    var today = Date();
                    var diff = Date.parse(deadline) - Date.parse(today);
                    if(diff<=0){
                        clearInterval(interval);
                    }
                    else{
                        var seconds = Math.floor((diff/1000)%60);
                        var minutes = Math.floor((diff/1000/60)%60);
                        var hours = Math.floor((diff/1000/60/60)%24);
                        var days = Math.floor(diff/(1000*60*60*24)%30.5);
                        var months = Math.floor(diff/(1000*60*60*24*30.5)%12);
                        $(".months").text(('0'+months).slice(-2));
                        $(".days").text(('0'+days).slice(-2));
                        $(".hours").text(('0'+hours).slice(-2));
                        $(".minutes").text(('0'+minutes).slice(-2));
                        // $(".seconds").text(('0'+seconds).slice(-2));
                    }//EOF ELSE
                }//EOF FUNCTION
                var interval = setInterval(updateClock,1000);

                $('.more-button').on('click', function(){
                  
                  if( ! open ){
                    $('.more-content').removeClass('hidden');
                    $(this).html('Read Less');
                    open= true;
                  }else{
                    $('.more-content').addClass('hidden');
                    $(this).html('Read More');
                    open= false;
                  }
                  
                });
          };
      });
    }
  });
