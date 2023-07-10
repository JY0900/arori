 $(function(){
 var swiper = new Swiper('.flowslide_inner ', {
    slidesPerView: 6,//보여지는 갤러리 수
    spaceBetween: 10,//갤러리 사이 간격
    speed: 5000,//버튼을 슬라이드가 넘어가는 시간
	  autoplay: {
        delay: 0,//자동으로 넘어가기 전 머무르는 시간
        disableOnInteraction: false,
      },
      loop: true,//슬라이드 무한반복
    });

    $('.flowslide .swiper-slide').on('mouseover', function(){
      swiper.autoplay.stop();
    });
    $('.flowslide .swiper-slide').on('mouseout', function(){
      swiper.autoplay.start();
    });
});

