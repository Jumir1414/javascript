import { fetchUser } from "./fetchUser.js";
import { sendData } from "./sendData.js";
import { validMail } from "./validateEmail.js";
const modal = document.getElementById("exampleModal1");
const label = document.getElementById("createEditLabel");
const btn = document.getElementById("createEditBtn");
const loader = document.getElementById("loader2");
const radios = document.querySelectorAll('input[name="gridRadios"]');
const usernameField = document.getElementById("userName");
const emailField = document.getElementById("inputEmail3");
const genderField = document.getElementById("selectGender");
let selectedValue;
// const statusField1 = document.getElementById("gridRadios1");
// const statusField2 = document.getElementById("gridRadios2");

const handleModel = (id = "") => {
  if (id != "") {
    label.innerHTML = "Edit user";
    btn.innerHTML = "Edit";
    fetchUser(id);

    btn.onclick = () => {
      for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
          selectedValue = radios[i].value;
          break;
        }
      }
      let data = {
        name: usernameField.value,
        email: emailField.value,
        gender: genderField.value,
        status: selectedValue,
      };

      if (data.name != "") {
        let flag = validMail(data.email);
        if (flag == true) {
          sendData(data, "PATCH", id);
          usernameField.value = "";
          emailField.value = "";
        } else {
          alert("Empty or notvalid Email");
        }
      } else {
        alert("Empty Name");
      }
      console.log(selectedValue);
    };
  } else {
    label.innerHTML = "Create user";
    btn.innerHTML = "Submit";
    loader.style.display = "none";

    btn.onclick = () => {
      for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
          selectedValue = radios[i].value;
          break;
        }
      }
      let data = {
        name: usernameField.value,
        email: emailField.value,
        gender: genderField.value,
        status: selectedValue,
      };

      if (data.name != "") {
        let flag = validMail(data.email);
        if (flag == true) {
          sendData(data, "POST");
          usernameField.value = "";
          emailField.value = "";
        } else {
          alert("Empty or notvalid Email");
        }
      } else {
        alert("Empty Name");
      }
    };
  }
};
export default handleModel;
