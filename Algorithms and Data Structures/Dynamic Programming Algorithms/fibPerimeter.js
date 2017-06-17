function perimeter(n) { // get perimeter of n + 1 fib squares 
  //(ie first square has side of 1, next has side of 1, calc perimeter)
  if (n === 1) { return 1 * 4; }
  if (n === 2) { return (1 + 1) * 4; }
  let first = 1;
  let second = 1;
  let total = 1;
  for (let i = 0; i < n; i++) {
    let third = first + second;
    total += second;
    first = second;
    second = third;
  }
  return total * 4;
}

let result = perimeter(5);
console.log(result);