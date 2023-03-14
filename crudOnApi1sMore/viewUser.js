import { BASE_URL } from "./constant.js";
import { requestOptions1 } from "./requestOption.js";
const loader = document.getElementById("loader3");
const form = document.getElementById("modelForm2");
const usernameField = document.getElementById("userNameView");
const emailField = document.getElementById("inputEmailView");
const genderField = document.getElementById("selectGenderView");
// const statusField = document.querySelector('input[name="gridRadios"]:checked');
const statusField = document.getElementById("statusView");

export const viewUser = async (id) => {
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
  statusField.value = user.status;
  form.style.display = "";
  loader.style.display = "none";
};
