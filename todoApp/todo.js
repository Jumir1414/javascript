let listArray = [];
const addBtn = document.getElementById("addList");
const todoInputField = document.getElementById("todoInput");
const List = document.getElementById("List");
let storedListArray = localStorage.getItem("todoList");
let editId = null;
if (storedListArray != null) {
  listArray = JSON.parse(storedListArray);
}

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
displayList();
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
