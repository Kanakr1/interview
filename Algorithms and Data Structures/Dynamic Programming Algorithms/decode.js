let alphabet = {
  1: 'A',
  2: 'B',
  3: 'C',
  4: 'D', 
  5: 'E',
  6: 'F',
  7: 'G',
  8: 'H',
  9: 'I',
  10: 'J',
  11: 'K',
  12: 'L', 
  13: 'M',
  14: 'N',
  15: 'O',
  16: 'P',
  17: 'Q',
  18: 'R',
  19: 'S',
  20: 'T',
  21: 'U',
  22: 'V',
  23: 'W',
  24: 'X',
  25: 'Y',
  26: 'Z',
};

let decode = (numString, guess = '', possibilities = []) => {
  if (!numString) {
    possibilities.push(guess);
    return possibilities;
  }

  let oneChar = numString[0]
  let twoChars = numString.substring(0, 2);
  if (alphabet[oneChar]) {
    decode(numString.substring(1, numString.length), guess + alphabet[oneChar], possibilities);
  }
  if (numString.length > 1 && alphabet[twoChars]) {
    decode(numString.substring(2, numString.length), guess + alphabet[twoChars], possibilities);
  }
  return possibilities;
}


let result = decode('1234');
console.log(result);



