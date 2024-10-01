
function addTask() {
    var taskInput = document.getElementById("taskInput").value;

    if (taskInput.trim() === ""){
        return;
    }

    var taskList = document.getElementById("taskList");


    const li = document.createElement("li");
    li.textContent = taskInput;

    //Añadir botón de eliminar.
    var buttonDelete = document.createElement("button");
    buttonDelete.textContent = "X";
    buttonDelete.onclick = function() {
        taskList.removeChild(li);
    };

    // Añadir tarea y botón a la lista.
    li.appendChild(buttonDelete);
    taskList.appendChild(li);

    //Limpiar el imput despues de añadir la tarea.
    document.getElementById("taskInput").value = "";
    
}