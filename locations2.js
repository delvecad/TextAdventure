var connectionList = [
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0]
	
];


//location constructor
function Location(name, description, item, walkableArea){
	this.name = name;
	this.description = description;
	this.item = item;
	this.walkableArea = walkableArea;
	this.actions = [];
}

//adds locations to the location matrix
var locationList = [
	new Location("Dark Room", "You awaken to find yourself lying on the floor of a dark room. There is a large piece of paper lying next to you.", paper.name, "door"),
	new Location("Field", "The moonlight nearly blinds you. There is a shovel a few paces ahead of you and a hole that you could widen enough to fit through.", shovel.name, "hole"),
	new Location("Groundhog Hole", "Looks like you found a hive of groundhogs. There's a light at the end of the tunnel though. Maybe try walking toward it.", " ", "light"),
	new Location("Groundhog HQ", "Looks like you found Groundhog HQ. There are groundhogs everywhere. But how do you get out? There's nothing here for you but...that sword on the ground! Why is it here? Who cares. Grab it!", sword.name, " "),
	new Location("River", "Touching the sword teleported you to the banks of the Hudson just off of campus. Weird/convenient, right? It's almost like the guy who made this was running seriously low on time. Theres a shield a few feet away from you. See where that teleports you.", shield.name, " "),
	new Location("Football Field", "Cool, that worked again. Now it looks like you're at the football field. Yikes, now you'll HAVE to lose the game. Go pick up that football helmet that was left out. It'll probably do the same thing as usual.", helmet.name, " "),
	new Location("President's Office", "Now you're getting the hang of it! And it looks like I'm *cough* getting the hang of javascript. Looks like you're in the President Murray's office. Nice Security. Grab his jetpack and get out of there.", jetpack.name, " "),
	new Location("O'Reilly's Airship", "That jetpack shot you right up to Bill O'Reilly's airship! Fun fact: Marist's favorite son films every episode of his show from a mile above campus. Maybe you can fix that. Try using the sword on the guy."),
	new Location("O'Reilly's Arena", "Looks like he shattered your blade with his conservative agenda. He then transforms into a robot. His name is Robo'reilly. Try using that piece of paper you found earlier. It's all you've got left.", paper.name, " "),
];


//map object that stores the arrays
var map = {
	locations : locationList,
	connections : connectionList,
	connect: function(from, to){
		var i = this.locations.indexOf(from);
		var j = this.locations.indexOf(to);
		//map.connections[i][j] = 1;
		//map.connections[j][i] = 1;
	}
};

//connects locations
map.connect("Dark Room", "Frat House");
map.connect("Frat House", "Groundhog Hole");
map.connect("Groundhog Hole", "Groundhog HQ");
map.connect("Groundhog HQ", "River");
map.connect("River", "Football Field");
map.connect("Football Field", "President's Office");
map.connect("President's Office", "O'Reilly's Airship");

//displays current location
var displayLocation = function(){
	var area = document.getElementId("#currLoc");
	area.innerHTML = player.currentLocation.name;
}

//tests the adjacency function
var test = function(){
	var row = map.connections[0];
	for(i in map.connections){
		var value = row[i];
		if(value == 1)
			console.log(map.locations[i].name);
	}

}


/*
//call the connectionList matrix and connect room i to room j
function connect(matrix, i, j){
	matrix[i][j] = 1;
	matrix[j][i] = 1;
}

//call the connectionList matrix aonnect room i to room j
function disconnect(matrix, i, j){
	matrix[i][j] = 0;
	matrix[j][i] = 0;
}
*/


//runs the test function
test();
