const {
    addTask,
    updateTaskCount
} = require("../script.js");

describe("Student Task Manager", () => {

    beforeEach(() => {
        document.body.innerHTML = `
            <input id="taskInput" />
            <ul id="taskList"></ul>
            <p id="taskCount"></p>
        `;

        global.alert = jest.fn();
    });

    test("should add a new task", () => {
        const taskInput = document.getElementById("taskInput");
        taskInput.value = "Complete Jenkins Assignment";

        addTask();

        const taskList = document.getElementById("taskList");

        expect(taskList.children.length).toBe(1);
        expect(taskList.children[0].textContent).toContain(
            "Complete Jenkins Assignment"
        );
    });

    test("should not add an empty task", () => {
        const taskInput = document.getElementById("taskInput");
        taskInput.value = "";

        addTask();

        const taskList = document.getElementById("taskList");

        expect(taskList.children.length).toBe(0);
        expect(global.alert).toHaveBeenCalledWith(
            "Please enter a task."
        );
    });

    test("should update the task count", () => {
        const taskList = document.getElementById("taskList");

        taskList.innerHTML = `
            <li>Task 1</li>
            <li>Task 2</li>
        `;

        updateTaskCount();

        const taskCount = document.getElementById("taskCount");

        expect(taskCount.textContent).toBe("Total Tasks: 2");
    });

});
