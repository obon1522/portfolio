jQuery(function ($) {
  $('.js-accordion-title').on('click', function () {
    $(this).prev().slideToggle(200);
    $(this).toggleClass('open', 200);
  });
    var topBtn = $('.back-to-top');
    topBtn.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });
    topBtn.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});

$(function(){
    $(window).scroll(function (){
        $('.fadein').each(function(){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + 250){
                $(this).addClass('scrollin');
            }
        });
    });
});

$(function(){
  $('.toggle_btn').on('click', function() {
    if ($('#header').hasClass('open')) {
      $('#header').removeClass('open');
    } else {
      $('#header').addClass('open');
    }
  });

  $('.mask').on('click', function() {
    $('#header').removeClass('open');
  });
});

$(function() {
$('.click').click(function() {
        var imgSrc = $(this).children().attr('src');
        $('.bigimg').children().attr('src', imgSrc);
        $('.modal').fadeIn();
        $('body,html').css('overflow-y', 'hidden');
        return false
      });

$('.close-btn').click(function() {
        $('.modal').fadeOut();
        $('body,html').css('overflow-y', 'visible');
        return false
      });
});
