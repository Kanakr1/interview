// Write a method to compute all permutaitons of a string whose characters are not necessarily unique. The list of 
// permutaions should not have duplicates.

function buildFreqTable(string) {
  let map = {};
  for (let char of string) {
    map[char] = map[char] || 0;
    map[char]++;
  }

  return map;
}

function listPerms(string) {
  let map = buildFreqTable(string);
  return getPerms(map, string.length);
}

function getPerms(map, remaining, prefix = '', result = []) {
  // Base case. Permutaions has been completed
  if (remaining === 0) {
    result.push(prefix);
    return result;
  }
  // Try remaining letters for next char, and generate remaining permutaions.
  for (let char in map) {
    if (map[char] > 0) {
      map[char]--;
      getPerms(map, remaining - 1, prefix + char, result);
      map[char]++;
    }
  }
  return result;
}

console.log(listPerms('hello').sort());

/* Hints: 

- You could handle this by just checking to see if there are duplicates before printing them (or adding them to a list). 
You can do this with a hash table. In what case might this be ok? In what case might it not be a very good solution?
- If you haven't solved 8.7 yet, do that first.
- Try getting the count of each character. For example, abcaac has 3 a's 2 c's and 1 b.
- To get all permutaions with 3 As, 3 Cs, and 1 B, you need to first pick a starting character: A, B, or C. if it's 
an A, then you need all permutaions with 2 As, 2 Cs, and 1 B.

*/