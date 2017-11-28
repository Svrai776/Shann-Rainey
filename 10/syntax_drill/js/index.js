$('.actions').click(function() {
$("body").css("background-color","#343D46");
$("body, p").css("color", "#fff");

});

$(".slideUp").click(function(){
	$(".slideUpBox").slideUp("slow");
})

$(".slideDown").click(function(){
	$(".slideDownBox").slideDown("fast");
})


$(".toggle").click(function(){
	$(".toggleBox").slideToggle("slow");
})

$("#showBoxes").click(function(){
	$('.box').show();
})

$("#hideBoxes").click(function(){
	$(".box").hide("slow");
});

$("h2#firstHeader").click(function() {
	$("ul").children().css({
		"font-weight" : "bold",
		"font-size": 16
	});
});

$("img").click(funtion() {
	$('img').attr('src',"http://www.zastavki.com/pictures/originals/2013/_SWAG_on_a_gray_background_047286_.png");
});
});

