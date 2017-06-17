// A child is running up a staircase with n steps and can hop either 1 step, 2 steps, or 3 steps at at time. 
// Implement a method to count how many possible ways the child can run up the stairs.

let tripleStep = (n) => {

}

/* Hints

- Approach this from the top down. What is the very last hop the child made?
- If we knew the number of paths to each of the steps before step 100, could we compute the number of steps to 100?
- We can compute the number of steps to 100 by the number of steps to 99, 98, and 97. This corresponds to 
the child hopping 1, 2, or 3 steps at the end. Do we add those or multiply them? That is: Is it 
f(100) = f(99) + f(98) + f(97) or f(100) = f(99) + f(98) + f(97)?
- We multiply the values when it's 'we do this then this.' We add them we it's 'we do this or this.'
- What is the runtime of this method? Think carefully. Can you optimize it?
- Try memoization as a way to optimize an inefficient recursive program.

*/