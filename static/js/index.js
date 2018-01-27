$(function() {

	$(document).on("click",".accordion>li", function(){
		var _this = $(this);
		_this.addClass('open').siblings("li").removeClass('open');

	})
	$(document).on("click",".nav_item", function(){
		var _this = $(this);

		var indexs = _this.attr("data-index");
		console.log(indexs);


		$(".nav_item").removeClass('sel');
		_this.addClass('sel');
		_this.parents(".navul_left").siblings(".navul_right").find('.nav_itemco').eq(indexs).removeClass('none').siblings().addClass('none');
	})

});