function getPINs(observed) {
  // TODO: This is your job, detective!
  let reference = {
    1: '124',
    2: '1253',
    3: '236',
    4: '1457',
    5: '24568',
    6: '3569',
    7: '478',
    8: '78590',
    9: '698',
    0: '80'
  };
  
  if (reference[observed]) { return reference[observed].split(''); }
  let result = [];
  let recurse = (pin, left) => {
    if (left.length === 0) { 
      result.push(pin); 
      return;
    }

    let current = left[0];
    let remaining = left.slice(1);
    let possiblilities = reference[current].split('');
    possiblilities.forEach((num) => {
      recurse(pin + num, remaining);
    });
  }
  recurse('', observed);
  return result;
}

console.log(getPINs('67'));
