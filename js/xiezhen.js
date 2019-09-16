/*
* @Author: hp
* @Date:   2019-09-06 17:01:53
* @Last Modified by:   hp
* @Last Modified time: 2019-09-06 17:18:41
*/

$(function(){
	$('.bt2').click(function(event) {
		$('.content2-2').show()
		$('.content2').hide()
		$(this).addClass('add')
		$('.bt1').removeClass('add')
	});
	$('.bt1').click(function(event) {
		$('.content2-2').hide()
		$('.content2').show()
		$(this).addClass('add')
		$('.bt2').removeClass('add')
	});
})