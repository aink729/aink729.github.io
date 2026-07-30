UI = {
	load: function(){
		$(document).ready(function(){
			UI.fn_gnb();
			UI.fn_careers();
			UI.fn_about();
			UI.fn_contact();
			//UI.fn_esg();

		});//ready

		$(window).load(function(){

		});;//load

	},

	fn_gnb : function(){
		var header = $('#header'),
			gnbWrap = $('#gnb'),
			gnb = $('#gnb > ul'),
			btn_gnb = header.find('.btn_menu'),
			depth1 = gnb.children();

		btn_gnb.on('click', function(){
			if (header.hasClass('open')){
				header.removeClass('open');
				gnbWrap.removeClass('open');
			}else{
				header.addClass('open');
				gnbWrap.addClass('open');
			}
		});

		$(window).scroll(function(){
			sTop = $(window).scrollTop();
			if (sTop > 0){
				header.addClass('scroll');
			}else{
				header.removeClass('scroll');
			}

			if($(window).width() > 850) {
				if ( sTop >= $('#footer').offset().top -1000 && sTop < $('#footer').offset().top +500){
				$('#tag').fadeOut(0);
				}else{
					$('#tag').fadeIn(0);
				}
			}else{
				if ( sTop >= $('#footer').offset().top -600 && sTop < $('#footer').offset().top +500){
					$('#tag').fadeOut(0);
				}else{
					$('#tag').fadeIn(0);
				}
			}

		});

		var logo = $('#header .logo');
		var type_flag = false;
		var total_flag = false;

		logo.bind('click',function(){
			$('html,body').stop().animate({scrollTop: 0 },500, 'easeInOutExpo');
		});

	},

	fn_careers : function(){
		if($('.sub_careers').length == 0){return;};

		var careers_slider = $(".slider").slick({
			dots: false,
			slidesToShow:3,
			arrows: true,
			draggable: false,
			infinite: false,
			responsive: [
				{
				breakpoint: 1120,
					settings: {
						slidesToShow:2
					}
				},
				{
				breakpoint: 850,
					settings: {
						slidesToShow: 1,
						arrows: false,
						draggable: true
					}
				}
			]
		});



		var title = $('.section_01 .title');

		title.addClass('ani');


	},

	//esg 슬라이드
	/*
	fn_esg : function(){
		var swiper_img = new Swiper('.EsgSlder', {
			dots: false,
			slidesPerView: 3,
			loop: true,
			autoplay: {
				delay: 3000,
			},
			navigation : {
				nextEl : '.swiper-button-next', // 다음 버튼 클래스명
				prevEl : '.swiper-button-prev', // 이번 버튼 클래스명
			},
			breakpoints: {
			 850: {
				 slidesPerView: 1,
			 }
		 }

		});
	},
	*/

	fn_contact : function(){
		if($('.sub_contact').length == 0){return;};

		var title = $('.section_01 .title');

		title.addClass('ani');

	},

	fn_about : function(){
		if($('.sub_about').length == 0){return;};

		var title = $('.section_01 .title');

		title.addClass('ani');

	}

}

//레이어 오픈
var layer_OPEN = function (obj_selector){
	var obj = $(obj_selector);
	obj.css({'display':'table','opacity':0});
	obj.stop().animate({'opacity':1},500);
};

//레이어 클로즈
var layer_CLOSE = function (obj_selector){
	var obj = $(obj_selector);
	obj.stop().animate({'opacity':0},500,function (){
		$(this).css({'display':'none'});
	});
};

UI.load();
