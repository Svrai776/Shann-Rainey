$(document).ready(function(){

	var images = [
	"images/food1.jpg",
	"images/food2.jpg",
	"images/food3.jpg",
	"images/food4.jpg",
	"images/food5.jpg",
	"images/food6.jpg",
	"images/food7.jpg",
	"images/food8.jpg"

	],

	i=0;
	
	$("#prevButton").click(function(){
		i--;

		if(i < 0) {
			i = images.length - 1;
		}
		$("#image").attr("src", images[i]);

	});
	$("#nextButton").click(function(){
		i++;

		if(i > images.length){
			i=0;
		}


		$("#image").attr('src', images [i]);
		
	});

});