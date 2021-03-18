// Only change code below this line
function largestNumFromArr(arr) {
  var maxNumArray = [];
  for (var i = 0; i < arr.length; i++) {
    var maxNum = 0;
    for (var j = 0; j < arr[i].length; j++) {
      if (maxNum < arr[i][j]) {
        maxNum = arr[i][j];
      }
    }
    maxNumArray.push(maxNum);
  }
  return maxNumArray;
}
// Only change code above this line
console.log(
  largestNumFromArr([
    [13, 27, 18, 26],
    [4, 5, 1, 3],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
  ])
);
module.exports = largestNumFromArr;
