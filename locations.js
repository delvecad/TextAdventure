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

locationList.push(darkRoom, fratHouse, groundhogHole);