var x = 0;
var currLocation = locationList[x];

var player = {
	items : [],
	currentLocation : currLocation.name,
	health : 30,

	//looking good, but make it so it can read multi-word inputs
	pickup : function(itemName){
		if(itemName === currLocation.item){
			player.items.push(itemName);
			list = document.querySelector("#inventoryList");
			node = document.createElement("li");
			textNode = document.createElement(itemName);
			textNode.innerHTML = itemName;
			node.appendChild(textNode);
			node.setAttribute("id", itemName);
			list.appendChild(node);
			updateLog("you picked up " + itemName);
		}
		else
			updateLog("There is no such item here");
	},
	
	//same as above
	drop : function(itemName){
		for(i in this.items){
			if(this.items[i] === itemName)
				this.items.splice(i,1);
				document.getElementById(itemName).remove();
				updateLog("You dropped " + itemName);
		}
	},
	
	use : function(itemName){
		if(itemName === currLocation.usableItem){
			updateLog(currLocation.description);
			//if(itemName.uses === 0)
				//player.drop(itemName);
		}
		else
			 updateLog("sorry, You can't use that right now.");
	},
	
	walkto : function(locName){
		if(locName === currLocation.walkableArea){
			currLocation = locationList[x++];
			updateLog(currLocation.description);
		}
		else
			updateLog("Can't go there. Check spelling or try a different location.");
	},
	
	displayLocation : function(){
		area = document.querySelector("#currLoc");
		area.innerHTML = player.currentLocation;
	},
	
	//MAKE CONDITION
	progress : function(){
		if(x<=9){
				currLocation = locationList[x++];
				updateLog(currLocation.description);
		}
		else
			updateLog("YOU WIN! Refresh the page to restart.");
	},
	
	info : function(){
		updateLog(currLocation.description);
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

var execute = function(command) {
	var action = command.action;
	var object = command.object;
	player[action](object);
};

var gameStep = function(str) {
	var cmd = interpret(str);
	execute(cmd);		
};

var updateLog = function(msg){
	document.querySelector("#descrip").value = msg;
}


// game initialization - this also sets up input box
var gameStart = function() {
	player.displayLocation();
	var inputBox = document.querySelector("input");
	inputBox.addEventListener("keyup", function(event){
		if(event.keyCode === 13) {
			gameStep(this.value);
			inputBox.value="";
			player.displayLocation();
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
