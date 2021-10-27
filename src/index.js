/* import models */
import './style.css';
/* import REFRESH from './assets/Images/refresh.svg'; */
import RETURN from './assets/Images/return.png';
import REFRESH from './assets/Images/refresh.png';
import THREE from './assets/Images/three-points.png';
import * as status from './status.js';
/* declarate variables */
let toDoTasks = [
  {
    description: 'working on my capstone project',
    completed: false,
    index: 3,
  },
  {
    description: 'do my daily workout',
    completed: false,
    index: 1,
  },
  {
    description: 'Visit my parents',
    completed: false,
    index: 2,
  },
];
const placeholder = document.querySelector('.container');
let nbrGrid = 2;
const clearButton = document.createElement('div');
/* local storage */ 
if (!localStorage.getItem('toDoTasks')) {
  localStorage.setItem('toDoTasks',JSON.stringify(toDoTasks));
}
else {
    toDoTasks = JSON.parse(localStorage.getItem('toDoTasks'));
}
/* utilities */
const populateTask = (tasks) => {
  tasks.forEach((element) => {
    const newElement = document.createElement('div');
    if (!element.completed) {
      newElement.innerHTML = `<div><input type='checkbox' class= 'selection-icon'> <p class='task-description'> ${element.description}</p> </div><img src=${THREE} class='edit'>`;
    }
    else {
        newElement.innerHTML = `<div><input type='checkbox' class= 'selection-icon' checked> <p class='task-description'> ${element.description}</p> </div><img src=${THREE} class='edit'>`; 
    }
    newElement.style.gridRow = `${element.index + 2} / span 1`;
    newElement.className = 'task-card';
    nbrGrid += 1;
    placeholder.appendChild(newElement);
    const checkboxInput = newElement.querySelector('.selection-icon');
    checkboxInput.addEventListener('change', () => {
      if (element.completed) {
        element.completed = false;
        localStorage.setItem('toDoTasks',JSON.stringify(toDoTasks));
        }
      else {
        element.completed = true;
        localStorage.setItem('toDoTasks',JSON.stringify(toDoTasks));
      }
    });
    placeholder.style.gridTemplateRows = `${nbrGrid}`;
  });
}
/* Load Page */
const titleList = document.createElement('div');
titleList.innerHTML = `<p class='description'>Today's To Do </p> <img src=${REFRESH} class='icon'>`;
titleList.className = 'fix-card';
titleList.style.gridRow = '1 / span 1';
const addTask = document.createElement('div');
addTask.innerHTML = `<input placeholder = 'Add to your list...'> <img src=${RETURN} class='icon'>`;
addTask.className = 'fix-card';
addTask.style.gridRow = '2 / span 1';
placeholder.appendChild(titleList);
placeholder.appendChild(addTask);
populateTask(toDoTasks);
clearButton.innerHTML = '<p>Clear all completed</p>';
clearButton.className = 'clear-button';
nbrGrid += 1;
clearButton.style.gridRow = `${nbrGrid} / span 1`;
placeholder.style.gridTemplateRows = nbrGrid;
placeholder.appendChild(clearButton);

