$(document).ready(function() {

	$(window).scroll(function() {
		if($(this).scrollTop() > 65) {
			$("header").css("background-color", "rgba(244, 244, 244, 0.8)").fadeIn();
    			$("header").css("box-shadow", "0 3px 5px #000").fadeIn();
		}else {
			$("header").css("background-color", "rgba(244, 244, 244, 1)");
			$("header").css("box-shadow", "none");
		}
    			
	}); //END window
}); //END document