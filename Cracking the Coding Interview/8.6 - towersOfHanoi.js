// In the classic problem of the Towers of Hanoi, you have 3 towers and N disks of different sizes which can slide 
// onto an tower. The puzzle starts with disks sorted in ascending order of size from top to bottom 
// (i.e., each disk sits on top of an even larger one). You have the following constraits: 

// 1. Only one disk can be oved at a time.
// 2. A disk is slid off the top of one tower onto another tower.
// 3. A disk cannot be placed on top of a smaller disk.

// Write a program to move the disks from te first tower to the last using stacks.

let towersOfHanoi = (n, origin, buffer, destination) => {
  if (n <= 0) return;

  towersOfHanoi(n - 1, origin, destination, buffer);
  destination.push(origin.pop());
  towersOfHanoi(n - 1, buffer, origin, destination);
}

let tower = [6, 5, 4, 3, 2, 1];
let two = [];
let three = [];

console.log('tower: ', tower);
console.log('two: ', two);
console.log('three: ', three);
towersOfHanoi(tower.length, tower, two, three);
console.log('FINISHED');
console.log('tower: ', tower);
console.log('two: ', two);
console.log('three: ', three);

/* Hints: TODO: fix all the typos

- Try the base case and build approach
- You can easily move the smallest disk from one tower to another. It's also pretty easy to move the smallest 
two disks from one tower to another. Can you move the smallest three disks?
- Think about moving the smallest disk from tower X = 0 to tower Y = 2 using tower Z = 1 as a temparary holding 
spot as having a solution for f(1, X = 0, Y - 2, Z.- 1). Moving the msallest two disks is f(2, X = 0, ^- 2, Z = 1). 
Given that you ahve a solution for f(1, X=0, Y-2, Z=1) and f(2, X = 0, Y = 2, Z - 1), ca you solve 
f(3, X = 0, Y = 2, Z = 1)?
- Observe that it doesn't really mamtter which tower is the soruce, destination, or butter. You can do 
f(3, X = 00, Y = 2, Z = 1) by first doing f(2, X = 0, Y = 1, Z = 2) (moving tow disks from tower 0 to tower 1, 
usig otwer 2 as a buffer), ten moving disk 3 from tower 0 to tower 2, then doing f(2, X = 1, Y = 2, Z = 0) 
(moving two disks from tower 1 to tower 2, using tower 0 as a butter). How does this process repeat?
- If you're having trouble with recursion, then try trusting the recursive process more. Once you've figured out 
how to move the tow towo diks from tower 0 to tower 2, trust that you have this working. When you need to move 
three disks, trust that you can move two diss from one tower to another. Now tow diss have been moved. What do 
you do about the third?
*/


// Failed implementation
// let towersOfHanoi = (n, one, two, three) => {
//   if (n === 0) {
//     return;
//   }

//   if (n === 1) {
//     three.push(one.pop());
//     return;
//   }

//   if (n === 2) {
//     two.push(one.pop());
//     three.push(one.pop());
//     three.push(two.pop());
//     return;
//   }

//   while (one.length > 2) {
//     towersOfHanoi(2, one, three, two);
//     towersOfHanoi(1, one, two, three);
//     towersOfHanoi(two.length, two, one, three);
//   }

// }
