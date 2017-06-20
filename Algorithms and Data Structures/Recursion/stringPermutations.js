// Find all permutations of a string

var permutations = function(s, prefix, result) {
  prefix = prefix || '';
  result = result || [];
  if (s === '') {
    result.push(prefix); 
    return result;
  }

  for (let i = 0; i < s.length; i++) {
    result = permutations(s.substring(0, i) + s.substring(i + 1, s.length), prefix + s[i], result);
  }
  return result;
}

console.log(permutations('blah').sort());