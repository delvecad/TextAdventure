function Item(name, numUses, power) {
    this.name = name;
    this.uses = numUses;
    this.power = power;
}

// You might want to have some functions for your items... here are just a few suggestions.

Item.prototype.use = function() {
    this.uses--;
}

Item.prototype.usable = function() {
    return this.uses > 0;
}

//strong weaons
var sword = new Item("sword", 999, 10);

//starting weapons
var crowbar = new Item("crowbar", 999, 2);

//miscellaneous items
var cup = new Item("cup", 999, 2);
var groundhogFood = new Item("groundhog food", 3, 5);

//healing items
var potion = new Item("potion", 1, 10);
var maxPotion = new Item("max potion", 1, 30 - player.health);
