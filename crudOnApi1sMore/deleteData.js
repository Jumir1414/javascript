import { BASE_URL } from "./constant.js";
import { requestOptions1 } from "./requestOption.js";
const list = document.getElementById("list");
import { displayData } from "./displayData.js";
const loader = document.getElementById("loader");
let userID = "";

export const getId = (id) => {
  userID = id;
};

const deleteData = async () => {
  list.style.display = "none";
  loader.style.display = "block";
  await fetch(
    BASE_URL + `/public/v2/users/${userID}`,
    requestOptions1("DELETE")
  );
  await displayData();
  list.style.display = "";
  loader.style.display = "none";
};

export default deleteData;
