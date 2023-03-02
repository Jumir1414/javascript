import { BASE_URL } from "./constant.js";
const FROMCURRENCY = document.getElementById("toConvertCurrency");
const TOCURRENCY = document.getElementById("convertedCurrency");
const INPUTFIELD = document.getElementById("toConvertAmount");
const OUTFIELD = document.getElementById("convertedAmount");
const BTN = document.getElementById("btn");

export const getCurencyData = async () => {
  let dataList = `<option value="" selected>Choose Currency</option>`;
  let response = await fetch(
    `${BASE_URL}/api/forex/v1/app-rate?page=1&per_page=10`
  ).catch((error) => console.error(error));
  const DATAS = await response.json();

  DATAS.forEach((data) => {
    if (data.unit >> 1) {
      dataList += `
    <option value="${data.buy / data.unit}">${data.name} (${
        data.iso3
      }) </option>
    `;
    } else {
      dataList += `
        <option value="${data.buy}">${data.name} (${data.iso3})</option>
        `;
    }
  });
  FROMCURRENCY.innerHTML = dataList;
  TOCURRENCY.innerHTML = dataList;
};
getCurencyData();

BTN.onclick = () => {
  let amtToConverted = INPUTFIELD.value;
  let nepaliCurrencyFrom = FROMCURRENCY.value;
  let nepaliCurrencyTo = TOCURRENCY.value;
  if (
    amtToConverted == "" ||
    nepaliCurrencyFrom == "" ||
    nepaliCurrencyTo == ""
  ) {
    alert("one or more values are missing!!!");
  } else {
    let equivalentAmt =
      (amtToConverted * nepaliCurrencyFrom) / nepaliCurrencyTo;
    OUTFIELD.value = equivalentAmt;
  }
};
