import { BASE_URL } from "./constant.js";
import { requestOptions1 } from "./requestOption.js";
const loader = document.getElementById("loader2");
const form = document.getElementById("modelForm");
const usernameField = document.getElementById("userName");
const emailField = document.getElementById("inputEmail3");
const genderField = document.getElementById("selectGender");
// const statusField = document.querySelector('input[name="gridRadios"]:checked');
const statusField1 = document.getElementById("gridRadios1");
const statusField2 = document.getElementById("gridRadios2");

export const fetchUser = async (id) => {
  loader.style.display = "block";
  form.style.display = "none";
  let response = await fetch(
    BASE_URL + "//public/v2/users/" + id,
    requestOptions1("GET")
  ).catch((error) => console.log("error", error));
  const user = await response.json();
  usernameField.value = user.name;
  emailField.value = user.email;
  genderField.value = user.gender;
  if (user.status == "active") {
    statusField1.checked = true;
  } else {
    statusField2.checked = true;
  }
  form.style.display = "";
  loader.style.display = "none";
};
