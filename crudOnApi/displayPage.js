const List = document.getElementById("List");
const Loader = document.getElementById("loader");

const requestOptions = (i) => {
  var requestOptions = {
    method: i,
    headers: {
      Authorization:
        "Bearer c1d4b2596391a25a380f607f473599192aa00c6a4c903f388301e7faad33d94f",
    },
    redirect: "follow",
  };
  return requestOptions;
};

const getResult = async () => {
  Loader.style.display = "block";
  //   List.style.display = "none";
  let response = await fetch(
    "https://gorest.co.in/public/v2/users/",
    requestOptions("GET")
  );
  const users = await response.json();
  let userList = "";
  users.forEach((user) => {
    userList += `
    <tr>
    <td>${user.id}</td>
    <td id="cross-name">${user.name}</td>
    <td id="cross-name">${user.email}</td>
    <td id="cross-name">${user.gender}</td>
    <td id="cross-name">${user.status}</td>
    <td> <button onclick="deleteUser(${user.id})">delete</button>   <button onclick="window.location.href='./createEditpage.html?${user.id}';">Edit</button></td>
  </tr>
   `;
  });
  //   List.style.display = "block";
  List.innerHTML = userList;
  Loader.style.display = "none";
};
getResult();
const deleteUser = async (id) => {
  List.style.display = "none";
  await fetch(
    `https://gorest.co.in/public/v2/users/${id}`,
    requestOptions("DELETE")
  );

  await getResult();
  List.style.display = "";
};
