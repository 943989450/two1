/*
* @Author: hp
* @Date:   2019-08-30 10:16:01
* @Last Modified by:   hp
* @Last Modified time: 2019-09-16 19:04:41
*/



$(function(){
	$('.marginOut ul li>a').eq(1).hover(function() {
		$('.liu').eq(0).show()
	}, function() {
		$('.liu').eq(0).hide()
	});
	$('.marginOut ul li>a').eq(2).hover(function() {
		$('.shi').eq(0).show()
	}, function() {
		$('.shi').eq(0).hide()
	});

	$('.ol li').click(function(event) {
		$(this).css('width', '50px').siblings('li').css('width', '10px');
	});

	var n=0;
	var timer1;
	timer1=setInterval(function(){
		n++;
		if(n>4){n=0}
		$('.ol li').eq(n).css('width', '50px').siblings('li').css('width', '10px');
	},5000)
	$('.banner').mouseenter(function(event) {
		clearInterval(timer1)
	});
	$('.banner-pre').click(function(event) {
		n--;
		if(n<0){n=4}
		$('.ol li').eq(n).css('width', '50px').siblings('li').css('width', '10px');
	});
	$('.banner-next').click(function(event) {
		n++;
		if(n>4){n=0}
		$('.ol li').eq(n).css('width', '50px').siblings('li').css('width', '10px');
	});
	
	$('.content2 .pic .da1').mouseenter(function(event) {
		$(this).attr('src', 'img/content2-1.jpg');
	});
	$('.content2 .pic .da1').mouseleave(function(event) {
		$(this).attr('src', 'img/content2-01.jpg');
	});
	$('.content2 .pic .da4').mouseenter(function(event) {
		$(this).attr('src', 'img/content2-2.jpg');
	});
	$('.content2 .pic .da4').mouseleave(function(event) {
		$(this).attr('src', 'img/content2-07.jpg');
	});
	$('.content2 .pic .da7').mouseenter(function(event) {
		$(this).attr('src', 'img/content2-04.jpg');
	});
	$('.content2 .pic .da7').mouseleave(function(event) {
		$(this).attr('src', 'img/content2-02.jpg');
	});

	/*content6部分的点击上移事件*/
	var n2=0;
	$('.next2').click(function(event) {
		n2++;
		if(n2>=2){n2=2}
		$('.plan .ul-two').css('margin-top', -52*n2+'px');
	});
	var n3=0;
	$('.next3').click(function(event) {
		n3++;
		if(n3>=15){n3=15}
		$('.plan .ul-three').css('margin-top', -52*n3+'px');
	});
	var n4=0;
	$('.next4').click(function(event) {
		n4++;
		if(n4>=2){n4=1}
		$('.plan .ul-four').css('margin-top', -52*n4+'px');
	});




	$('#pp2').click(function(event) {
		$('.fade-in').toggle()
	});

	$('.img-top2').click(function(event) {
		$('.fade-in').toggle()
	});

})