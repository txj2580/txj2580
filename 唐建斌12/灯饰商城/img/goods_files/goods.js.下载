$(function() {
	//
	$('.m_tit').find('span').text($.cookie('good'));
	$('.l_tu').find('img').attr('src', $.cookie('url'));
	$('.r_ms').find('h1').text($.cookie('good'));
	$('.r_ms').find('h1').text($.cookie('good'));
	$('.r_ms span.price').text($.cookie('price'));
	//
	$('.bt').hover(
		function() {
			$('.bt').find('div').animate({
				left: '0'
			}, 300);
		},
		function() {
			$('.bt').find('div').animate({
				left: '100%'
			}, 300, function() {
				$('.bt').find('div').css('left', '-100%');
			})
		}
	)
	//
	var num = $('.r_ms').find('input').eq(1).attr('value')
	$('.r_ms').find('input').eq(0).click(function() {
		num--;
		if (num < 1) {
			num = 1;
		}
		$('.r_ms').find('input').eq(1).attr('value', num)
	})
	$('.r_ms').find('input').eq(2).click(function() {
		num++;
		if (num > 9) {
			num = 9;
		}
		$('.r_ms').find('input').eq(1).attr('value', num)
	})
	//
	// var numv = parseInt($('.shop').find('span').text())+parseInt($('.r_ms').find('input').eq(1).attr('value'));
	$('.bt').click(function() {
		numv = parseInt($('.shop').find('span').text())+parseInt($('.r_ms').find('input').eq(1).val());
		if($('li.shop span').html() != 0){
			$('li.shop span').show();
		}
		var p = $('<p></p>').append('<span>'+$('.r_ms').find('input').eq(1).val()+'</span>X').append('<span>'+$.cookie('price')+'</span>')
		var li = $('<li></li>').append('<img src="'+$.cookie('url')+'" alt="">').append('<p>'+$.cookie('good')+'</p>').append('<p>颜色：原色</p>').append(p).append('<span class="cd">X</span>');
		$('.spli').append(li);
		$('.ad_shop').show()
		//
		$('.cd').one('click',function(){
			var as = $(this).parent().find('p').eq(2).find('span').eq(0).text();
			console.log(as)
			numv-=as;
			$(this).parent().remove();
			$(this).parent().find('p').eq(2).find('span').eq(0).text(0)
		})
		//
	})
	//
	$('.ad_shop').find('a').eq(0).click(function(){
		var zt = $('.spli').find('li').length
		$.cookie('zTa',zt,{path:'/'})
	})
	//
	$('.kong').mousedown(function() {
		$('.ad_shop').hide()
		$('li.shop').find('span').text(numv);
		$.cookie('num',numv,{path:'/'});
		if($('li.shop span').text() != 0){
			$('li.shop span').show();
		}else{
			$('li.shop span').hide();
		}
	})
	//
	//放大镜
	$('.big').css('background-image', 'url(' + $('.mf').find('img').attr('src') + ')');
	$('.mf').mouseenter(function(e) {
		$(this).mousemove(function(e) {
			var resX = e.pageX - ($(this).offset().left + $('.small').width() / 2);
			var resY = e.pageY - ($(this).offset().top + $('.small').height() / 2);
			if (resX < 0) {
				resX = 0
			} else if (resX > $(this).width() - $('.small').width()) {
				resX = $(this).width() - $('.small').width()
			}
			if (resY < 0) {
				resY = 0
			} else if (resY > $(this).height() - $('.small').height()) {
				resY = $(this).height() - $('.small').height()
			}
			$('.small').css({
				left: resX + 'px',
				top: resY + 'px'
			})
			$('.big').css('background-position', resX * -4 + 'px ' + resY * -4 + 'px')

		})
		$('.small').show();
		$('.big').show()
	})
	$('.mf').mouseleave(function(e) {
		$('.small').hide();
		$('.big').hide()
	})
	//
	// $.cookie('url',res,{path:'/'});
})
