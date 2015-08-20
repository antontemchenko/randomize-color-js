$( document ).ready(function() {
	function go(){
		return Math.round(Math.random() * 255);
	}

	$('button').click(function(){
		$('div').css({ "background-color": "rgb(" + go() + "," + go() + "," + go() + ")" });	
	})
});