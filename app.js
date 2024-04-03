import { taskDisplay , fromDOMDisplay ,delButton , clearButton } from "./fxn.js";

let form = document.querySelector("form"),
outputDisplay = document.querySelector(".outputSection"),
taskUI = document.querySelector(".userInput"),
main= document.querySelector("main") ,
addtaskBtn = document.querySelector("button"),
darkModeBtn = document.querySelector(".toggle"),
containz = document.querySelector(".container"),
clear = document.querySelector(".clear"),
delBtn = document.querySelector(".deleteBtn"),
wrapper = document.querySelector(".headerMainWrapper"),
val
;
let BabyDev = document.body.children[0].children[0].children[0].firstElementChild;






// BabyDev.style.color = "Red";




// IIFE composing all the events

(function loadEventlisteners(){
// Event for submit
form.addEventListener("submit" , taskDisplay);
//  store to DOM
document.addEventListener("DOMContentLoaded" ,fromDOMDisplay);
// Delete task
 outputDisplay.addEventListener("click" , delButton);
  // Clear tasks
  clear.addEventListener("click" , clearButton)

  //Mode Change
  darkModeBtn.addEventListener("click" , function(){
   console.log("hi")
   document.body.classList.toggle("blackbg");
   BabyDev.classList.toggle("whiteText");
   
  
  })

  // ........

})();


export {form ,outputDisplay ,taskUI,main ,addtaskBtn, darkModeBtn , containz , clear}










