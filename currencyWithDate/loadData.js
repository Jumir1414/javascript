const fromCurrency = document.getElementById("toConvertCurrency");
const toCurrency = document.getElementById("convertedCurrency");
const inputField = document.getElementById("toConvertAmount");
const sellField = document.getElementById("sellValue");
const buyField = document.getElementById("buyValue");

export const loadData = (rates) => {
  inputField.value = " ";
  sellField.value = " ";
  buyField.value = " ";
  let dataList = `<option value="" selected>Choose Currency</option>`;
  rates[0].forEach((element) => {
    if (element.currency.unit > 1) {
      let buy = (element.buy / element.currency.unit).toFixed(4);
      let sell = (element.sell / element.currency.unit).toFixed(4);
      dataList += `
    <option value='{"buy": ${buy}, "sell":${sell} }'>${element.currency.name} (${element.currency.iso3}) </option>`;
    } else {
      dataList += `
    <option value='{"buy": ${element.buy}, "sell":${element.sell} }'>${element.currency.name} (${element.currency.iso3}) </option>`;
    }
  });
  fromCurrency.innerHTML = dataList;
  toCurrency.innerHTML = dataList;
};
