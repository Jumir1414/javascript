var nestedArray = [2, [3, [5, 7]], 4, [7]];
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
console.log(getLength(nestedArray));
