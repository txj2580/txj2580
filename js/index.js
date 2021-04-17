$(function(){
				//lunbo
				var num = 0
				$('div.img>img').mousedown(function(e){
					var rex = e.clientX
					 e.preventDefault();
					$('div.img>img').on('mousemove',function(e){
						a = rex - e.clientX;
						if(a>0){
							$('div.img>img').parent().css('left',-a+(-520*num)+'px');
						}
						else if(a<0){
							$('div.img>img').parent().css('left',-a+(-520*num)+'px');
						}
					})
					
				})
				$('div.img>img').mouseup(function(e){
					$('div.img>img').off('mousemove')
					if(a>50){
						num++;
						if(num>=3){
							num = 0;
						}
						$('div.cir>li').eq(num).css('background','rgba(255,255,255,.7)').siblings().css('background','rgba(0,0,0,.7)')
						$('div.img>img').parent().css('left',-520*num+'px');
					}
					else if(a<-50){
						num--;
						if(num<0){
							num = 2;
						}
						$('div.cir>li').eq(num).css('background','rgba(255,255,255,.7)').siblings().css('background','rgba(0,0,0,.7)')
						$('div.img>img').parent().css('left',num*-520+'px');
					}
					
				})
				var time = setInterval(function(){
					num++;
					if(num>=3){
						num = 0;
					}
					$('div.cir>li').eq(num).css('background','rgba(255,255,255,.7)').siblings().css('background','rgba(0,0,0,.7)')
					$('div.img>img').parent().css('left',-520*num+'px');
				},3000)
				//
				$('.img').mouseover(function(){
					clearInterval(time);
				})
				$('.img').mouseout(function(){
					time = setInterval(function(){
						num++;
						if(num>=3){
							num = 0;
						}
						$('div.cir>li').eq(num).css('background','rgba(255,255,255,.7)').siblings().css('background','rgba(0,0,0,.7)')
						$('div.img>img').parent().css('left',-520*num+'px');
					},3000)
				})
				//
				$('.m_six>div>a').hover(
					function(){
						$(this).find('div').slideDown(500);
					},
					function(){
						$(this).find('div').slideUp(500);
					}
				)
				//
				
				$(document).scroll(function(){
					if($(document).scrollTop()>200){
						$('.nav').css({position:'fixed',top:'0',background:'white',width:'95%',left:'2.5%'})
					}else{
						$('.nav').css({position:'',top:'',background:''})
					}
				})
				//
				$(document).ready(function(){
					$('.wgg').show();
					$('.gg>span').click(function(){
						$('.wgg').hide();
					})
					$('li.shop span').text($.cookie('num'))
					if($('li.shop span').text() != 0){
						$('li.shop span').show();
					}else{
						$('li.shop span').hide();
					}
				})
				//
			})