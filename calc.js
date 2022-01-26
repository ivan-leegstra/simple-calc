const botones = document.querySelectorAll('button');
var second = document.getElementById('sec');
var main = document.getElementById('main');


for (let i = 0; i < botones.length; i++) {
	const element = botones[i];
	element.addEventListener('click', function() {
		element.value == "="? (second.value=main.value,
								 main.value=eval(second.value)):
		element.value == "C"? (second.value="",
							     main.value=""):
		element.value == "back"? main.value=main.value.substring(0,main.value.length-1):
		
		main.value=main.value + element.value;
	})};