var player = {
	items : [],
	currentLocation : "",
	health : 30,


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

	drop : function(itemName){
		for(i in this.items){
			if(this.items[i] === itemName)
				this.items.splice(i,1);
				document.getElementById(itemName).remove();
		}
		return this.items;
	},

	//ASK KAI
	/*go : function(location){
		for(i in locationList){
			if(locationList[i] === location){
				if()
			}
		}
	}*/
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

// game initialization - this also sets up input box
var gameStart = function() {

	var inputBox = document.querySelector("input");
	inputBox.addEventListener("keyup", function(event){
		if(event.keyCode === 13) {
			gameStep(this.value);
			inputBox.value="";
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
