import { outputDisplay , taskUI } from "./app.js";

function TodoInput(task){
  this.task = task;   
}

function submeet(e){ 
 
 e.preventDefault(); 

 let task = taskUI.value;

 let  taskTodo = new TodoInput(task);

 let appendedTask=`
 <li> ${taskTodo.task} <span class="deleteBtn cursor-p">x</span></li>
 `;

 outputDisplay.innerHTML += appendedTask;
taskUI.value=""

}

export {submeet};

