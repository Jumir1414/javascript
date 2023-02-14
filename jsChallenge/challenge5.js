let obj = { shrimp: 15, tots: 12 };
resultArray = [];
const toArray = (obj) => {
  for (let key in obj) {
    resultArray = [...resultArray, [key, obj[key]]];
  }
  console.log(resultArray);
};
toArray(obj);
