function Item(name, numUses, power) {
    this.name = name;
    this.uses = numUses;
    this.used = false;
    this.power = power;
    this.location = "";
}

Item.prototype.use = function() {
    this.uses--;
}

Item.prototype.usable = function() {
    return this.uses > 0;
}

//strong weaons
var sword = new Item("sword", 999, 10);

//a function just in case the program doesn't handle the sword object correctly. Works for now
var updateSword = function(){
	if(currLocation.name === "Groundhog HQ")
		sword.location = "Groundhog HQ";
	else
		sword.location = "O'Reilly's Airship";
};

//starting weapons
var paper = new Item("paper", 1, 2);
paper.location = "Dark Room";

//same purpose as updateSword()
var updatePaper = function(){
	if(currLocation.name === "O'Reilly's Arena")
		sword.location = "O'Reilly's Arena";
	else
		sword.location = "Dark Room";
};

var shovel = new Item("shovel", 1, 2);
shovel.location = "Field";

//miscellaneous items
var shield = new Item("shield", 999, 0);
shield.location = "River";

var helmet = new Item("helmet", 999, 0);
helmet.location = "Football Field";

var jetpack = new Item("jetpack", 999, 0);
jetpack.location = "President's Office";

//healing items
var potion = new Item("potion", 1, 10);
