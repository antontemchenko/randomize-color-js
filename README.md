# randomize-color-js
Randomize color with jQuery\

# code
```
function go(){
	return Math.round(Math.random() * 255);
}

$('button').click(function(){
	$('div').css({ "background-color": "rgb(" + go() + "," + go() + "," + go() + ")" });	
})
```
