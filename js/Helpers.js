$(document).ready(function () {
    // Плавный скролл к якорям
    $('.accordion').on('click', function (e) {
//    var flag = false;
//    if ($(this).hasClass('active')){
//        flag = true;
//    }
//    $('.accordion').each(function(){
//        if (!flag){
//            $(this).removeClass('active');
//            $(this).next().removeClass('show');
//        }
//    });
        $(this).toggleClass('active');
        $(this).next().toggleClass('show');
//        flag = false;
    });
    
    $('a.link').on('click', linkSwitch);
    
    
    $('a[href$="#top"]').bind('click', function (e){
        e.preventDefault();
        $(document).off('scroll');
        var anchor2 = $($(this).attr('href')).offset().top;
        $('html, body').stop().animate({
        scrollTop: anchor2
    }, 400, function() {
            $(document).on('scroll', onScroll);
        });
    e.preventDefault();
    });
    
    
    setInterval(linkSwitchToNext, 2000);
    
    
    $('.main-part .top-buttons .button-transp').bind("click", function (e) {
        e.preventDefault();
        var m = $($(this).children()[0]);
        $(document).off('scroll');
        if ($(m.attr('href')).offset().top == 0){
            $('html, body').stop().animate({
            scrollTop: $(m.attr('href')).offset().top
        }, 400, function() {
                $(document).on('scroll', onScroll);
            });
        }
        else {
            var t = $(m.attr('href')).offset().top;
            $('html, body').stop().animate({
            scrollTop: t + 20
        }, 400, function() {
                $('html, body').stop().animate({
                    scrollTop: t
                }, 120, function(){$(document).on('scroll', onScroll)})
                
            });
        }
//        $('html, body').stop().animate({
//            var offs1 = $(anchor.attr('href')).offset().top;
//            scrollTop: offs1 + 20
//        }, 400, function () {
//            
//            $('html, body').animate({
//                scrollTop: offs
//            }, 120, function() {$(document).on('scroll', onScroll)});
//        });
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
        e.preventDefault();
         $(document).off("scroll");
            $('.left-side-bar .menu ul li').each(function () {
                $(this).removeClass('active');
            });
                $(this).addClass('active');
    //        $('html, body').stop().animate({
    //            scrollTop: $($(this).children('a').attr('href')).offset().top
    //        }, 500);
        if (memes){
            var offs = $($(this).children('a').attr('href')).offset().top;
            if (offs > $(this).offset().top) {
              $('html, body').stop().animate({
                  scrollTop: offs + 20
              }, 400, function() {

              $('html, body').animate({
                  scrollTop: offs
              }, 120, function () {$(document).on('scroll', onScroll)});
            });
            }
            else if (offs < $(this).offset().top) {
                $('html, body').stop().animate({
                  scrollTop: offs - 20
              }, 400, function() {

              $('html, body').animate({
                  scrollTop: offs
              }, 120, function () {$(document).on('scroll', onScroll)});
            });
            }
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
            if (refElement.position().top - $(window).height()/3 <= scrollPos && refElement.position().top + refElement.height() - $(window).height()/3 >= scrollPos) {
                $('.left-side-bar .menu ul li a').parent().removeClass("active");
                currLink.parent().addClass("active");
            }
            else{
                currLink.parent().removeClass("active");
            }
        });
    }

function linkSwitch(e){
    e.preventDefault();
        $('a.link').each(function () {
            $(this).parent().removeClass('active1');
            $('.el-desc').css('opacity', '0');
            $('.sh-desc').css('opacity', '0');
            $('.ba-desc').css('opacity', '0');
            $('.sa-desc').css('opacity', '0');
            $('.po-desc').css('opacity', '0');
            $('.flat-electricity').css('opacity', '0');
            $('.flat-shkaphi').css('opacity', '0');
            $('.flat-balkon').css('opacity', '0');
            $('.flat-santehnica').css('opacity', '0');
            $('.flat-pol').css('opacity', '0');
        })

        $(this).parent().addClass('active1');
        var zis = $(this).attr('id');
        if (zis == 'link1'){
            $('.flat-electricity').css('opacity', '1');
            $('.el-desc').css('opacity', '1');
        }
        else if (zis == 'link2'){
            $('.flat-shkaphi').css('opacity', '1');
            $('.sh-desc').css('opacity', '1');
        }
        else if (zis == 'link3'){
            $('.flat-balkon').css('opacity', '1');
            $('.ba-desc').css('opacity', '1');
        }
        else if (zis == 'link4'){
            $('.flat-santehnica').css('opacity', '1');
            $('.sa-desc').css('opacity', '1');
        }
        else if (zis == 'link5'){
            $('.flat-pol').css('opacity', '1');
            $('.po-desc').css('opacity', '1');
        }
}

function linkSwitchToNext(){
    $('a.link').each(function () {
            $('.el-desc').css('opacity', '0');
            $('.sh-desc').css('opacity', '0');
            $('.ba-desc').css('opacity', '0');
            $('.sa-desc').css('opacity', '0');
            $('.po-desc').css('opacity', '0');
            $('.flat-electricity').css('opacity', '0');
            $('.flat-shkaphi').css('opacity', '0');
            $('.flat-balkon').css('opacity', '0');
            $('.flat-santehnica').css('opacity', '0');
            $('.flat-pol').css('opacity', '0');
        });
    
    if ($('.active1 .link').is('#link1')){
        $('#link1').parent().removeClass('active1');
        $('#link2').parent().addClass('active1');
        $('.flat-shkaphi').css('opacity', '1');
        $('.sh-desc').css('opacity', '1');
    }
    else if ($('.active1 .link').is('#link2')){
        $('#link2').parent().removeClass('active1');
        $('#link3').parent().addClass('active1');
        $('.flat-balkon').css('opacity', '1');
        $('.ba-desc').css('opacity', '1');
    }
    else if ($('.active1 .link').is('#link3')){
        $('#link3').parent().removeClass('active1');
        $('#link4').parent().addClass('active1');
        $('.flat-santehnica').css('opacity', '1');
        $('.sa-desc').css('opacity', '1');
    }
    else if ($('.active1 .link').is('#link4')){
        $('#link4').parent().removeClass('active1');
        $('#link5').parent().addClass('active1');
        $('.flat-pol').css('opacity', '1');
        $('.po-desc').css('opacity', '1');
    }
    else if ($('.active1 .link').is('#link5')){
        $('#link5').parent().removeClass('active1');
        $('#link1').parent().addClass('active1');
        $('.flat-electricity').css('opacity', '1');
        $('.el-desc').css('opacity', '1');
    }
}