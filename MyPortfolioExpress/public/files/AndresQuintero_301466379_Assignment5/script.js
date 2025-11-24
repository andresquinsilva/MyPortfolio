document.getElementById("addTaskBtn").addEventListener("click", function () {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (!taskText) {
    alert("Please enter a task name.");
    return;
  }

  const task = document.createElement("div");
  task.textContent = taskText;
  task.className = "task";
  task.draggable = true;
  task.id = "task-" + Date.now();

  task.addEventListener("dragstart", dragStart);
  task.addEventListener("touchstart", touchStart);
  task.addEventListener("touchmove", touchMove);

  document.getElementById("todo").appendChild(task);
  taskInput.value = "";
});

function dragStart(event) {
  event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
  event.preventDefault();
  const taskId = event.dataTransfer.getData("text");
  const task = document.getElementById(taskId);
  event.currentTarget.appendChild(task);
}

let draggedTouch = null;
let shiftX, shiftY;

function touchStart(e) {
  draggedTouch = e.target;
  draggedTouch.style.position = "absolute";
  draggedTouch.style.zIndex = 1000;

  const rect = draggedTouch.getBoundingClientRect();
  shiftX = e.touches[0].clientX - rect.left;
  shiftY = e.touches[0].clientY - rect.top;
}

function touchMove(e) {
  if (!draggedTouch) return;
  draggedTouch.style.left = e.touches[0].clientX - shiftX + 'px';
  draggedTouch.style.top = e.touches[0].clientY - shiftY + 'px';

  draggedTouch.ontouchend = function (ev) {
    draggedTouch.style.position = "";
    draggedTouch.style.zIndex = "";
    draggedTouch.style.left = "";
    draggedTouch.style.top = "";

    const dropZones = document.getElementsByClassName("column");
    for (let zone of dropZones) {
      const rect = zone.getBoundingClientRect();
      const x = ev.changedTouches[0].clientX;
      const y = ev.changedTouches[0].clientY;
      if (x > rect.left && x < rect.right && y > rect.top && y < rect.bottom) {
        zone.appendChild(draggedTouch);
        break;
      }
    }

    draggedTouch.ontouchend = null;
    draggedTouch = null;
  };
}
