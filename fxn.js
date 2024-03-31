import {form ,outputDisplay ,taskUI,main ,addtaskBtn, darkModeBtn , containz , clear  } from "./app.js";

class TodoInput{
    constructor (task){
        this.task = task;   
      }
}

// Output Display

function taskDisplay(e){ 
    e.preventDefault(); 

   setTimeout(() => {
    let message = document.createElement("h1");
    message.innerHTML = " Task added "
    message.style.cssText = "color:white; background:green; font-size:1rem ; text-align:center;"
    main.insertBefore(message ,  form)
    setTimeout(() => {
      message.style.display = "none"
    }, 500);
   }, 100);
    
   
    let task = taskUI.value;
   
    let  taskTodo = new TodoInput(task);
   
    let appendedTask=`
    <li class="deleteBtn">
     <b>${taskTodo.task}</b>
     <span class="cursor-p">X</span>
     </li>
    `;
   
    outputDisplay.innerHTML += appendedTask;
   taskUI.value=""
  
  //  setting to local storage
  
   let tasks;
   if(localStorage.getItem("tasks")=== null){
    tasks= [];
   }else{
    tasks = JSON.parse(localStorage.getItem("tasks"));
   }
   
   tasks.push(taskTodo.task)
  
   localStorage.setItem("tasks" ,JSON.stringify(tasks))
   }


//    Display from DOM

function fromDOMDisplay(){

    let tasks;
   if(localStorage.getItem("tasks")=== null){
    tasks= [];
   }else{
    tasks = JSON.parse(localStorage.getItem("tasks"));
   }
  
   tasks.forEach(task => {
    let appendedTask=`
    <li class="deleteBtn">
     <b>${task}</b>
     <span class="cursor-p">X</span>
     </li>
    `;
   
    outputDisplay.innerHTML += appendedTask;
   taskUI.value=""
   });
  }

//   Delete Button

function delButton(e){

  setTimeout(() => {
    let message = document.createElement("h1");
    message.innerHTML = " Task removed "
    message.style.cssText = "color:white; background:red; font-size:1rem ; text-align:center;"
    main.insertBefore(message ,  form)
    setTimeout(() => {
      message.style.display = "none"
    }, 500);
   }, 100);
  //  .........

    let clicked = e.target;
    if(clicked.tagName === "SPAN"){
      let content  = clicked.previousElementSibling;
      // console.log(content.textContent)
   if(confirm("you sure?")){
     clicked.parentElement.style.display = "none";
   }
      // clear from ls
    
      let tasks;
      if(localStorage.getItem("tasks") === null){
        tasks = [];
      }else{
        tasks = JSON.parse(localStorage.getItem("tasks"))
      }     
      
      tasks.forEach((task,index)=>{
      if(content.textContent === task){
       tasks.splice(index , 1)
      }
      })
  
      localStorage.setItem("tasks" , JSON.stringify(tasks))
     //  
 }
   // 
  
   }

//    clear tasks
function clearButton(){

//  
      if(outputDisplay.innerHTML === null){
        console.log("hello")
      }else{
        setTimeout(() => {
          let message = document.createElement("h1");
          message.innerHTML = " TASKS CLEARED "
          message.style.cssText = "color:white; background:red; font-size:1rem ; text-align:center;"
          main.insertBefore(message ,  form)
          setTimeout(() => {
            message.style.display = "none"
          }, 1500);
         }, 100);
        
        outputDisplay.innerHTML = "" ;
        localStorage.clear();
      }

    
   } 





export {taskDisplay , fromDOMDisplay , delButton , clearButton };
