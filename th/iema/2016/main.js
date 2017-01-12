/**
 * Created by yazan on 1/12/17.
 */

//scroll to top button
$( document ).ready(function() {
    $('.go-top').click(function() {
        $('body,html').animate({
            scrollTop: 0
        }, 'slow');
        return false;
    });
});

//smooth scroll animated
var nav = $('#header')
nav.find('a').on('click', function () {
    var $el = $(this)
        , id = $el.attr('href');

    $('html, body').animate({
        scrollTop: $(id).offset().top
    }, 500);

    return false;
});

//fixed sticky navigation menu once start scroll
$(document).ready(function() {

    $(window).bind('scroll', function() {

        if($(window).scrollTop() > 171){

            $('.nav-menu, .go-top').addClass('fixed');
            $('#main-container > #header > .nav-menu > .wrapper > .go-top').addClass('show');


        }else{

            $('.nav-menu, .go-top').removeClass('fixed');
            $('#main-container > #header > .nav-menu > .wrapper > .go-top').removeClass('show');
        }
    });

    $(window).bind('scroll', function(event) {
        if ($(window).scrollTop() > 240){
            $('.side-content').addClass('positioning');

        }else{
            $('.side-content').removeClass('positioning');
        }

        if ($(window).scrollTop() > 1600){
            $('.side-content').addClass('static');
            $('.side-content').removeClass('positioning');

        }else{
            $('.side-content').removeClass('static');
        }

        if (window.matchMedia("(max-width: 1035px)").matches) {
            $('.side-content').removeClass('positioning');
            $('.side-content').removeClass('static');
            $('.side-content').addClass('relative');
        }else {

        }
    });
});