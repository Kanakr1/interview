// Write a method that will execute each asynch function in tasksArray (which also takes a cb as a param) and execute 
// callback on the entire array once each async function finishes

var asyncMap = function (tasksArray, callback) {
  var results = [];
  var resultsCount = 0;
  // With an IIFE
  // for (var i = 0; i < tasksArray.length; i++) {
  //   (function(i) {
  //     tasksArray[i](function(param) {
  //       results[i] = param.toUpperCase();
  //       resultsCount++;
  //       if (resultsCount === tasksArray.length) {
  //         callback(results);
  //       }
  //     });
  //   })(i);
  // }

  // Using ES6 let
  // for (let i = 0; i < tasksArray.length; i++) {
  //   tasksArray[i](function(param) {
  //     results[i] = param + param;
  //     resultsCount++;
  //     if (resultsCount === tasksArray.length) {
  //       callback(results);
  //     }
  //   });
  // }

  // Using forEach (which already takes a cb, thus binding i properly)
  // tasksArray.forEach(function(task, i) {
  //   task(function(arg) {
  //     results[i] = arg;
  //     resultsCount += 1;
  //     if (resultsCount === tasksArray.length) {
  //       callback(results);
  //     }
  //   });
  // });

  let promiseArray = tasksArray.map(function(task) {
    return new Promise(task);
  });

  return Promise.all(promiseArray)
  .then(function(array) {
    callback(array);
  });
}

function One(cb){
    setTimeout(function(){
      cb('one');
    }, 200);
}
function Two(cb){
    setTimeout(function(){
      cb('two');
    }, 100);
}

let a = [One, Two];
asyncMap(a, console.log);