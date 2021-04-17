$('li.shop img').mouseenter(function(){
					$('li.shop div').show(500);
				});
				$('li.shop').mouseleave(function(){
					$('li.shop div').hide(500);
				})
				if($('li.shop span').text() != 0){
					$('li.shop span').show();
				}else{
					$('li.shop span').hide();
				}
$('.side_nav>li').eq(3).click(function(){
					$("body,html").animate({scrollTop:0},500)
				})