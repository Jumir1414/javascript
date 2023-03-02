var editId = location.search.substring(1);
const btn = document.getElementById("submit");
const usernameField = document.getElementById("userName");
const emailField = document.getElementById("email");
const genderField = document.getElementById("gender");
const statusField = document.getElementById("status");
const Title = document.getElementById("title");
const Form = document.querySelector(".form");
const Loader = document.getElementById("loader");

var myHeaders = new Headers();
myHeaders.append(
  "Authorization",
  "Bearer c1d4b2596391a25a380f607f473599192aa00c6a4c903f388301e7faad33d94f"
);
myHeaders.append("Content-Type", "application/json");

const requestOptions = (i) => {
  var requestOptions = {
    method: i,
    headers: myHeaders,
    redirect: "follow",
  };
  return requestOptions;
};

const requestOptions1 = (i, data) => {
  var requestOptions = {
    method: i,
    headers: myHeaders,
    body: JSON.stringify(data),
    redirect: "follow",
  };
  return requestOptions;
};

const getResult = async (id) => {
  Loader.style.display = "block";
  Form.style.display = "none";
  let response = await fetch(
    `https://gorest.co.in/public/v2/users/+${id}`,
    requestOptions("GET")
  );
  const user = await response.json();
  console.log(user);
  usernameField.value = user.name;
  emailField.value = user.email;
  genderField.value = user.gender;
  statusField.value = user.status;
  Loader.style.display = "none";
  Form.style.display = "";
};

const postData = async (data, id) => {
  await fetch(
    `https://gorest.co.in/public/v2/users/+${id}`,
    requestOptions1("PATCH", data)
  ).catch((error) => console.error(error));
  console.log("hello");
};
const createData = async (data) => {
  await fetch(
    "https://gorest.co.in/public/v2/users/",
    requestOptions1("POST", data)
  ).catch((error) => console.error(error));
  console.log("hello");
};

if (editId != "") {
  Title.innerHTML = "Edit user";
  btn.innerHTML = "Save Changes";
  getResult(editId);
} else {
  Title.innerHTML = "Create user";
  btn.innerHTML = "Create";
}

function validMail(mail) {
  return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(
    mail
  );
}

btn.onclick = () => {
  data = {
    name: usernameField.value,
    email: emailField.value,
    gender: genderField.value,
    status: statusField.value,
  };

  if (data.name != "") {
    let flag = validMail(data.email);
    console.log(flag);
    if (flag == true) {
      if (editId != "") {
        postData(data, editId);
        window.location.href = "./displayPage.html";
      } else {
        createData(data);
        window.location.href = "./displayPage.html";
      }
    } else {
      alert("Empty Email");
    }
  } else {
    alert("Empty Name");
  }
};
