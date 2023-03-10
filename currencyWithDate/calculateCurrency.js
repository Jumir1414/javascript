const fromCurrency = document.getElementById("toConvertCurrency");
const toCurrency = document.getElementById("convertedCurrency");
const inputField = document.getElementById("toConvertAmount");
const sellField = document.getElementById("sellValue");
const buyField = document.getElementById("buyValue");

export const calculateCurrency = () => {
  let fromObj = JSON.parse(fromCurrency.value);
  let toObj = JSON.parse(toCurrency.value);
  let fromSell = fromObj.sell;
  let fromBuy = fromObj.buy;
  let toSell = toObj.sell;
  let toBuy = toObj.buy;
  if (
    fromCurrency.value == "" ||
    toCurrency.value == "" ||
    inputField.value == "" ||
    inputField.value < 0
  ) {
    alert("one or more values are missing!!!");
  } else {
    let equivalentBuy = ((inputField.value * fromBuy) / toBuy).toFixed(2);
    let equivalentSell = ((inputField.value * fromSell) / toSell).toFixed(2);
    sellField.value = equivalentSell;
    buyField.value = equivalentBuy;
  }
};
