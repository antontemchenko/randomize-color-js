$( document ).ready(function() {
	function go(){
		return Math.round(Math.random() * 255);
	}

	function componentToHex(c) {
	    var hex = c.toString(16);
	    return hex.length == 1 ? "0" + hex : hex;
	}

	$('button').click(function(){
		getColor();
	});

	function getColor() {
		var r = go();
		var g = go();
		var b = go();
		$('div').css({ "background-color": "rgb(" + r + "," + g + "," + b + ")" });	
		$('.dec').html("rgb(" + r + "," + g + "," + b + ") &nbsp;" +  "#" + componentToHex(r) + componentToHex(g) + componentToHex(b));
	}

	getColor();
});