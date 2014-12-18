var player = {
	items : [],
	currentLocation : "",
	health : 30,

	//looking good, but make it so it can read multi-word inputs
	pickup : function(itemName){
		player.items.push(itemName);
		list = document.querySelector("#inventoryList");
		node = document.createElement("li");
		textNode = document.createElement(itemName);
		textNode.innerHTML = itemName;
		node.appendChild(textNode);
		node.setAttribute("id", itemName);
		list.appendChild(node);
	},
	
	//same as above
	drop : function(itemName){
		for(i in this.items){
			if(this.items[i] === itemName)
				this.items.splice(i,1);
				document.getElementById(itemName).remove();
		}
	},
	
	use : function(itemName){
		//if you are in the room where you can use item
		if(currentLocation === itemName.location){
			itemName.use;
			if(itemName.uses === 0)
				player.drop(itemName);
		}
		else{
				var descrip = document.getElementById("#descrip");
				descrip.value = "sorry, You can't use that right now.";
			}
	},
	
	//MAKE CONDITION AND LINK TO LOCATIONS2.JS
	progress : function(){
		locCounter++;
		console.log(currentLocation.name);
	},
}

//parse commands	
var interpret = function(str) {
	var emptyObj ={};
	var trimStr = str.trim();
	var splitStr = trimStr.split(" ");
	var firstElem = splitStr.shift();
	emptyObj.action = firstElem;
	var remainingElem = splitStr.join(" ");
	emptyObj.object = remainingElem;
	return emptyObj;
};

var execute = function (command) {
	var action = command.action;
	var object = command.object;
	player[action](object);
};

var gameStep = function(str) {
	var cmd = interpret(str);
	execute(cmd);		
};

var updateLog = function(){
	
}

// game initialization - this also sets up input box
var gameStart = function() {

	var inputBox = document.querySelector("input");
	inputBox.addEventListener("keyup", function(event){
		if(event.keyCode === 13) {
			gameStep(this.value);
			inputBox.value="";
			displayLocation();
			//updates
			//
			//player.inventory(); 
			//player.avaliableActions(player.currentLocation); 
			//playerLocation(player.currentLocation.name);
		}	
	});	
};

var gameVictory = function(){
	//alert player, stop default action
};

var gameDefeat = function(){
	//alert player, reset game
};

window.onload = gameStart;
