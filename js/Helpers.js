$(document).ready(function () {
    // Плавный скролл к якорям
    $('a[href*=#]').bind("click", function (e) {
        e.preventDefault();
        $(document).off('scroll');
        var anchor = $(this);
        
//        $('html, body').stop().animate({
//        scrollTop: $(anchor.attr('href')).offset().top + 50
//    }, 500, function() {
//        
//        $('html, body').animate({
//            scrollTop: $(anchor.attr('href')).offset().top
//            }, 100);
//        });
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 500, function () {$(document).on('scroll', onScroll)});
        e.preventDefault();
    });
var memes = true;
    $('.left-side-bar .menu ul li a').click(function () {
        if ($(this).parent().hasClass('active')){
            memes = false;
        }
        else {
            memes = true;
        }
        $('.left-side-bar .menu ul li a').each(function () {
            $(this).parent().removeClass('active');
        })

        $(this).parent().addClass('active');
    });

    $('.left-side-bar .menu ul li').click(function (e) {
         $(document).off("scroll");
            $('.left-side-bar .menu ul li').each(function () {
                $(this).removeClass('active');
            })
                $(this).addClass('active');
    //        $('html, body').stop().animate({
    //            scrollTop: $($(this).children('a').attr('href')).offset().top
    //        }, 500);
        if (memes){
            var offs = $($(this).children('a').attr('href')).offset().top;
            if (offs > $(this).offset().top) {
              $('html, body').stop().animate({
                  scrollTop: offs + 20
              }, 500, function() {

              $('html, body').animate({
                  scrollTop: offs
              }, 200, function () {$(document).on('scroll', onScroll)});
            });
            }
            else if (offs < $(this).offset().top) {
                $('html, body').stop().animate({
                  scrollTop: offs - 20
              }, 500, function() {

              $('html, body').animate({
                  scrollTop: offs
              }, 200, function () {$(document).on('scroll', onScroll)});
            });
            }
            else {
                $('html, body').stop().animate({
                  scrollTop: offs
              }, 500)};
        }
    });
    
    $(document).on('scroll', onScroll);
    $('.burger').click(function () {
        $('.menu-xs ul').toggleClass('opened');
    });

    $('.main-part').click(function () {
        $('.menu-xs ul').removeClass('opened');
    });

    $('.menu-xs ul li a').click(function () {
        $('.menu-xs ul a').each(function () {
            $(this).parent().removeClass('active');
        })

        $(this).parent().addClass('active');
    });

    $('.menu-xs ul li').click(function (e) {
        $('.menu-xs ul li').each(function () {
            $(this).removeClass('active');
        })

        $(this).addClass('active');
        $('html, body').stop().animate({
            scrollTop: $($(this).children('a').attr('href')).offset().top
        }, 500);
        e.preventDefault();
    });

    $('.btn-more').mouseleave(function () {
        $(this).css('background-color', 'rgba(198, 21, 20, .4)');
    }).mouseenter(function () {
        $(this).css('background-color', 'rgba(198, 21, 20, 1)');
    });

    $('.btn-more').click(function () {
        $('.smoke').css('display', 'block');
        $(this).parent().children('.deal-more').show('slow');
    });

    $('.car-review').mouseleave(function () {
        $(this).css('text-decoration', 'none');
    }).mouseenter(function () {
        $(this).css('text-decoration', 'underline');
    });

    $('.car-review').click(function () {
        $('.smoke').css('display', 'block');
        $(this).parent().children('.review').show('slow');
    });

    $('.about-us .icons div').hover(function () {
        $(this).children().children().toggleClass('hovered');
        $(this).children('p').toggleClass('hovered');
    });

    $('.button-red, .zayavka-slogan-btn, .price .podrobnee-btn').click(function () {
        $('.smoke').css('display', 'block');
        $('.hover-form').show('slow');
    });

    $('.smoke, .close').click(function () {
        $('.smoke, .hover-form, .our-deals .deals .deal .review, .our-deals .deals .deal .deal-more, .hover-form-review').css('display', 'none');
    });

    $('.car-clipart .car .paint').hover(function () {
        $('.car-clipart .car').toggleClass('paint');
    });

    $('.car-clipart .car .kuzov').hover(function () {
        $('.car-clipart .car').toggleClass('kuzov');
    });

    $('.car-clipart .car .transm').hover(function () {
        $('.car-clipart .car').toggleClass('transm');
    });

    $('.car-clipart .car .rzha').hover(function () {
        $('.car-clipart .car').toggleClass('rzha');
    });

    $('.car-clipart .car .engine').hover(function () {
        $('.car-clipart .car').toggleClass('engine');
    });

    $('#phone, #phone1').mask('+7 (999) 999 99 99');

    $('.review-btn').click(function () {
        $('.smoke').css('display', 'block');
        $('.hover-form-review').show('slow');
    });

    

    $("#hover-form-review .submit-review-btn").click(function () {
        if ($('#hover-form-review #fio2').val() != '' && $('#hover-form-review #review').val() != '') {
            var form_data = $('#hover-form-review').serialize();
            $.ajax({
                type: "POST",
                url: "/sendReview.php",
                data: form_data,
                success: function () {
                    $('#hover-form-review .message').text('Ваш запрос успешно отправлен').animate({ opacity: '1' }, 300).delay(3000).animate({ opacity: '0' }, 300);
                    $('#hover-form-review').find("input[type=text], textarea").val("");
                },
            });
        }
        else {
            $("#hover-form-review .message").text('Поля Ф.И.О и Телефон должны быть заполнены').animate({ opacity: '1' }, 300).delay(3000).animate({ opacity: '0' }, 300);
        }
    });
});

function onScroll(event){
    event.preventDefault();
    var scrollPos = $(document).scrollTop();
    $('.left-side-bar .menu a').each(function () {
            var currLink = $(this);
            var refElement = $(currLink.attr("href"));
            if (refElement.position().top - $(window).height()/2  <= scrollPos && refElement.position().top + refElement.height() - $(window).height()/2 > scrollPos) {
                $('.left-side-bar .menu ul li a').parent().removeClass("active");
                currLink.parent().addClass("active");
            }
            else{
                currLink.parent().removeClass("active");
            }
        });
    }