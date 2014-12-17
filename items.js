function Item(name, numUses, power) {
    this.name = name;
    this.uses = numUses;
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

//starting weapons
var crowbar = new Item("crowbar", 1, 2);
crowbar.location = "Dark Room";

//miscellaneous items
var cup = new Item("cup", 999, 2);
var groundhogFood = new Item("groundhog food", 3, 5);

//healing items
var potion = new Item("potion", 1, 10);
var maxPotion = new Item("max potion", 1, 30 - player.health);
