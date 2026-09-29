function addTask() {

    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    const taskList = document.getElementById("taskList");

    const listItem = document.createElement("li");

    const taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;

    taskSpan.onclick = function () {
        taskSpan.classList.toggle("completed");
    };

    const deleteButton = document.createElement("button");

    deleteButton.textContent = "Delete";
    deleteButton.className = "delete-btn";

    deleteButton.onclick = function () {
        listItem.remove();
        updateTaskCount();
    };

    listItem.appendChild(taskSpan);
    listItem.appendChild(deleteButton);

    taskList.appendChild(listItem);
    updateTaskCount();

    taskInput.value = "";
}
function updateTaskCount() {
    const taskList = document.getElementById("taskList");
    const taskCount = document.getElementById("taskCount");

    taskCount.textContent =
        "Total Tasks: " + taskList.children.length;
}
if (typeof module !== "undefined") {
    module.exports = {
        addTask,
        updateTaskCount
    };
}

