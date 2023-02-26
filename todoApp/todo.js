let listArray = [];
const addBtn = document.getElementById("addList");
const todoInputField = document.getElementById("todoInput");
const List = document.getElementById("List");
const Loader = document.getElementById("loader");
let storedListArray = localStorage.getItem("todoList");
let editId = null;
// if (storedListArray != null) {
//   listArray = JSON.parse(storedListArray);
// }

const delay = (t, v) => {
  return new Promise((resolve) => setTimeout(resolve, t, v));
};
let checkStorage = async (storageArray) => {
  Loader.style.display = "block";
  await delay(4000);

  return new Promise((resolve, reject) => {
    if (storageArray != null) {
      resolve(JSON.parse(storageArray));
    } else {
      reject(console.log("hello!!!"));
    }
  });
};

checkStorage(storedListArray).then((Response) => {
  listArray = Response;
  Loader.style.display = "none";
  displayList();
}).finally = () => {
  console.log("hello from finally!!");
};
const displayList = () => {
  let todo = "";
  listArray.forEach((list, index) => {
    if (list.status != true) {
      todo += `
    <tr>
    <td>${index + 1}</td>
    <td>${list.listName}</td>
    <td><button onclick="crossList(${index})">✓</button> <button onclick="deleteList(${index})">x</button>   <button onclick="editList(${index})">Edit</button></td>
  </tr>
   `;
    } else {
      todo += `
    <tr>
    <td>${index + 1}</td>
    <td id="cross-name">${list.listName}</td>
    <td><button onclick="crossList(${index})">✓</button> <button onclick="deleteList(${index})">x</button>   <button onclick="editList(${index})">Edit</button></td>
  </tr>
   `;
    }
  });
  List.innerHTML = todo;
};

addBtn.onclick = () => {
  const list = todoInputField.value;
  if (list != "") {
    if (editId != null) {
      listArray.splice(editId, 1, { listName: list, status: false });
      editId = null;
      addBtn.innerText = "Add List";
    } else {
      listArray = [...listArray, { listName: list, status: false }];
    }
    saveTo_local(listArray);
    todoInputField.value = "";
    displayList();
  } else {
    alert("list empty!!!");
  }
};
const deleteList = (i) => {
  listArray.splice(i, 1);
  saveTo_local(listArray);
  displayList();
};
const editList = (i) => {
  editId = i;
  todoInputField.value = listArray[i].listName;
  addBtn.innerText = "Edit";
};
const crossList = (i) => {
  listArray[i].status = true;
  saveTo_local(listArray);
  displayList();
};
const saveTo_local = (array) => {
  localStorage.setItem("todoList", JSON.stringify(array));
};
