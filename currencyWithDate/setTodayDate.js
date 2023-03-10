const intialDate = document.getElementById("datepicker");
let date = new Date();
let year = date.getFullYear();
let month = String(date.getMonth() + 1).padStart(2, "0");
let day = String(date.getDate()).padStart(2, "0");
let todayDate = year + "-" + month + "-" + day;

export const setToday = () => {
  intialDate.value = todayDate;
  intialDate.max = todayDate;
};
