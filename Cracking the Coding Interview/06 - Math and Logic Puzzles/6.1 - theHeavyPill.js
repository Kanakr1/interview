// You have 20 bottles of pills. 19 bottles have 1.0 gram pills, but one has pills of weight 1.1 grams. Given a 
// scale that provides an exact measurement, how would you find the heavy bottle? You can only use the scale once.

// 1 - 1g or 1.1g
// 2 - 2g or 2.2g
// 3 - 3g or 3.3g
// 4 - 4g or 4.4g
// 5 - 5g or 5.5g
// 6 - 6g or 6.6g
// 7 - 7g or 7.7g
// 8 - 8g or 8.8g
// 9 - 9g or 9.9g
// 10 - 10g or 11g
// 11
// 12
// 13
// 14
// 15
// 16
// 17
// 18
// 19
// 20 - 20g or 22g

let total = 0;
for (let i = 1; i < 21; i++) {
  total += i;
}
console.log(total);

// Total if everything was 1g = 210;
// 212 = the 20 pills are 1.1,
// 211.9 = the 19 pills are 1.1, 
// etc.

/* Hints: 

- You can only use the scale once. This means that all, or almost all, of the bottle must be used. They also must 
be handled in different ways or else you coulnd't distinguish between them.
- What happens if you put one pill from each bottle on the scale? What if you put two pills from each bottle on the scale?
- Imagine there were just three bottles and one had heavier pills. Suppose you put different numbers of pills from each 
bottle on the scale (for example, bottle 1 has 4 pills, bottle 2 has 2 pills, and bottle 3 has 9 pills). 
What would the scale show?
- You should be able to have an equation that tells you the heavy bottle based on the weight.

*/