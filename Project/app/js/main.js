$(document).ready(function() {
	// BEGIN: hamburger menu logic
	function onHamburgerClick () {
		var menuIsVisible = $(".menu").is(":visible");
		if(menuIsVisible) {
			$(".menu").hide();
		} else {
			$(".menu").show();
		}
	}

	$("#hamburger").on('click', onHamburgerClick);
	// END: hamburger menu logic
});