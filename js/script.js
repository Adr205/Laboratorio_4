var post = document.getElementById("ButtonPost");
var clear = document.getElementById("ButtonClear");
var mark = document.getElementById("ButtonMark");
var del = document.getElementById("ButtonDelete");

post.addEventListener("click", ToDoPost);
clear.addEventListener("click", ToDoClear);
mark.addEventListener("click", ToDoMark);
del.addEventListener("click", ToDoDel);

function ToDoPost(e){
    e.preventDefault()
    var toDo = document.getElementById("ToDoText").value;
    var list = document.getElementById("toDoList");

    // var currentListHTML = list.innerHTML;
    // list.innerHTML = currentListHTML + `<input type = "checkbox" name = "todo" class = "prueba" /> ${toDo} <br>`
    // document.getElementById("ToDoText").value = ""

    var div = document.createElement("div");
    var checkbox = document.createElement("input");
    var label = document.createElement("label");

    checkbox.type = "checkbox";
    checkbox.name = "todo";
    
    label.textContent = toDo;

    div.appendChild(checkbox);
    div.appendChild(label);
    list.appendChild(div);

    document.getElementById("ToDoText").value = ""
}

function ToDoClear(){
    var todos = document.getElementsByName("todo");

    for(var i = 0; i < todos.length;i++){
        todos[i].checked = false;
    }

}

function ToDoMark(){
    var todos = document.getElementsByName("todo");

    for(var i = 0; i < todos.length;i++){
        todos[i].checked = true;
    }

}

function ToDoDel(){
    var todos = document.getElementsByName("todo");
    var list = document.getElementById("toDoList");




    todos.forEach(element => {
     if(element.checked){
            element.parentElement.remove()
        }
    });

}