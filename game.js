var player = {
	items : [],
	currentLocation : "",
	health : 30,


	pickup : function(itemName){
		player.items.push(itemName),
		list = document.querySelector("#inventoryList"),
		node = document.createElement("li"),
		textNode = document.createElement(itemName),
		node.appendChild(textNode),
		list.appendChild(node)	
	},

	drop : function(itemName){
		for(i in items){
			if(items[i] === itemName)
				items.splce(i,1);
		}
		return player.items;
	}

	//ASK KAI
	/*go : function(location){
		for(i in locationList){
			if(locationList[i] === location){
				if()
			}
		}
	}*/
}

var interpret = function(input) {
    var cmd = {};
    var tokens = input.trim().toLowerCase().split(" ");
    cmd.action = tokens.shift();
    cmd.target = tokens.join(" ");
    return cmd;
}


function execute(command){
	var action = command.action;
	var target = command.target;
	player[action](target);
};

function report(result){
	for(i in player.items){
		var content = document.querySelectorAll("#inventory" > ul);
	}
	return content;
};

function gameStep(input){
	var cmd = interpret(input); //parses user input
	var result = execute(cmd); //runs the desired command
	report(result); //displays the results on the screen
};

function customizePlayer(input){
	var cmd = interpret(input);
	//********COME BACK TO THIS TO FLESH IT OUT*********
}

function displayInventory() {
    var i, item, inventory;
    inventory = document.querySelector("#inventory > ul");
    clearContent(inventory);
    for (i in player.items) {
        item = document.createElement ("li");
        item.textContent = player.items[i];
        inventory.appendChild(item);
    }
}


	var gameStart = function(){
	var inputBox = document.querySelector("input");
	inputBox.addEventListener("keyup", gameStep);
		if(event.keyCode === 13){
			gameStep();
	};	
}

window.onload = gameStart;
