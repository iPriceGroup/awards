/** Created by yazan on 1/12/17. **/


/** Blogging Competition **/

//scroll to top button
$(document).ready(function () {
    $('.go-top').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 'slow');
        return false;
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

    //expand accordion once button clicked to show more details
    $('.clicked').click(function () {
        $(this).next('.mr-details').slideToggle("fast");
    });

    //tag navigation buttons with belong sections
    var nav = $('#header')
        , nav_height = nav.outerHeight();

    $(window).on('scroll', function () {
        var cur_pos = $(this).scrollTop();

        $("#content > section").each(function () {
            var top = $(this).offset().top - nav_height,
                bottom = top + $(this).outerHeight();

            if (cur_pos >= top && cur_pos <= bottom) {

                nav.find('a').removeClass('active');

                $("#content > section").removeClass('active');

                nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
            }
        });
    });

    //fixed sticky navigation menu once start scroll

    var quart = 171;
    /* the browser height calculation 171 in pixel start from the top */
    var calc = 158;
    /* the browser height calculation 240 in pixel start from the top */
    var half = 2000;
    /* the browser height calculation 1800 in pixel start from the top */

    $(window).bind('scroll', function () {

        if ($(window).scrollTop() > quart) {

            $('.nav-menu, .go-top').addClass('fixed');
            $('#main-container > #header > .nav-menu > .wrapper > .go-top').addClass('show');

        } else {

            $('.nav-menu, .go-top').removeClass('fixed');
            $('#main-container > #header > .nav-menu > .wrapper > .go-top').removeClass('show');
        }
    });

    // fixed sticky form
    $(window).bind('scroll', function () {
        if ($(window).scrollTop() > calc) {
            $('.side-box').addClass('positioning');

        } else {
            $('.side-box').removeClass('positioning');
        }

        if ($(window).scrollTop() > half) {
            $('.side-box').addClass('static');
            $('.side-box').removeClass('positioning');

        } else {
            $('.side-box').removeClass('static');
        }

        if (window.matchMedia("(max-width: 1035px)").matches) {
            $('.side-box').removeClass('positioning');
            $('.side-box').removeClass('static');
            $('.side-box').addClass('relative');
        }
    });

//read more and read less button trigger
    $('.read-more > a').click(function () {
        var that = $(this);
        $('.hidden, .cover').slideToggle(function () {
            if ($('.hidden').is(':visible')) {
                that.find('p').text('Read Less')
            } else {
                that.find('p').text('Read More')
            }
        });
    });

 // photos event
    if($('.iema-page').length > 0) {
        $('.row .thumbnail').each(function(i) {

            var item = $('<div class="item"></div>');
            var itemDiv = $(this).parents('div');
            var title = $(this).parent('a').attr("title");

            item.attr("title",title);
            $(itemDiv.html()).appendTo(item);
            item.appendTo('.carousel-inner'); 
            if (i==0){
                item.addClass('active');
                $('.modal-title').html(title);
            }
        });

        
        $('#modalCarousel').carousel({interval:false});

        $('#modalCarousel').on('slid.bs.carousel', function () {
            $('.modal-title').html($(this).find('.active').attr("title"));
        });

        $('.row .thumbnail').click(function(){
            var idx = $(this).parents('div').index();
            var id = parseInt(idx);
            $('#modal-gallery').modal('show');
            $('#modalCarousel').carousel(id);
        });
    }
});
