var locationList = [];

//location constructor
function location(name, description){
	this.name = name;
	this.description = description;
	this.items = [];
}

//first three locations and descriptions
var darkRoom = new location("dark room", "dark");
var fratHouse = new location("Frat House", "still dark");
var groundhogHole = new location("Groundhog Hole", "even darker");

//pushes locations to the locationList array
locationList.push(darkRoom, fratHouse, groundhogHole);

//adjacency matrix
var connectionList = [
	//0 1 2
     [0,1,0],
     [0,0,1],
     [0,1,0]
];

//map object that stores the arrays
var map = {
	locations : locationList,
	connections : connectionList
};

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
//adds locations to the location matrix
map.locations = [
	//placeholder
	new location("name", "descrip")
];

function connect(matrix, i, j){
	matrix[i][j] = 1;
	matrix[j][i] = 1;
}

function disconnect(matrix, i, j){
	matrix[i][j] = 0;
	matrix[j][i] = 0;
}
*/

//runs the test function
test();
