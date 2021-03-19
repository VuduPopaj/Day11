// Only change code below this line
function myBouncer(arr) {
  return arr.filter(Boolean);
}
// Only change code above this line

console.log(myBouncer([7, "ate", "", false, 9])); // Change this line
console.log(myBouncer(["a", "b", "c"]));
console.log(myBouncer([false, null, 0, NaN, undefined, ""]));
module.exports = myBouncer;
