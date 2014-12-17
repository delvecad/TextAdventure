var locationList = [];
var locCounter = 0;
var currentLocation = locationList[locCounter];

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
function location(name, description){
	this.name = name;
	this.description = description;
	this.items = [];
	this.actions = [];
	
	this.pickUp = function()
}

//adds locations to the location matrix
locationList = [
	new location("Dark Room", "You awaken to find yourself lying on the floor of a dark room. There is a crowbar lying next to you."),
	new location("Frat House", "still dark"),
	new location("Groundhog Hole", "even darker"),
	new location("Groundhog HQ", "full of groundhogs"),
	new location("River", "smelly"),
	new location("Football Field", "bright"),
	new location("President's Office", "presidential"),
	new location("O'Reilly's Airship", "spooky")	
];

//map object that stores the arrays
var map = {
	locations : locationList,
	connections : connectionList,
	connect: function(from, to){
		var i = this.locations.indexOf(from);
		var j = this.locations.indexOf(to);
		this.connections[i][j] = 1;
		this.connections[j][i] = 1;
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
	//in progress
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
