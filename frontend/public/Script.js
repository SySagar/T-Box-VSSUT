var todoInput = document.getElementById("todo-input")
var btnAdd = document.getElementById("btn-add")
var btnDel = document.getElementById("btn-del")
var todoList = document.getElementById("todo-list") 


btnAdd.addEventListener("click", Create);
btnDel.addEventListener("click", Clear)
todoInput.addEventListener("keyup", searchKeyPress);

var arrayList = [];
function Create() {
    let task = todoInput.value;
    if (task === "") {
        alert("No task!")
    } else {
        let list = CreateList(task)
        todoList.appendChild(list);
        todoInput.value = ""
        localStorage.setItem("list", todoList.innerHTML) 
    }
}

function searchKeyPress(e) {
    e = e || window.event;
    if (e.keyCode == 13) {
        document.getElementById('todo-input').click();
        Create();
    }
}


function CreateList(task) {
    let li = document.createElement("li")

    let newTask = document.createElement("span")
    newTask.classList.add("spanDo")
    newTask.innerText = task

    let newSpanBtn = document.createElement("span")
    let newBtnDel = document.createElement("button")

    newBtnDel.innerHTML = "<i class ='fa fa-trash-o'></i>"

    newBtnDel.classList.add("btndel")
    newBtnDel.setAttribute("onclick", "delTask(this)")

    li.appendChild(newTask)
    li.appendChild(newSpanBtn)
    
    newSpanBtn.appendChild(newBtnDel)

    return li
}


function Clear() {
    localStorage.clear() 
    todoList.innerHTML = ""
}

onload = () => {
    let ls = localStorage.getItem("list") 
    todoList.innerHTML = ls
    console.log("happenig");
}

function delTask(e) {
    let element = e.parentElement
    let newtask = element.parentElement
    todoList.removeChild(newtask)
}