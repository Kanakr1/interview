// Write a recursive function to multiply two positive integers without using the * operator. You can use addition, 
// subtraction, and bit shifting, but you should minimize the number of those operations.

let recursiveMultiply = (a, b, product = 0) => {
  if (a === 0 || b === 0) {
    return product;
  }
  return recursiveMultiply(a, --b, product + a);
}

let product = recursiveMultiply(5, 2);
console.log(product);