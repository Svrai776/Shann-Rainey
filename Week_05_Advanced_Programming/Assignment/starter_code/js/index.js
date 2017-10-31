$(document).ready(function() {

	var cityField = $("#city-type");
	var cities = ['NYC', 'SF', 'LA', 'ATX', 'SYD'];

	for (var i = 0; i < cities.length; i++) {
		var city = cities[i];
		var option = $('<option>' + city + '</option>');
		option.val(city);
		cityField.append(option);
	}

	$("form").submit(function (event) {
		var cityFieldValue = cityField.val();

		if(cityFieldValue === "New York" ||
		 cityFieldValue === "New York City"|| 
		 cityFieldValue  ==="NYC") {

			$("body").css("background", "url('images/nyc.jpg')");
			$("body").addClass("nyc");

		} 
		else if (cityFieldValue === "San Fransicso" ||
		 cityFieldValue === "Bay Area"|| 
		 cityFieldValue  ==="SF") {

			$("body").css("background", "url('images/sf.jpg')");
			$("body").addClass("sf");

		} 
		else if (cityFieldValue === "Los Angeles" ||
		 cityFieldValue === "LA"|| 
		 cityFieldValue  ==="LAX") {

			$("body").css("background", "url('images/la.jpg')");
			$("body").addClass("la");
		} 
		else if (cityFieldValue === "Austin" ||
		 cityFieldValue === "ATX") {

			$("body").css("background", "url('images/austin.jpg')");
			$("body").addClass("austin");

		} 
		else if (cityFieldValue === "Sydney"|| 
		 cityFieldValue  ==="SYD") {

			$("body").css("background", "url('images/sydney.jpg')");
			$("body").addClass("syndey");
		}

		event.preventDefault();
	});

})
