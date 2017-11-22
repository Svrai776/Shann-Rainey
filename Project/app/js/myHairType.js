$(document).ready(function(){
	var map = getHairTypeMapFromUrl();
	var length = map.length;
	var color = map.color;
	var texture = map.texture;

	var hairType = length + ', ' + color + ' and ' + texture;

	$('.hairType').text(hairType);
	$('.customLength').text(length);
	$('.customColor').text(color);
	$('.customTexture').text(texture);
});