let todos = [
  { id: 1, title: "Putzen", isDone: false },
  { id: 2, title: "Kochen", isDone: false },
  { id: 3, title: "Lernen", isDone: false },
  { id: 4, title: "Hausaufgabe", isDone: false },
  { id: 5, title: "Einkaufen", isDone: false },
  { id: 6, title: "Haustier füttern", isDone: false },
];

printTasks();
let maxId = 6;

document.getElementById("input").addEventListener("change", function () {
  console.log(event.target.value);
  maxId++;
  todos.push({ id: maxId, title: event.target.value, isDone: false });
  printTasks();

  event.target.value = "";
});

function printTasks() {
  let html = "";

  todos.forEach((element) => {
    let style = element.isDone ? "green" : "none";
    html += `
        <div class='task' style='background-color: ${style}'>
          <span>${element.title} - ${element.isDone}</span>
          <div class="buttons">
            <img src="img/green.png" alt="Done" onClick="setIsDone(${element.id})" class="icon">
            <img src="img/red.png" alt="Delete" onClick="deleteTask(${element.id})" class="icon">
          </div>
        </div>
      `;
  });

  document.getElementById("todos").innerHTML = html;
}
function deleteTask(id) {
  let index = todos.findIndex((element) => {
    if (element.id === id) {
      return true;
    }
  });
  todos.splice(index, 1);
  printTasks();
  console.log(index);
}
function setIsDone(id) {
  let todo = todos.find((element) => {
    if (element.id === id) {
      return true;
    }
  });
  todo.isDone = !todo.isDone;
  printTasks();
  console.log(todo);
}
