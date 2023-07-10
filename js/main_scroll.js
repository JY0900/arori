// 메인 메뉴
$(function() {

    $(document).ready(function() {
  
      var scrollOffset = $('.main_nav').offset();
  
      $(window).scroll(function() {
        if ($(document).scrollTop() > scrollOffset.top) {
          $('.main_nav').addClass('scroll-fixed2');
        }
        else {
          $('.main_nav').removeClass('scroll-fixed2');
        }
      });
    });
  });