/*
* @Author: hp
* @Date:   2019-09-03 15:11:33
* @Last Modified by:   hp
* @Last Modified time: 2019-09-04 11:13:24
*/

$(function(){
	$('.dot p').mouseenter(function(event) {
		$(this).css('background-color', 'yellow');
	});
	$('.dot p').mouseleave(function(event) {
		$(this).css('background-color', '#fff');
	});
})