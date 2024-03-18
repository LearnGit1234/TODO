

let form = document.querySelector("form"),
outputDisplay = document.querySelector(".outputSection"),
taskUI = document.querySelector(".userInput"),
main= document.querySelector("main") ,
addtaskBtn = document.querySelector("button"),
darkModeBtn = document.querySelector(".toggle"),
containz = document.querySelector(".container"),
clear = document.querySelector(".clear")
,val
;
val = outputDisplay.children;

// val = main.classList.add("darkMode");
// val = containz.classList.add("darkMode")
console.log(outputDisplay)
console.log(val);





function TodoInput(task){
  this.task = task;   
}

(function loadEventlisteners(){

form.addEventListener("submit" ,function(e){ 
  console.log(outputDisplay.children)
  e.preventDefault(); 
  outputDisplay.classList.remove("d-None");
  
 
  let task = taskUI.value;
 
  let  taskTodo = new TodoInput(task);
 
  let appendedTask=`
  <li class="deleteBtn">
   <b>${taskTodo.task}</b>
   <span class="">X</span>
   </li>
  `;
 
  outputDisplay.innerHTML += appendedTask;
 taskUI.value=""
 
 });


 outputDisplay.addEventListener("click" , function(e){
   let clicked = e.target;
  if(clicked.tagName === "SPAN"){
  if(confirm("you sure?")){
    clicked.parentElement.style.display = "none";
  }

  }
  
  });
  darkModeBtn.addEventListener("click" , function(){
   console.log("hi")
   containz.classList.toggle("blackbg")
   main.classList.toggle("darkMode")
   taskUI.classList.toggle("inputDark")
  })

  clear.addEventListener("click" , function(){
  if(confirm("Are you sure you want to clear tasks")){
    outputDisplay.innerHTML = "" ;
  }
 
  } )

})();














