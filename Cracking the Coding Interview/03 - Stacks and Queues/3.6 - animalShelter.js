// An animal shelter, which holds only dogs and cats, operates on a strictly 'first in, first out' basis. People must adopt 
// either the 'oldest' (based on arrival time) of all animals at the shelter, or they can select whether they would prefer 
// a dog or a cat (and will receive the oldest animal of that type). They cannot select which specific animal they would 
// like. Create the data structures to maintian this system and implement operations such as enqueue, dequeueAny, dequeueDog, 
// and dequeueCat. You may use the built in LinkedList data structure.

class AnimalShelter {
  constructor() {
    this.dogs = [];
    this.cats = [];
  }

  enqueue(animal) {
    animal.date = new Date();
    if (animal.type === 'dog') {
      this.dogs.push(animal);
    } else {
      this.cats.push(animal);
    }
  }

  dequeueAny() {
    if (this.dogs[0].date < this.cats[0].date) {
      return this.dogs.shift();
    } else {
      return this.cats.shift();
    }
  }

  dequeueCat() {
    return this.cats.shift();
  }

  dequeueDog() {
    return this.dogs.shift();
  }

  peekAnimals() {
    console.log(this.dogs);
    console.log(this.cats);
  }
}

let shelter = new AnimalShelter();
setTimeout(() => {
  shelter.enqueue({type: 'dog', name: '1'});
}, 2);
setTimeout(() => {
  shelter.enqueue({type: 'dog', name: '2'});
}, 4);
setTimeout(() => {
  shelter.enqueue({type: 'cat', name: '3'});
}, 6);
setTimeout(() => {
  shelter.enqueue({type: 'dog', name: '4'});
}, 8);
setTimeout(() => {
  shelter.enqueue({type: 'cat', name: '5'});
}, 10);
setTimeout(() => {
  shelter.enqueue({type: 'cat', name: '6'});
}, 12);
setTimeout(() => {
  shelter.enqueue({type: 'cat', name: '7'});
}, 14);
setTimeout(() => {
  shelter.enqueue({type: 'dog', name: '8'});
}, 16);
setTimeout(() => {
  shelter.enqueue({type: 'cat', name: '9'});
}, 18);

setTimeout(() => {
  // shelter.peekAnimals();

  console.assert(shelter.dequeueAny().name === '1');
  console.assert(shelter.dequeueCat().name === '3');
  console.assert(shelter.dequeueCat().name === '5');
  console.assert(shelter.dequeueAny().name === '2');
  console.assert(shelter.dequeueAny().name === '4');
  console.assert(shelter.dequeueDog().name === '8');
}, 30);






