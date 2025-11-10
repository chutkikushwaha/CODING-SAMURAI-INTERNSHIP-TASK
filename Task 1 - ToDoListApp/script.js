const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addTaskBtn");
const list = document.getElementById("taskList");

// Load saved tasks
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
renderTasks();

// Add task
addBtn.addEventListener("click", () => {
  const text = input.value.trim();
  if (!text) return;
  tasks.push(text);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  input.value = "";
  renderTasks();
});

// Show tasks
function renderTasks() {
  list.innerHTML = "";
  tasks.forEach((t, i) => {
    const li = document.createElement("li");
    li.textContent = t;

    const del = document.createElement("button");
    del.textContent = "X";
    del.classList.add("delete");
    del.onclick = () => {
      tasks.splice(i, 1);
      localStorage.setItem("tasks", JSON.stringify(tasks));
      renderTasks();
    };

    li.appendChild(del);
    list.appendChild(li);
  });
}
