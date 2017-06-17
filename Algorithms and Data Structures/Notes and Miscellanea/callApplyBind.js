var Rabbit = function(type, name) {
  this.type = type;
  this.name = name;
}

Rabbit.prototype.sayName = function() {
  console.log(this.name + ' says \'Hi\'.');
};

var KillerRabbit = function(name, teeth) {
  Rabbit.call(this, 'killer', name);
  this.teeth = teeth;
}

console.log('Should be KillerRabbit:'); 
console.log(KillerRabbit.prototype.constructor); // This is before inheriting Rabbit's prototype - should be KillerRabbit
KillerRabbit.prototype = Object.create(Rabbit.prototype); // <-- gives KillerRabit Rabbit's prototype methods
KillerRabbit.prototype.kill = function(rabbit) {
  console.log(this.name + ' the killer rabbit murdered ' + rabbit.name + '.');
}

var robert = new Rabbit('fluffy', 'Robert');
robert.sayName();

var butch = new KillerRabbit('Butch', 10);
butch.sayName(); // Needs Object.create
butch.kill(robert);

console.log('Before setting constructor back to KillerRabbit after inheriting from Rabbit:');
console.log(KillerRabbit.prototype.constructor); // This is from setting the KillerRabbit prototype to Object.create(Rabbit.proto)
KillerRabbit.prototype.constructor = KillerRabbit; // Assign it properly
console.log('After setting constructor back to KillerRabbit after inheriting from Rabbit:');
console.log(KillerRabbit.prototype.constructor); // Now it correctly points to the constructor

/* Bind */ 

console.log('Bound function: Robert says \'Hi\'.');
butch.sayName.bind(robert)();

/* Call */ 

console.log('Called function: ');
robert.sayName.call(butch);

var HordingRabbit = function(name) {
  Rabbit.call(this, 'hording', name);
  this.items = [];
}

HordingRabbit.prototype = Object.create(Rabbit.prototype);
HordingRabbit.prototype.constructor = HordingRabbit;

HordingRabbit.prototype.horde = function(item1, item2) {
  this.items = this.items || [];
  this.items.push(item1);
  this.items.push(item2);
}

/* Apply */ 

var tiff = new HordingRabbit('Tiff');
tiff.horde.apply(butch, ['knife', 'duct tape']);
console.log(butch.items);

/* Object.create() */

var tree = {
  leaf: 'green',
  bark: 'brown'
};

var redwood = Object.create(tree);
redwood.leaf = 'evergreen';
console.log(redwood.leaf);
console.log(tree.leaf);
tree.wood = 'hard';
console.log(redwood.wood); // Redwood now performs look up in its own object, 
// and if nothing is found, will search the object it inherited from

console.log(!!redwood['wood']);
console.log(redwood.hasOwnProperty('wood'));


