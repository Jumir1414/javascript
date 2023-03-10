import { fetchData } from "./fetchData.js";
const selectedDate = document.getElementById("datepicker");

export const pickDate = () => {
  let date = selectedDate.value;
  fetchData(date);
};
