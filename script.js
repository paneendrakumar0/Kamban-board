let taskCount = 5; 

function allowDrop(ev) {
    ev.preventDefault(); 
}

function drag(ev) {
   
    ev.dataTransfer.setData("text", ev.target.id);
    ev.target.style.opacity = "0.5";
}

document.addEventListener("dragend", function(event) {
    event.target.style.opacity = "1";
});

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var draggedElement = document.getElementById(data);
    
   
    if (ev.target.classList.contains('task-list')) {
        ev.target.appendChild(draggedElement);
    } else if (ev.target.closest('.task-list')) {
       
        ev.target.closest('.task-list').appendChild(draggedElement);
    }
}

function addTask(columnId) {
    const taskText = prompt("Enter task description:");
    
    if (taskText) {
        const newTask = document.createElement("div");
        newTask.className = "task";
        newTask.draggable = true;
        newTask.id = "task" + taskCount++; 
        newTask.setAttribute("ondragstart", "drag(event)");

       
        const tag = document.createElement("div");
        tag.className = "tag design";
        tag.innerText = "New";

        const p = document.createElement("p");
        p.innerText = taskText;

        newTask.appendChild(tag);
        newTask.appendChild(p);

        document.getElementById(columnId).appendChild(newTask);
    }
}