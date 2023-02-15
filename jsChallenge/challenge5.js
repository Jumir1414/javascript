let obj = {
  Name: "Hari",
  Age: 32,
  Address: "Nepal",
  Contact: 98000000,
};
resultArray = [];
const toArray = (obj) => {
  for (let key in obj) {
    resultArray = [...resultArray, [key, obj[key]]];
  }
  console.log(resultArray);
};
toArray(obj);
