# randomize-color-js
Randomize color with JS

# code
```
function go(){
	return Math.round(Math.random() * 255);
}

function getColor(){
	var r = go();
	var g = go();
	var b = go();
	return "rgb(" + r + "," + g + "," + b + ")"
}
//example of return: "rgb(175, 255, 250)"
```
