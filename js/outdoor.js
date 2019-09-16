/*
* @Author: hp
* @Date:   2019-09-03 11:18:07
* @Last Modified by:   hp
* @Last Modified time: 2019-09-03 14:28:42
*/

$(function(){
	var n=0;
	var timer1;
	timer1=setInterval(function(){
		n++;
		if(n>5){n=0}
		$('.box1 .pic img').attr('src', '../img/liu'+n+'.jpg');
	},1000)

})