$(function () {

  $('#fullpage').fullpage({
    scrollOverflow: true, /* 0928 수정 */
    autoScrolling:true,//scroll
    verticalCentered:false,//flex
    showActiveTooltip:true,
    slidesNavigation:true,
    slidesNavPosition:'top',
    scrollBar:false,
    fitToSectionDelay:2000,
    menu:'#myMenu',
    scrollingSpeed:700,
    css3:true,
    easing:'easeInOutCubic',
    easingcss3:'ease',
    keyboardScrolling:true,
    animateAnchor:true,
    recordHistory:true,
    // anchors: ['01','02','03','04','05', '06', '07', '08'], 
    // menu: '#nav',
    
		// 특정 섹션에서만 헤더 스타일 변경
		//afterLoad: function(anchorLink, index){ 	              
    onLeave:function (origin,destination,direction) {
      var leavingSection = this;
      //Math.ceil($(this).innerHeight()) * -0.1

      if (destination == 2 && direction == 'down') {
        // 1 to 2        
        gsap.set($('.main-banner-cell').find('.txt_wrap'),{opacity:0});
        gsap.fromTo('.main-banner-01 .txt_wrap',{opacity:1},{delay:0,opacity:0,ease:Power3.easeInOut});
        gsap.fromTo('.main-banner-01 .txt_box',{y:0},{duration:0.95,delay:0,y:-130,ease:Power3.easeInOut});
        gsap.fromTo('.main-banner-02 .txt_wrap',{opacity:0},{delay:0.35,opacity:1,ease:Power3.easeInOut});
        gsap.fromTo('.main-banner-02 .txt',{y:-66},{duration:0.95,delay:0.35,y:0,ease:Power3.easeInOut});
        $('.main-banner-07 .txt_wrap .right').removeClass('on');
        $('.main-banner-01 .txt_inner').removeClass('on');
        $('.nav li').find('a').removeClass('active');
        $('.nav li').eq(0).find('a').addClass('active');
        setTimeout(function(){
          $('.main-banner-02 .txt_inner').addClass('on');
        },1400)
     }
      if (destination == 1 && direction == 'up') {
        // 2 to 1
        gsap.set($('.main-banner-cell').find('.txt_wrap'),{opacity:0});
        gsap.fromTo('.main-banner-02 .txt',{y:0},{duration:0.95,delay:0,y:130,ease:Power3.easeInOut});
        gsap.fromTo('.main-banner-02 .txt_wrap',{opacity:1},{delay:0,opacity:0,ease:Power3.easeInOut});
        gsap.fromTo('.main-banner-01 .txt_wrap',{opacity:0},{delay:0.35,opacity:1,ease:Power3.easeInOut});
        gsap.fromTo('.main-banner-01 .txt_box',{y:-130},{duration:0.95,delay:0.35,y:0,ease:Power3.easeInOut});
        $('.main-banner-07 .txt_wrap .right').removeClass('on');
        $('.section .txt_inner').removeClass('on');
        $('.nav li').find('a').removeClass('active');
        $('.nav li').eq(0).find('a').addClass('active');
        $('.main-banner-02 .txt_inner').removeClass('on');
        setTimeout(function(){
          $('.main-banner-01 .txt_inner').addClass('on');
        },1400)
     }
      if (destination == 3 && direction == 'down') {
        // 2 to 3
        gsap.set($('.main-banner-cell').find('.txt_wrap'),{opacity:0});
        gsap.fromTo('.main-banner-02 .txt_wrap',{opacity:1},{delay:0,opacity:0,ease:Power3.easeInOut});
        gsap.fromTo('.main-banner-02 .txt',{y:0},{duration:0.95,delay:0,y:-130,ease:Power3.easeInOut});
        gsap.fromTo('.main-banner-03 .txt_wrap',{opacity:0},{delay:0.35,opacity:1,ease:Power3.easeInOut});
        gsap.fromTo('.main-banner-03 .txt',{y:-130},{duration:0.95,delay:0.35,y:0,ease:Power3.easeInOut});
        $('.main-banner-07 .txt_wrap .right').removeClass('on');
        $('.section .txt_inner').removeClass('on');
        $('.nav li').find('a').removeClass('active');
        $('.nav li').eq(0).find('a').addClass('active');
        $('.main-banner-02 .txt_inner').removeClass('on');
        setTimeout(function(){
          $('.main-banner-03 .txt_inner').addClass('on');
        },1400)
     }
      if (destination == 2 && direction == 'up') {
        // 3 to 2
        gsap.set($('.main-banner-cell').find('.txt_wrap'),{opacity:0});
        gsap.fromTo('.main-banner-03 .txt',{y:0},{duration:0.95,delay:0,y:130,ease:Power3.easeInOut});
        gsap.fromTo('.main-banner-03 .txt_wrap',{opacity:1},{delay:0,opacity:0,ease:Power3.easeInOut});
        gsap.fromTo('.main-banner-02 .txt_wrap',{opacity:0},{delay:0.35,opacity:1,ease:Power3.easeInOut});
        gsap.fromTo('.main-banner-02 .txt',{y:-130},{duration:0.95,delay:0.35,y:0,ease:Power3.easeInOut});
        $('.main-banner-07 .txt_wrap .right').removeClass('on');
        $('.section .txt_inner').removeClass('on');
        $('.nav li').find('a').removeClass('active');
        $('.nav li').eq(0).find('a').addClass('active');
        $('.main-banner-03 .txt_inner').removeClass('on');
        setTimeout(function(){
          $('.main-banner-02 .txt_inner').addClass('on');
        },1400)
     }
      if (destination == 4 && direction == 'down') {
        // 3 to 4
        gsap.set($('.main-banner-cell').find('.txt_wrap'),{opacity:0});
        gsap.fromTo('.main-banner-03 .txt_wrap',{opacity:1},{delay:0,opacity:0,ease:Power3.easeInOut});
        gsap.fromTo('.main-banner-03 .txt',{y:0},{duration:0.95,delay:0,y:-130,ease:Power3.easeInOut});
        gsap.fromTo('.main-banner-04 .txt_wrap',{opacity:0},{delay:0.35,opacity:1,ease:Power3.easeInOut});
        gsap.fromTo('.main-banner-04 .txt',{y:-130},{duration:0.95,delay:0.35,y:0,ease:Power3.easeInOut});
        $('.main-banner-07 .txt_wrap .right').removeClass('on');
        $('.section .txt_inner').removeClass('on');
        $('.main-banner-03 .txt_inner').removeClass('on');
        $('.nav li').find('a').removeClass('active');
        $('.nav li').eq(0).find('a').addClass('active');
        setTimeout(function(){
          $('.main-banner-04 .txt_inner').addClass('on');
        },1400)
     }
      if (destination == 3 && direction == 'up') {
        // 4 to 3
        gsap.set($('.main-banner-cell').find('.txt_wrap'),{opacity:0});
        gsap.fromTo('.main-banner-04 .txt',{y:0},{duration:0.95,delay:0,y:130,ease:Power3.easeInOut});
        gsap.fromTo('.main-banner-04 .txt_wrap',{opacity:1},{delay:0,opacity:0,ease:Power3.easeInOut});
        gsap.fromTo('.main-banner-03 .txt_wrap',{opacity:0},{delay:0.35,opacity:1,ease:Power3.easeInOut});
        gsap.fromTo('.main-banner-03 .txt',{y:-66},{duration:0.95,delay:0.35,y:0,ease:Power3.easeInOut});
        $('.main-banner-07 .txt_wrap .right').removeClass('on');
        $('.section .txt_inner').removeClass('on');
        $('.nav li').find('a').removeClass('active');
        $('.nav li').eq(0).find('a').addClass('active');
        $('.main-banner-04 .txt_inner').removeClass('on');
        setTimeout(function(){
          $('.main-banner-03 .txt_inner').addClass('on');
        },1400)
     }
      if (destination == 5 && direction == 'down') {
        // 4 to 5
        gsap.set($('.main-banner-cell').find('.txt_wrap'),{opacity:0});
        gsap.fromTo('.main-banner-04 .txt_wrap',{opacity:1},{delay:0,opacity:0,ease:Power3.easeInOut});
        gsap.fromTo('.main-banner-04 .txt',{y:0},{duration:0.95,delay:0,y:-130,ease:Power3.easeInOut});
        gsap.fromTo('.main-banner-05 .txt_wrap',{opacity:0},{delay:0.35,opacity:1,ease:Power3.easeInOut});
        gsap.fromTo('.main-banner-05 .txt',{y:-130},{duration:0.95,delay:0.35,y:0,ease:Power3.easeInOut});
        $('.main-banner-07 .txt_wrap .right').removeClass('on');
        $('.section .txt_inner').removeClass('on');
        $('.nav li').find('a').removeClass('active');
        $('.nav li').eq(0).find('a').addClass('active');
        $('.main-banner-04 .txt_inner').removeClass('on');
        setTimeout(function(){
          $('.main-banner-05 .txt_inner').addClass('on');
        },1400)
     }
      if (destination == 4 && direction == 'up') {
        // 5 to 4
        gsap.set($('.main-banner-cell').find('.txt_wrap'),{opacity:0});
        gsap.fromTo('.main-banner-05 .txt',{y:0},{duration:0.95,delay:0,y:130,ease:Power3.easeInOut});
        gsap.fromTo('.main-banner-05 .txt_wrap',{opacity:1},{delay:0,opacity:0,ease:Power3.easeInOut});
        gsap.fromTo('.main-banner-04 .txt_wrap',{opacity:0},{delay:0.35,opacity:1,ease:Power3.easeInOut});
        gsap.fromTo('.main-banner-04 .txt',{y:-130},{duration:0.95,delay:0.35,y:0,ease:Power3.easeInOut});
        $('.main-banner-07 .txt_wrap .right').removeClass('on');
        $('.section .txt_inner').removeClass('on');
        $('.nav li').find('a').removeClass('active');
        $('.nav li').eq(0).find('a').addClass('active');
        $('.main-banner-05 .txt_inner').removeClass('on');
        setTimeout(function(){
          $('.main-banner-04 .txt_inner').addClass('on');
        },1400)
     }
      if (destination == 6 && direction == 'down') {
        // 5 to 6
        gsap.set($('.main-banner-cell').find('.txt_wrap'),{opacity:0});
        gsap.fromTo('.main-banner-05 .txt_wrap',{opacity:1},{delay:0,opacity:0,ease:Power3.easeInOut});
        gsap.fromTo('.main-banner-05 .txt',{y:0},{duration:0.95,delay:0,y:-130,ease:Power3.easeInOut});        
        gsap.fromTo('.main-banner-06 .txt_wrap',{opacity:0},{delay:0.35,opacity:1,ease:Power3.easeInOut});
        gsap.fromTo('.main-banner-06 .txt_wrap .ani_01',{opacity:1},{duration:1.45,delay:1.6,opacity:0,ease:Power3.easeInOut});
        gsap.fromTo('.main-banner-06 .txt_wrap .ani_02',{opacity:0},{duration:1.45,delay:1.8,opacity:1,ease:Power3.easeInOut});
        $('.main-banner-07 .txt_wrap .right').removeClass('on');
        $('.nav li').find('a').removeClass('active');
        $('.nav li').eq(0).find('a').removeClass('active');
        $('.nav li').eq(5).find('a').addClass('active');
        $('.section .txt_inner').removeClass('on');
        $('.main-banner-05 .txt_inner').removeClass('on');
     }
      if (destination == 5 && direction == 'up') {
        // 6 to 5
        gsap.set($('.main-banner-cell').find('.txt_wrap'),{opacity:0});
        gsap.fromTo('.main-banner-06 .txt_wrap',{opacity:1},{opacity:0,ease:Power3.easeInOut});
        gsap.set('.main-banner-06 .txt_wrap .ani_01',{opacity:0, ease:Power3.easeInOut});
        gsap.fromTo('.main-banner-06 .txt_wrap .ani_02',{opacity:1},{duration:0,delay:0,opacity:0,ease:Power3.easeInOut});
        gsap.fromTo('.main-banner-05 .txt_wrap',{opacity:0},{delay:0.35,opacity:1,ease:Power3.easeInOut});
        gsap.fromTo('.main-banner-05 .txt',{y:-130},{duration:0.95,delay:0.35,y:0,ease:Power3.easeInOut});
        $('.main-banner-07 .txt_wrap .right').removeClass('on');
        $('.nav li').find('a').removeClass('active');
        $('.nav li').eq(5).find('a').removeClass('active');
        $('.nav li').eq(0).find('a').addClass('active');
        $('.section .txt_inner').removeClass('on');
        setTimeout(function(){
          $('.main-banner-05 .txt_inner').addClass('on');
        },1400)
     }

      if (destination == 7 && direction == 'down') {
        // 6 to 7
        gsap.set($('.main-banner-cell').find('.txt_wrap'),{opacity:0});
        gsap.fromTo('.main-banner-06 .txt_wrap',{opacity:1},{opacity:0,ease:Power3.easeInOut});
        gsap.set('.main-banner-06 .txt_wrap .ani_01',{opacity:0, ease:Power3.easeInOut});
        gsap.set('.main-banner-06 .txt_wrap .ani_02',{opacity:0, ease:Power3.easeInOut});
        gsap.fromTo('.main-banner-07 .txt_wrap',{opacity:0},{opacity:1,ease:Power3.easeInOut});
        gsap.fromTo('.main-banner-07 .txt_wrap .left',{opacity:0},{delay:0.35,duration:1,opacity:1,ease:Power3.easeInOut});     
        $('.main-banner-07 .txt_wrap .right').addClass('on');
        $('.nav li').find('a').removeClass('active');
        $('.nav li').eq(5).find('a').removeClass('active');
        $('.nav li').eq(6).find('a').addClass('active');
     }
      if (destination == 6 && direction == 'up') {
        // 7 to 6
        gsap.set($('.main-banner-cell').find('.txt_wrap'),{opacity:0});
        gsap.fromTo('.main-banner-07 .txt_wrap  .left',{opacity:1},{duration:1,opacity:0,ease:Power3.easeInOut});          
        gsap.fromTo('.main-banner-07 .txt_wrap',{opacity:1},{opacity:0,ease:Power3.easeInOut});        
        gsap.fromTo('.main-banner-06 .txt_wrap',{opacity:0},{delay:0.35,opacity:1,ease:Power3.easeInOut});
        gsap.set('.main-banner-06 .txt_wrap .ani_02',{opacity:0, ease:Power3.easeInOut});
        gsap.fromTo('.main-banner-06 .txt_wrap .ani_01',{opacity:1},{duration:1.45,delay:1.6,opacity:0,ease:Power3.easeInOut});
        gsap.fromTo('.main-banner-06 .txt_wrap .ani_02',{opacity:0},{duration:1.45,delay:1.8,opacity:1,ease:Power3.easeInOut});
        $('.main-banner-07 .txt_wrap .right').removeClass('on');
        $('.nav li').find('a').removeClass('active');
        $('.nav li').eq(6).find('a').removeClass('active');
        $('.nav li').eq(5).find('a').addClass('active');
     }
      if (destination == 8 && direction == 'down') {
        // 7 to 8
        gsap.set($('.main-banner-cell').find('.txt_wrap'),{opacity:0});
        gsap.fromTo('.main-banner-07 .txt_wrap',{opacity:1},{delay:0,duration:1,opacity:0,ease:Power3.easeInOut});
        gsap.fromTo('.main-banner-07 .txt_wrap  .left',{opacity:1},{duration:1,opacity:0,ease:Power3.easeInOut});      
        gsap.fromTo('.main-banner-08 .txt_wrap',{opacity:0},{delay:0,opacity:1,ease:Power3.easeInOut});;
        $('.main-banner-07 .txt_wrap .right').removeClass('on');
        $('.nav li').find('a').removeClass('active');
        $('.nav li').eq(6).find('a').removeClass('active');
        $('.nav li').eq(7).find('a').addClass('active');
        $('#header').addClass('active');
        var winW = $(window).innerWidth();
        if (winW < 851){
          $('.nav').fadeOut();
        }
     }
      if (destination == 7 && direction == 'up') {
        // 8 to 7
        gsap.set($('.main-banner-cell').find('.txt_wrap'),{opacity:0});
        gsap.fromTo('.main-banner-08 .txt_wrap',{opacity:1},{opacity:0,ease:Power3.easeInOut});
        gsap.fromTo('.main-banner-07 .txt_wrap',{opacity:0},{delay:0.35,duration:1,opacity:1,ease:Power3.easeInOut});
        gsap.fromTo('.main-banner-07 .txt_wrap .left',{opacity:0},{delay:0.35,duration:1,opacity:1,ease:Power3.easeInOut});
        $('.main-banner-07 .txt_wrap .right').addClass('on');
        $('#header').removeClass('active');
        $('.nav li').find('a').removeClass('active');
        $('.nav li').eq(7).find('a').removeClass('active');
        $('.nav li').eq(6).find('a').addClass('active');        
        var winW = $(window).innerWidth();
        if (winW < 851){
          $('.nav').fadeIn();
        }
     }
   },
 });

  $.fn.fullpage.setAllowScrolling(true);


// load & reload
$( window ).load(function() {
    $.fn.fullpage.reBuild();
	
	let cUrl = window.location.href ;   
	if(cUrl.indexOf('#') > -1){
		history.replaceState(null,null,'/page/Newindex')
		$.fn.fullpage.moveTo(1, 1);
	}		
})
  
$(document).ready(function() {
    $.fn.fullpage.moveTo(1, 1);
    $('.nav li').find('a').removeClass('active');
    $('.nav li').eq(0).find('a').addClass('active');
    $('#header').removeClass('active');
})

   // resize window
  $( window ).resize(function() {
    $.fn.fullpage.reBuild();
  })


// alliance color change
$(window).on('mousewheel',function(){
  if($('body').hasClass('fp-viewing-7')){
    $('#header').addClass('active')
 }else{
    $('#header').removeClass('active')
 }
})

$(window).on('keydown',function(event){
    if ( event.keyCode == 40 || event.which == 40 ){
        if($('body').hasClass('fp-viewing-7')){
            $('#header').addClass('active')
        }else{
            $('#header').removeClass('active')
        }
    }

	/**새로고침시 페이지이동으로 처리	
	if(event.keyCode == 116 || (event.ctrlKey == true && (event.keyCode == 82)) ){	
        event.cancelBubble = true; 
        event.returnValue = false; 
        location.replace("/page/Newindex");
        return false;
    }**/
	
})

$(window).on('keyup',function(event){
  if ( event.keyCode == 38 || event.which == 38 ){
    if($('body').hasClass('fp-viewing-7')){
      $('#header').addClass('active')
   }else{
      $('#header').removeClass('active')
   }
 }
})



// mobile alliance btn
var winWidth = $(window).innerWidth();
  if (winWidth < 851){
    $('.alliance .btn_menu_mo').on('click',function(){
    $('.alliance').toggleClass('open');
  })
}


//$(window).scroll(function(){
  $(window).on('mousewheel',function(){
    var winWidth = $(window).innerWidth();
    if (winWidth > 850){
      var selArea = $('.main-banner-08 .subsect_02').offset().top;
      if (selArea < 280){
        $('.alliance').addClass('blind');
      }else{
        $('.alliance').removeClass('blind');
      }
    }    
  })

// hiddn mo nav
// $(window).on('scroll touchmove mousewheel', function(e){
//   e.stopPropagation();
//   var winWidth = $(window).innerWidth();
//   if (winWidth < 851){
//       var sec08Area = $('.main-banner-08 .subsect_03').offset().top;
//       if (sec08Area < 0){
//         $('.nav').addClass('blind');
//        }else{
//          $('.nav').removeClass('blind');
//        }
//   }  
// })

// main-banner-01
var typingBool = false;
var typingIdx01 = 0;
var typingIdx02 = 0;
var typingTxt01 = $('.typing_txt .txt01').text();
var typingTxt02 = $('.typing_txt .txt02').text();
typingTxt01 = typingTxt01.split('');
typingTxt02 = typingTxt02.split('');

function typing() {
if ($('.typing').hasClass('on')) {
if (typingIdx01 < typingTxt01.length) {
//setTimeout(function () {
$('.typing .txt01').append(typingTxt01[typingIdx01]);
typingIdx01++;
$('.typing .txt01').addClass('clear01');
//},5000);
}
}
if ($('.typing .txt01').hasClass('clear01')) {
if (typingIdx02 < typingTxt02.length) {
setTimeout(function () {
$('.typing .txt02').append(typingTxt02[typingIdx02]);
typingIdx02++;
$('.typing .txt02').addClass('clear02');
},1700);
setTimeout(function () {
$('.typ_txt .typing').addClass('cur');
},2900);
setTimeout(function () {
$('.main-banner-01 .txt_inner').addClass('on');
},3200);
}
}
if (typingBool == false) {// 타이핑이 진행되지 않았다면
typingBool = true;
var tyInt = setInterval(typing,50); // 반복동작
}
}

setTimeout(function () {
typing()
},1400);

//main-banner-01 typing MO
var typingMoBool = false;
var typingMoIdx01 = 0;
var typingMoIdx02 = 0;
var typingMoIdx03 = 0;
var typingMoIdx04 = 0;
var typingMoTxt01 = $('.typingMo_txt .txt01').text();
var typingMoTxt02 = $('.typingMo_txt .txt02').text();
var typingMoTxt03 = $('.typingMo_txt .txt03').text();
var typingMoTxt04 = $('.typingMo_txt .txt04').text();
typingMoTxt01 = typingMoTxt01.split('');
typingMoTxt02 = typingMoTxt02.split('');
typingMoTxt03 = typingMoTxt03.split('');
typingMoTxt04 = typingMoTxt04.split('');

function typingMo() {
if ($('.typingMo').hasClass('on')) {
if (typingMoIdx01 < typingMoTxt01.length) {
//setTimeout(function () {
$('.typingMo .txt01').append(typingMoTxt01[typingMoIdx01]);
typingMoIdx01++;
$('.typingMo .txt01').addClass('clear01');
//},2000);
}
}
if ($('.typingMo .txt01').hasClass('clear01')) {
if (typingMoIdx02 < typingMoTxt02.length) {
setTimeout(function () {
$('.typingMo .txt02').append(typingMoTxt02[typingMoIdx02]);
typingMoIdx02++;
$('.typingMo .txt02').addClass('clear02');
},1000);
}
}
if ($('.typingMo .txt02').hasClass('clear02')) {
if (typingMoIdx03 < typingMoTxt03.length) {
setTimeout(function () {
$('.typingMo .txt03').append(typingMoTxt03[typingMoIdx03]);
typingMoIdx03++;
$('.typingMo .txt03').addClass('clear03');
},1200);
}
}

if ($('.typingMo .txt03').hasClass('clear03')) {
if (typingMoIdx04 < typingMoTxt04.length) {
setTimeout(function () {
$('.typingMo .txt04').append(typingMoTxt04[typingMoIdx04]);
typingMoIdx04++;
$('.typingMo .txt04').addClass('clear04');
},600);
setTimeout(function () {
$('.typ_txt .typingMo').addClass('cur');
},1000);
setTimeout(function () {
$('.scroll_down').addClass('active');
},1500);
}
}
if (typingMoBool == false) {// 타이핑이 진행되지 않았다면
typingMoBool = true;
var tyIntMo = setInterval(typingMo,50); // 반복동작
}
}

setTimeout(function () {
typingMo()
},700);



//main-banner-08
function subMenu(){
  var winWidth = $(window).innerWidth();
  if (winWidth < 851){
    //mo
    var service_name = $(".main-banner-08 .service_list li h3");
      service_name.on('click',function(){
        if($(this).parent().hasClass('active')){
          service_name.parent().removeClass('edit_h');
          $(this).next('p').stop().slideUp('fast');
          $(this).parent().removeClass('active');
      }else{
          service_name.parent().removeClass('edit_h');
          $(this).parent().prevAll().addClass('edit_h');
          $(this).parent().nextAll().addClass('edit_h');
          service_name.next('p').stop().slideUp('fast');
          service_name.parent().removeClass('active');
          $(this).next('p').stop().slideDown('fast');
          $(this).parent().addClass('active');
      }
    })
  }else if (winWidth > 850){
    //pc
    var service_name = $(".main-banner-08 .service_list li");
      service_name.on('mouseover',function(){
          service_name.children('p').stop().slideUp(300);
          service_name.removeClass('active');
          $(this).children('p').stop().slideDown(300);
          $(this).addClass('active');
      })
      service_name.on('mouseleave',function(){
        $(this).children('p').stop().slideUp(300);
        $(this).removeClass('active');
      })
  }
}
subMenu();

$( window ).resize(function() {
  subMenu();
});

// main-banner-08 .subsect_01 swiper
var subsect_01_swiper = new Swiper('.main-banner-08 .subsect_01 .swiper-container',{
observer:true,
observeParents:true,
slidesPerView:5,
slidesPerGroup:1,
spaceBetween:25,
allowTouchMove:false,
speed:300,
breakpoints:{
  1170:{
  slidesPerView:5,
  slidesPerGroup:1,
  spaceBetween:10,
  },
  850:{
    slidesPerView:1,
    slidesPerGroup:1,
    allowTouchMove:true,
    pagination:{
      el:'.main-banner-08 .subsect_01 .swiper-pagination',
      clickable:true,
    },
    loop:true,
    autoplay:{
      delay:2000,
      disableOnInteraction:false,
    },
  },
},

});


// main-banner-08 .subsect_02 swiper
var subsect_02_swiper = new Swiper('.main-banner-08 .subsect_02 .swiper-container',{
  observer:true,
  observeParents:true,
  slidesPerView:'auto',
  slidesPerGroup:1,
  spaceBetween:20,
  autoplay:{
  delay:2000,
  disableOnInteraction:false,
 },
  allowTouchMove:true,
  watchOverflow:true,
  speed:300,
  loop:true,
  breakpoints:{
  850:{
  slidesPerView:1,
  slidesPerGroup:1,
  spaceBetween:30,
  centeredSlides:true,
  loop:true,
  loopedSlides:2,
 },
},
pagination:{
  el:'.main-banner-08 .subsect_02 .swiper-pagination',
  clickable:true,
},

});

// main-banner-08 .subsect_02 swiper auto stop
$('.main-banner-08 .subsect_02 .swiper-slide').hover(function(){
	console.log("1");
  subsect_02_swiper.autoplay.stop();
},function(){
	console.log("2");
  subsect_02_swiper.autoplay.start();
});


/**s내 한계...**/
// const tCont = document.querySelector("#section_08");
// tCont.addEventListener("touchstart", touchStart);

// let start_x = 0;
// function touchStart(e){
//  var pp = $(".sect_top");
//  var offset1 = pp.offset();
//  var tHeight = -($("#section_08 .sect_top").outerHeight() + $("#section_08 .sect_bot .subsect_01").outerHeight() + $("#section_08 .sect_bot .subsect_02").outerHeight());

//   if( tHeight > offset1 ){
//     console.log("나와 : "+ offset1.top);
//     console.log("총 : "+ tHeight);
//   }
// }

}) //jQuery
