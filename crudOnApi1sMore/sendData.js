import { BASE_URL } from "./constant.js";
import { TOKEN } from "./constant.js";
import { displayData } from "./displayData.js";
const list = document.getElementById("list");
const loader = document.getElementById("loader");
var myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${TOKEN}`);
myHeaders.append("Content-Type", "application/json");
const requestOptions2 = (method, data) => {
  var requestOptions = {
    method: method,
    headers: myHeaders,
    body: JSON.stringify(data),
    redirect: "follow",
  };
  return requestOptions;
};

export const sendData = async (data, method, id = "") => {
  list.style.display = "none";
  loader.style.display = "block";
  if (id != "") {
    await fetch(
      BASE_URL + "//public/v2/users/" + id,
      requestOptions2(method, data)
    ).catch((error) => console.log("error", error));
    await displayData();
    alert("User Edited");
    list.style.display = "";
    loader.style.display = "none";
  } else {
    await fetch(
      BASE_URL + "//public/v2/users/",
      requestOptions2(method, data)
    ).catch((error) => console.log("error", error));
    await displayData();
    alert("User created");
    list.style.display = "";
    loader.style.display = "none";
  }
};
