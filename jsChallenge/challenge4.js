concatArray = [];
inputArrays = [[1], [2], [3], [4], [5], [6], [7]];
const conCat = (input) => {
  input.forEach((Element) => {
    Element.forEach((Number) => {
      concatArray = [...concatArray, Number];
    });
  });
  console.log(concatArray);
};
conCat(inputArrays);
