import { BASE_URL } from "./constant.js";
import { requestOptions1 } from "./requestOption.js";
const list = document.getElementById("list");
import { displayData } from "./displayData.js";
let userID = "";

export const getId = (id) => {
  userID = id;
};

const deleteData = async () => {
  list.style.display = "none";
  await fetch(
    BASE_URL + `/public/v2/users/${userID}`,
    requestOptions1("DELETE")
  );
  await displayData();
  list.style.display = "";
};

export default deleteData;
