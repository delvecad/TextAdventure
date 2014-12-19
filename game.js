var x = 0;
var currLocation = locationList[x];
var stepCount = 0;

//player object
var player = {
	name : "",
	items : [],
	currentLocation : currLocation.name,

	//picks up the item available in the location, if there is one
	pickup : function(itemName){
		if(itemName === currLocation.item){
			currLocation.itemObtained = true;
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
	
	//drops the item
	drop : function(itemName){
		for(i in this.items){
			if(this.items[i] === itemName)
				this.items.splice(i,1);
				document.getElementById(itemName).remove();
				updateLog("You dropped " + itemName);
		}
	},
	
	//makes the player use the item
	use : function(itemName){
		if(itemName === currLocation.usableItem){
			if(currLocation.itemObtained === true){
				if(itemName === "shovel" || itemName === "sword" || itemName === "shield" || itemName === "helmet" || itemName === "jetpack" || itemName === "paper"){
					currLocation = locationList[x++];
					updateLog(currLocation.description);
				}
			}
		}
		else
			 updateLog("sorry, You can't use that right now.");
	},
	
	//moves the player to a destination
	walkto : function(locName){
		if(locName === currLocation.walkableArea){
			currLocation = locationList[x++];
			updateLog(currLocation.description);
		}
		else
			updateLog("Can't go there. Check spelling or try a different location.");
	},
	
	//displays the player's location on the side of the screen
	displayLocation : function(){
		area = document.querySelector("#currLoc");
		area.innerHTML = player.currentLocation;
	},
	
	//moves the player to the next location
	progress : function(){
		if(x<=9){
				currLocation = locationList[x++];
				updateLog(currLocation.description);
		}
		else
			updateLog("YOU WIN! Refresh the page to restart.");
	},
	
	//the help function. It brings you back to the screen with all of the area's information
	info : function(){
		updateLog(currLocation.description);
	},
	
	//sets the player's name
	mynameis : function(name){
		this.name = name;
		document.querySelector("#playername").innerHTML = name;
		locationList[x++];
		updateLog(this.name + ", " + currLocation.description);
	}
		
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

//executes the command
var execute = function(command) {
	var action = command.action;
	var object = command.object;
	player[action](object);
};

var gameStep = function(str) {
	var cmd = interpret(str);
	execute(cmd);		
};

//updates the text box
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
		}	
	});	
	stepCount++;
};

window.onload = gameStart;
