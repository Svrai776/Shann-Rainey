$(document).ready(function(){
	$('.hairTypeResult').hide();


	$('.submitContainer button').on('click', function(){
		var texture = $('[name=texture]').val();
		var color = $('[name=color]').val();
		var length = $('[name=length]').val();

		var hairType = length + ', ' + color + ' and ' + texture;
		$('.hairType').text(hairType);

		var query = getLinkQuery(length, color, texture);

		$('.container').hide();
		$('.loading').show();
		$('body').addClass('onLoading');

		setTimeout(function() {
			window.location = 'myHairType.html' + query;
		}, 1000);

		return false;
	});

});

$(document).ready(function(){
    $("h2").hover(function(){
        $(this).css("color", "black");
        }, function(){
        $(this).css("color", "white");
    });
    $(".takeThePorosityTest").click(function(){
    	$("html, body").animate({
        scrollTop: $('.porosityTest').offset().top 
    }, 200);
    });

});



