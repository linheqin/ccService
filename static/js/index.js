$(function() {
	var Accordion = function(el, multiple) {
		this.el = el || {};
		this.multiple = multiple || false;

		// Variables privadas
		var links = this.el.find('.link');
		// Evento
		links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown);
		this.navTabClick = function(e) {
			$(".nav_item").on("click", function(){
				// alert($(this).index());
				$(".nav_item").removeClass('sel');
				console.log($(this).index());
				$(this).addClass('sel');
				$(".nav_itemco").eq($(this).attr("data-index")).removeClass('none').siblings().addClass('none')
			})
		}	
	}

	Accordion.prototype.dropdown = function(e) {
		var $el = e.data.el;
			$this = $(this),
			$next = $this.next();

		$next.slideToggle();
		$this.parent().toggleClass('open');
		
		$this.children('a').eq(0).addClass('sel');

		if (!e.data.multiple) {
			$el.find('.submenu').not($next).slideUp().parent().removeClass('open');
		};
	}


	var accordion = new Accordion($('#accordion'), false);
	accordion.navTabClick();

});