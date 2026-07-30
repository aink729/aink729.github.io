function currentUrl() {
	var url = window.location.protocol + "//" + window.location.host;
	return url;
}

/* btn_previous 클릭 시 */
$(document).on('click', '.btn_previous',function(result){
	window.history.back();
});

/*$(document).on('click', '.enrollNews',function(result){
	var email = $(this).siblings('input').val();

	if(tms.isEmpty(email)) {
		alert("이메일을 입력해 주세요.");
		return false;
	}

	var exptext = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
	if(exptext.test(email) == false) {
		alert("잘못된 이메일 형식입니다.");
		return false;
	}

	var params = {
		email : email
	};

	tms.ajaxPostHelper('/news/subscribe', JSON.stringify(params), null, function(result){
		if (result.code==0) {
			alert("뉴스레터 구독이 신청되었습니다.\n신청하신 메일 주소로 뉴스레터를 발송해드리겠습니다.");
			$(".enrollNews_input").val("");
		} else if (result.code == 100) {
			alert("잠시후 시도하여 주세요.");
		} else if (result.code == 202) {
			alert("이미 구독중인 이메일 입니다.");
			$(".enrollNews_input").val("");
		}
	});

});*/

function tagReplace (str) {
	str = str.replace(/&lt;/g,"<");
	str = str.replace(/&gt;/g,">");
	str = str.replace(/&quot;/g,"\"");
	str = str.replace(/&#39;/g,"\'");
	str = str.replace(/(<br>|<br\/>|<br \/>|<br >)/g, '\r\n');
	return str
}
function tagReplacePrimal (str) {
	str = str.replace(/&lt;/g,"<");
	str = str.replace(/&gt;/g,">");
	str = str.replace(/&quot;/g,"\"");
	str = str.replace(/&#39;/g,"\'");
	return str
}

//++추가 2025 main 페이지에서만 .scroll 토글되도록
$(function(){
	const $header = $('#header');

	// main layout인지 체크
	if ( $('.container[data-layout="main"]').length ) {
		const $win  = $(window),
			$sec2 = $('#sec2');

		function updateHeaderScrollClass(){
			const scrollTop  = $win.scrollTop(),
				sec2Top    = $sec2.offset().top,
				sec2Bottom = sec2Top + $sec2.outerHeight();

			if ( scrollTop >= sec2Top && scrollTop < sec2Bottom ) {
				$header.addClass('scroll');
			} else {
				$header.removeClass('scroll');
			}
		}

		$win.on('scroll resize', updateHeaderScrollClass);
		updateHeaderScrollClass();
	} else {
		// 서브페이지
		$header.addClass('sub').removeClass('scroll');
	}
});