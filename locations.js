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

var map = {
	locations : locationList,
	connections : connectionList
};

var test = function(){
	for(i=0, i<map.locations.lenth, i++){
		if(locations[map.connections[0]] == 1)
			return map[i,1];
	}

}
