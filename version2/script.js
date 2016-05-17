$(document).ready(init);

function init(){
	$(window).scroll(function(event){
		$Nav = $("#Nav");
		$title = $("#title");
		$image = $("#imageHeader");
		if($(window).scrollTop()==0){
			if($Nav.hasClass("onScroll"))
				$Nav.removeClass("onScroll");
			if($title.hasClass("titleOnScroll"))
				$title.removeClass("titleOnScroll");
			if($image.hasClass("imHOnScroll"))
				$image.removeClass("imHOnScroll");
		}else{
			if(!$Nav.hasClass("onScroll"))
				$Nav.addClass("onScroll");
			if(!$title.hasClass("titleOnScroll"))
				$title.addClass("titleOnScroll");
			if(!$image.hasClass("imHOnScroll"))
				$image.addClass("imHOnScroll");
		}


		$("body section").each(function() {
			if(isScrolledIntoView($(this)))
				update_indicator(this.id);
		})

		function isScrolledIntoView($elem)
		{
		
		
		    var $window = $(window);

		    var docViewTop = $window.scrollTop();
		    var docViewBottom = docViewTop + $window.height();

		    var elemTop = $elem.offset().top;
		    var elemBottom = elemTop + $elem.height();
		    return elemTop <= (docViewTop+docViewBottom)/2;
		}

		function update_indicator(id) {
			$(".menu-item").each(function() {
				$(this).removeClass("red");
			})
			if(!$(window).scrollTop()==0){
			if(id=="objetivos")
				$("#uno").addClass("red");
			if(id=="home")
				$("#dos").addClass("red");
			if(id=="intro")
				$("#tres").addClass("red");
		}

		}
	});
}