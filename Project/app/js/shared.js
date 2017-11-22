function getParameterByName(name) {
    var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}

function getLinkQuery(length, color, texture) {
	var query = '?';
	query += 'length=' + length;
	query += '&color=' + color;
	query += '&texture=' + texture;
	return query;
}

function getHairTypeMapFromUrl() {
	var map = {};
	map.length = getParameterByName('length');
	map.color = getParameterByName('color');
	map.texture = getParameterByName('texture');
	return map;
}

