import { BASE_URL } from "./constant.js";
import { loadData } from "./loadData.js";
let requestOptions = {
  method: "GET",
  redirect: "follow",
};
export const fetchData = async (date) => {
  let response = await fetch(
    BASE_URL +
      "/api/forex/v1/rates?" +
      "from=" +
      date +
      "&to=" +
      date +
      "&per_page=20&page=1",
    requestOptions
  ).catch((error) => console.log("error", error));

  let datas = await response.json();
  let payload = await datas.data.payload;
  let rates = payload.map((data) => {
    return data.rates;
  });
  loadData(await rates);
};
