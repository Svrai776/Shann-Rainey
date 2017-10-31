$(document).ready(function() {

	$("form").submit(function (event) {

		var inputField = $("input").val();
		
		if(inputField === "New York" ||
		 inputField === "New York City"|| 
		 inputField  ==="NYC") {

			$("body").css("background", "url('images/nyc.jpg')");
			$("body").addClass("nyc");

		} 
		else if (inputField === "San Fransicso" ||
		 inputField === "Bay Area"|| 
		 inputField  ==="SF") {

			$("body").css("background", "url('images/sf.jpg')");
			$("body").addClass("sf");

		} 
		else if (inputField === "Los Angeles" ||
		 inputField === "LA"|| 
		 inputField  ==="LAX") {

			$("body").css("background", "url('images/la.jpg')");
			$("body").addClass("la");
		} 
		else if (inputField === "Austin" ||
		 inputField === "ATX") {

			$("body").css("background", "url('images/austin.jpg')");
			$("body").addClass("austin");

		} 
		else if (inputField === "Syndey"|| 
		 inputField  ==="SYD") {

			$("body").css("background", "url('images/syndey.jpg')");
			$("body").addClass("syndey");
		}

		event.preventDefault();
	});

})
