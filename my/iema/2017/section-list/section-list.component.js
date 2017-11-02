var open_collapse = false;
a.
  component('sectionList', {
    templateUrl: 'section-list/section-list.template.html',
    controller: function sectionListController( $scope, $http, $location, $window, $sce, $routeParams) {
      
      $http({
        method: "GET",
        url: "data/" + data_section 
      }).then(function mySuccess(response){

          $scope.testtext = "<strong>this is html</strong>";
          $scope.sections = response.data;
          $scope.trustAsHtml = function(html) {
            return $sce.trustAsHtml(html);
          }
          $window.onload = function(){

              var deadline = new Date("2017/11/15");
                function getQueryString() {
                    var search = location.search;
                    if (search !== "") {
                        return search.substr(1).split('&').reduce(function (acc, curr) {
                            var kv = curr.split('=');
                            acc[kv[0]] = kv[1];
                            return acc;
                        }, {});
                    } else {
                        return "";
                    }
                }

                var arr = getQueryString();

                if (arr !== "") {
                    // Show custom iframe with indivdual store ratings
                    $('.tc-search').css('display', 'none');
                    $('#review_form').prop("action", "https://trustedcompany.com/profile/" + arr.mid + "/review");
                    $('#m-logo').text("" + arr.mname);
                } else {
                    $(".stars").css('display', 'none');
                }

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
                        var days = Math.floor(diff/(1000*60*60*24));
                        var months = Math.floor(diff/(1000*60*60*24*30.5)%12);
                        // $(".months").text(('0'+months).slice(-2));
                        $(".days").text(('0'+days).slice(-2));
                        $(".hours").text(('0'+hours).slice(-2));
                        $(".minutes").text(('0'+minutes).slice(-2));
                        $(".seconds").text(('0'+seconds).slice(-2));
                    }//EOF ELSE
                }//EOF FUNCTION
                var interval = setInterval(updateClock,1000);

                $('.more-button').on('click', function(){
                  
                  if( ! open_collapse ){
                    $('.more-content').removeClass('hidden');
                    $(this).html('Read Less');
                    open_collapse= true;
                  }else{
                    $('.more-content').addClass('hidden');
                    $(this).html('Read More');
                    open_collapse= false;
                  }
                  
                });

                $('.form-btn').on('click', function(){
                  var submit = true;
                  var mname = '', mwebsite='', memail='', mreason='';
                  $('.form-control').each(function(){
                    if( $(this).val() == ''){
                      $(this).css('border', '1px solid #e74c3c');
                      submit = false;
                    }else{
                      $(this).css('border', 'none');
                      $(this).css('border-bottom', '1px solid #efefef');
                    }
                  });

                  if( submit ){
                    mname    = $('.merchant-name').val();
                    mwebsite = $('.merchant-website').val();
                    memail   = $('.email-address').val();
                    mreason  = $('.merchant-story').html();

                    emailjs.send("mailjet","iema_email_template",{name: mname, website: mwebsite, email: memail, reason: mreason})
                    .then(function(response) {
                      $('form :input').val('');
                      $('.merchant-story').html('');
                       console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
                       alert('Thanks for your submission');
                    }, function(err) {
                       console.log("FAILED. error=", err);
                    });;

                  }
                });
                
                $('.rating label').mouseover(function(e){
                  var title = $(e.currentTarget).attr('title');
                  $('.star-tooltip').html(title);
                });

                $('.rating label').mouseout(function(e){
                  var title = 'Roll over stars, then click to rate';
                  $('.star-tooltip').html(title);
                });

                $('.rating label').on('click', function(e){
                  var rating = $(e.currentTarget).attr('data-rating');
                  
                  var action = $('#review_form').attr('action');

                  
                  $('#review_form').attr('action', action+'?rating='+rating);
                  $('#review_form').submit();

                });
                $('.moveTo').on('click', function(e){
                    var target = $(e.currentTarget).attr('data-attr');

                    var $target = $( target );
                    if ($target.length) {
                      $('html,body').animate({
                             scrollTop: $target.offset().top - 120
                        }, 1000);
                        return false;
                    }
                });

                $('.nav-item').on('click', function(){
                  $('.navbar-collapse').collapse('hide');
                });

                (function(d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) return;
                js = d.createElement(s); js.id = id;
                 js.src = "https://trustedcompany.com/statics/javascripts/plugins.js";
                  fjs.parentNode.insertBefore(js, fjs);
              }(document, 'script', 'tc-plugins'));
                $()

          };
      });
    }
  });
