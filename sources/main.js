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

    var quart = heightScrollTop = 171;
    /* the browser height calculation 1800 in pixel start from the top */
    var calc = heightScrollTop = 240;
    /* the browser height calculation 240 in pixel start from the top */
    var half = heightScrollTop = 1800;
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

    /** Merchant Award **/

//iframe parameter link
    var iframe = document.createElement('iframe');

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

    (function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s);
        js.id = id;
        js.src = "//trustedcompany.com/statics/scripts/plugins.js?locale=en";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'tc-plugins'));


});

