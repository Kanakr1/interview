// Write a method to compute all permutaions of a string of unique characters. 

let permutaions = (string, prefix = '', result = []) => {
  if (!string) {
    result.push(prefix);
    return result;
  }

  for (let i = 0; i < string.length; i++) {
    permutaions(string.slice(0, i) + string.slice(i + 1, string.length), prefix + string[i], result);
  }
  return result;
}

console.log(permutaions('helo'));