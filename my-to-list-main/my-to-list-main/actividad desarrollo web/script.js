function newElement(){
    var taskInput = document.getElementById("task")
    var inputValue =taskInput.value;
    
    var li = document.createElement("ul");
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    var textNode = document.createTextNode(taskValue);
    lu.appendChild(textNode);

    var li = document.getElementById("task-list");
    ul.appendChild(li)
    taskInput.value="";
}