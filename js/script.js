// top_bn (header) 
        $(function () {
            $('.head_bn li:nth-child(1)').click(function () {
                $('header').css({ 'background-image': 'url(./images/main_bn_bg1.png)' });
            });

            $('.head_bn li:nth-child(2)').click(function () {
                $('header').css({ 'background-image': 'url(./images/main_bn_bg2.png)' });
            });

            $('.head_bn li:nth-child(3)').click(function () {
                $('header').css({ 'background-image': 'url(./images/main_bn_bg3.png)' });
            });
        });

        $(function () {
            $('.head_bn li:nth-child(1)').click(function () {
                $('.main_popup_2, .main_popup_3').hide();
                $('.main_popup_1').fadeIn(1000);
                
            });

            $('.head_bn li:nth-child(2)').click(function () {
                $('.main_popup_1, .main_popup_3').hide();
                $('.main_popup_2').fadeIn(1000);
                
            });

            $('.head_bn li:nth-child(3)').click(function () {
                $('.main_popup_1, .main_popup_2').hide();
                $('.main_popup_3').fadeIn(1000);
                
            });

        });

        $(function () {
            $('.head_bn li').click(function () {
                $(this).addClass('head_on').siblings().removeClass('head_on');
            });
        });


// today_bn
$(function () {
    $('.today_right_list li:nth-child(1)').click(function () {
        $('.today_right_img:nth-child(2), .today_right_img:nth-child(3)').hide();
        $('.today_right_img:nth-child(1)').fadeIn(1000);
        $('.today_popup_2, .today_popup_3').hide();
        $('.today_popup_1').fadeIn(1000);

    });

    $('.today_right_list li:nth-child(2)').click(function () {
        $('.today_right_img:nth-child(1), .today_right_img:nth-child(3)').hide();
        $('.today_right_img:nth-child(2)').fadeIn(1000);
        $('.today_popup_1, .today_popup_3').hide();
        $('.today_popup_2').fadeIn(1000);

    });

    $('.today_right_list li:nth-child(3)').click(function () {
        $('.today_right_img:nth-child(1), .today_right_img:nth-child(2)').hide();
        $('.today_right_img:nth-child(3)').fadeIn(1000);
        $('.today_popup_1, .today_popup_2').hide();
        $('.today_popup_3').fadeIn(1000);

    });

});

$(function () {
    $('.today_right_list li').click(function () {
        $(this).addClass('today_on').siblings().removeClass('today_on');
    });
});

// tab
$(function(){
	$('.my_book_tab_con > ul').hide();
	$('.my_book_tab_nav a').click(function () {
		$('.my_book_tab_con > ul').hide().filter(this.hash).fadeIn();
		$('.my_book_tab_nav a').removeClass('my_on');
		$(this).addClass('my_on');
		return false;
	}).filter(':eq(0)').click();
	
  });


//sub1_tap
$(function(){
	$('.sub1_tap_box > div').hide();
	$('.sub1_tap_nav a').click(function () {
		$('.sub1_tap_box > div').hide().filter(this.hash).fadeIn();
		$('.sub1_tap_nav a').removeClass('my_on');
		$(this).addClass('my_on');
		return false;
	}).filter(':eq(0)').click();
	
  });


// sub2_tap
$(function(){
	$('.sub2_price_con > ul').hide();
	$('.sub2_price_nav a').click(function () {
		$('.sub2_price_con > ul').hide().filter(this.hash).fadeIn();
		$('.sub2_price_nav a').removeClass('price_on');
		$(this).addClass('price_on');
		return false;
	}).filter(':eq(0)').click();
	
  });


  // sub5_tap
$(function(){
	$('#mypage_tap_con > div').hide();
	$('.mypage_tap_nav a').click(function () {
		$('#mypage_tap_con > div').hide().filter(this.hash).fadeIn();
		$('.mypage_tap_nav a').removeClass('mypage_on');
		$(this).addClass('mypage_on');
		return false;
	}).filter(':eq(0)').click();
	
  });


// sub3 아코디언
$(function(){
	$(".mypage_user_btn li:nth-child(2)").click(function(){
		$('.mypage_user_index').slideToggle();
		// $(this).toggleClass("on").siblings().removeClass("on")
	});
});

// fixed ani
$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 400) {
        $('.main_fixed').fadeIn();
    } else {
        $('.main_fixed').fadeOut();
    }
});

// $( '.main_fixed a' ).click( function() {
// 	$( 'html, body' ).animate( { scrollTop : 0 }, 400 );
// 	return false;
// } );




//숨긴 메뉴 보이기 
var didScroll; 
var lastScrollTop = 0; 
var delta = 5; 
var navbarHeight = $('#sub_header').outerHeight(); 

$(window).scroll(function(event){
    didScroll = true; 
}); 

setInterval(function() { 
    if (didScroll) { 
        hasScrolled(); 
        didScroll = false; } 
    }, 200); 
    
function hasScrolled() { 
    var st = $(this).scrollTop(); 
    
    // Make sure they scroll more than delta 
    if(Math.abs(lastScrollTop - st) <= delta) return; 
    
    // If they scrolled down and are past the navbar, add class .nav-up. 
    // This is necessary so you never see what is "behind" the navbar. 
    if (st > lastScrollTop && st > navbarHeight){ 
        // Scroll Down 
        $('#sub_header').addClass('nav-up'); 
    } else { 
        // Scroll Up 
        if(st + $(window).height() < $(document).height()) { 
            $('#sub_header').removeClass('nav-up');
         } 
    } 
    
    lastScrollTop = st; 
}