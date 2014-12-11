unction Item(name, numUses, power) {
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
