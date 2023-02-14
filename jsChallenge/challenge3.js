resultArray = [];
let multiple;
const arrayOfMultiples = (num, length) => {
  for (let i = 1; i <= length; i++) {
    multiple = num * i;
    resultArray = [...resultArray, multiple];
  }
  console.log(resultArray);
};
arrayOfMultiples(8, 6);
