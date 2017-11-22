$(document).ready(function(){
	$('.hairTypeResult').hide();


	$('.submitContainer button').on('click', function(){
		var texture = $('[name=texture]').val();
		var color = $('[name=color]').val();
		var length = $('[name=length]').val();

		var hairType = length + ', ' + color + ' and ' + texture;
		$('.hairType').text(hairType);
		$('.hairTypeResult').show();
		$('.hairTypeForm').hide();
		$('.hairTypeLink')[0].href += getLinkQuery(length, color, texture);

		return false;
	});

});