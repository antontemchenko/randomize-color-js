# randomize-color-js
Randomize color with JS

#Demo
[Watch demo](http://anton.temchenko.com.ua/dev/randomize-color-js/)

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
