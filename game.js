
var runSomeTests = function(){

	var descrip = document.getElementById('descrip');

	console.log(descrip.tagName);
	console.log(descrip.innerHTML);
	console.log(descrip.parentNode.tagName);

	var headings document.querySelectorAll('aside > h1');

	for(i = 0; i < headings.length; i++){
		console.log(headings[i].innerHTML);
	}

	//ADD CODE TO EXPERIMENT WITH DOM
	var listOfItems = document.querySelector('#inventory > ul');
	var listOfHelp = document.querySelector('#help > ul');


};

window.onload = runSomeTests;
	

