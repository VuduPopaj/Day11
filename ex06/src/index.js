// Only change code below this line
function multiplyArrayFunction(myArray) {
  var product = 1;
  var sum = 0;
  var arr = [];
  for (var i = 0; i < myArray.length; i++) {
    for (var j = 0; j < myArray[i].length; j++) {
      product *= myArray[i][j];
      sum += myArray[i][j];
    }
  }
  arr.push(product, sum);
  return arr;
}
// Only change code above this line
console.log(multiplyArrayFunction([[2.5, 2], [0.5, 0.2], [8]]));
module.exports = multiplyArrayFunction;