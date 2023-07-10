$(function(){
	$('.my_book_tab_con > ul').hide();
	$('.my_book_tab_nav a').click(function () {
		$('.my_book_tab_con > ul').hide().filter(this.hash).fadeIn();
		$('.my_book_tab_nav a').removeClass('my_on');
		$(this).addClass('my_on');
		return false;
	}).filter(':eq(0)').click();
	
  });
  