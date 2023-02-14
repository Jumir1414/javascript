var nestedArray = [2, [3, [5, 7]], 4, [7]];
var nestedArray1 = [2, [3, [4, [5]]], [9]];

let x = 0;
const getLength = (input) => {
  input.forEach((element) => {
    if (typeof element === "number") {
      x += 1;
    } else {
      getLength(element);
    }
  });
  return x;
};
// console.log(getLength(nestedArray));
console.log(getLength(nestedArray1));
