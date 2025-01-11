
function DisplayDate(){

    const today = new Date();

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = [
        "January", "February", "March", "April", "May", "June", 
        "July", "August", "September", "October", "November", "December"
    ];


    const day = days[today.getDay()];
    const date = today.getDate();
    const month = months[today.getMonth()];
    const newDate = `${day}, ${date} , ${month}`;

    document.querySelector("#DisplayDate").innerText = newDate;
    
}

DisplayDate();

// trigger Button 



const addBtn = document.querySelector('.button');
const taskContainer = document.querySelector('.task-container');

addBtn.addEventListener('click', () => {
  const inputField = document.createElement('input');
  inputField.setAttribute('type', 'text');
  // inputField.setAttribute('placeholder', 'Enter a new task');
 
  inputField.classList.add("card")
  taskContainer.appendChild(inputField);
  inputField.addEventListener('blur' , saveTask);
  inputField.focus();
  
});

function loadTask(){
const tasks = localStorage.getItem("tasks");
if(tasks){
  taskContainer.innerHTML = tasks;  
}
}
function saveTask(){
  localStorage.setItem('tasks' , taskContainer.innerHTML);
}

window.onload = loadTask;

const deleteBtn = document.createElement('button');
deleteBtn.textContent = 'Delete';
deleteBtn.classList.add('delete-btn');
deleteBtn.addEventListener('click', () => {
  taskDiv.remove();
  saveTask();
});

// taskDiv.appendChild(deleteBtn);
// taskDiv.appendChild(inputField);
  // taskContainer.appendChild(taskDiv);