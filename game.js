var player = {items : []}
	
player.pickup = function(itemName){
	player.items.push(itemName);
	return items;
};
	
player.drop : function(itemName){
	for(i in itemName){
		if(player.items[i] === itemName){
			player.items.splice(i, 1);				
		}
	}
return items
};


var interpret = function(str){
	var emptyObject = {action,object};
	
	var trimStr = str.trim();
	var splitStr = trimStr.split(" ");
	emptyObject.action = splitStr.shift();
	emptyObject.object = splitStr.join();
			
};


function execute(command){
	var action = command.action;
	var target = command.target;
	player[action](target);
};

function report(result){
	for(i in player.items){
		var content = document.querySelectorAll(#inventory > ul);
	}
	return content;
};

function gameStep(str){
	var cmd = interpret(str);
	execute(cmd);
	report(cmd.object);
};


var gameStart = function(){
	var inputBox = document.querySelector("input");
	inputBox.addEventListener("keyup", gameStep);
};

window.onload = gameStart;






/*var runSomeTests = function(){

	var descrip = document.getElementById('descrip');

	console.log(descrip.tagName);
	console.log(descrip.innerHTML);
	console.log(descrip.parentNode.tagName);

	var headings document.querySelectorAll('aside > h1');

	for(i = 0; i < hea ⇐  v dings.length; i++){
		console.log(headings[i].innerHTML);
	}

	//ADD CODE TO EXPERIMENT WITH DOM
	var listOfItems = document.querySelector('#inventory > ul');
	var listOfHelp = document.querySelector('#help > ul');

	var listAside = document.querySelector("Aside");


};

window.onload = runSomeTests;
	
*/