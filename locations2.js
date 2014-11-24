var locationList = [];

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
}

//adds locations to the location matrix
map.locations = [
	new location("dark room", "dark");
	new location("Frat House", "still dark");
	new location("Groundhog Hole", "even darker");
	new location("Groundhog HQ", "full of groundhogs");
	new location("River", "smelly");
	new location("Football Field", "bright");
	new location("President's Office", "presidential")'
	new location("O'Reilly's Airship", "menacing");
	
];

//map object that stores the arrays
var map = {
	locations : locationList,
	connections : connectionList,
	connect: function(from, to){
		var i = this.locations.indexOf(loc1);
		var j = this.locations.indexOf(loc2);
		this.connections[i][j] = 1;
		this.connections[j][i] = 1;
	}
};

//connects locations
map.connect("darkRoom", "fratHouse");
map.connect("fratHouse", "groundhogHole");


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
