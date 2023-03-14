import { BASE_URL } from "./constant.js";
import { requestOptions1 } from "./requestOption.js";
import { getId } from "./deleteData.js";

const list = document.getElementById("list");
const loader = document.getElementById("loader");

export const displayData = async () => {
  loader.style.display = "block";
  let response = await fetch(
    BASE_URL + "//public/v2/users/",
    requestOptions1("GET")
  );
  const users = await response.json();
  let userList = "";
  users.forEach((user) => {
    if (user.status == "active") {
      userList += `
      <tr >
      <td>${user.id}</td>
      <td id="cross-name">${user.name}</td>
      <td id="cross-name">${user.email}</td>
      <td id="cross-name">${user.gender}</td>
      <td id="cross-name">${user.status}
      &#128994</td>
      <td class="d-flex justify-content-between align-items-center">
       <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="sendId(${user.id})" >Delete</button> 
       <button type="button" class="btn btn-info" data-bs-toggle="modal" data-bs-target="#exampleModal3" onclick="viewUser(${user.id})">View</button> 
        <a id="edit" data-bs-toggle="modal" data-bs-target="#exampleModal1" onclick="handleModel(${user.id})" >Edit</a></td>
    </tr>
     `;
    } else {
      userList += `
      <tr>
      <td>${user.id}</td>
      <td >${user.name}</td>
      <td >${user.email}</td>
      <td >${user.gender}</td>
      <td >${user.status}
      &#128308;</td>
      <td class="d-flex justify-content-between align-items-center"> 
      <button id="delete" type="button" class="btn btn-danger" data-bs-toggle="modal"  data-bs-target="#exampleModal" onclick="sendId(${user.id})"
      >Delete</button>
       <button type="button" class="btn btn-info" data-bs-toggle="modal" data-bs-target="#exampleModal3" onclick="viewUser(${user.id})">View</button> 
        <a id="edit" data-bs-toggle="modal" data-bs-target="#exampleModal1" onclick="handleModel(${user.id})" >Edit</a></td>
    </tr>
     `;
    }
  });

  list.innerHTML = userList;
  loader.style.display = "none";
};
export const sendId = (id) => {
  getId(id);
};
