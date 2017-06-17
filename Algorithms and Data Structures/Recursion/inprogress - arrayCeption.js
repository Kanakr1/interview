

// [10,20,[[],[]],30,40]  ==> 1

// [[]] ==> 0

[ 3, [ 1 , [ 2 ], [ 4 ] ] ]  


function arrayCeption (array) {
  //your code here
  
  let depths = [];

  let arrayRecurse = (array, counter) => {
    if (array.length === 0) {
      return 0;
    }
    
    for (let i = 0; i < array.length; i++) {
      if (Array.isArray(array[i]) && array[i].length) {
        depths.push(arrayRecurse(array[i], counter + 1));
      }
    }
    return counter;
  }
  
  arrayRecurse(array, 1);
  console.log(depths);

  if (depths.length === 0) { return 0; }
  let maxDepth = depths.reduce((acc, val) => {
    return Math.max(acc, val);
  });

  return maxDepth;
}

function assert(expectedBehavior, description){
  if (!expectedBehavior) {
    console.log(description)
  } else {
    console.log('test passed!')
  }
}

// assert( arrayCeption([[1,[2],[3,[[4,[6,[],7]],[5]]]]]) === 6, 'Output should equal 6')

// assert( arrayCeption(  [1,[2],3,[4,5,[6],7]] ) === 3, 'Output should equal 3')

assert( arrayCeption(  [10,20,[[],[]],30,40] ) === 1, 'Output should equal 1')

// assert( arrayCeption(  [[]] ) === 0, 'Output should equal 0')

assert( arrayCeption( [[[]]] ) === 0, 'Output should equal 0'); 



