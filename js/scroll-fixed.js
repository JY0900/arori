$(function() {

  $(document).ready(function() {

    var scrollOffset = $('#sub_header').offset();

    $(window).scroll(function() {
      if ($(document).scrollTop() > scrollOffset.top) {
        $('#sub_header').addClass('scroll-fixed');
      }
      else {
        $('#sub_header').removeClass('scroll-fixed');
      }
    });
  });
});
