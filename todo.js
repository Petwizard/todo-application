document.addEventListener("DOMContentLoaded", function () {
  const newTaskInput = document.getElementById("newTask");
  const addTaskBtn = document.getElementById("addTaskBtn");
  const taskList = document.getElementById("taskList");

  addTaskBtn.addEventListener("click", function () {
    const taskText = newTaskInput.value.trim();
    if (taskText !== "") {
      const taskItem = document.createElement("li");
      taskItem.innerHTML = `<span>${taskText}</span>
      <span class="delete-btn">Delete</span>`;
      taskList.appendChild(taskItem);
      newTaskInput.value = "";
    }
  });

  taskList.addEventListener("click", function (event) {
    if (event.target.classList.contains("delete-btn")) {
      event.target.parentElement.remove();
    }
  });
});
