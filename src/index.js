/* import models */
import './style.css';
import RETURN from './assets/Images/return.png';
import REFRESH from './assets/Images/refresh.png';
import THREE from './assets/Images/three-points.png';
import change from './status.js';
import * as CRUD from './add_remove.js';
/* declarate variables */
let toDoTasks = [];
const placeholder = document.querySelector('.container');
let nbrGrid = 2;
const clearButton = document.createElement('div');
let removedListListner = [];
/* local storage */
if (!localStorage.getItem('toDoTasks')) {
  localStorage.setItem('toDoTasks', JSON.stringify(toDoTasks));
} else {
  toDoTasks = JSON.parse(localStorage.getItem('toDoTasks'));
}
/* utilities */
const populateTask = (tasks, placeholder) => {
  nbrGrid = 2;
  tasks.forEach((element) => {
    const newElement = document.createElement('div');
    if (!element.completed) {
      newElement.innerHTML = `<div><input type='checkbox' class= 'selection-icon'> <p class='task-description'> ${element.description}</p> </div><img src=${THREE} class='edit'>`;
      const textElt = newElement.querySelector('.task-description');
      textElt.style.textDecoration = 'none';
      textElt.style.textDecorationColor = '#fff';
    } else {
      newElement.innerHTML = `<div><input type='checkbox' class= 'selection-icon' checked> <p class='task-description'> ${element.description}</p> </div><img src=${THREE} class='edit'>`;
      const textElt = newElement.querySelector('.task-description');
      textElt.style.textDecoration = 'line-through';
      textElt.style.textDecorationColor = 'rgb(0, 0, 255)';
      textElt.style.textDecorationThickness = '3px';
    }
    newElement.style.gridRow = `${element.index + 2} / span 1`;
    newElement.className = 'task-card';
    nbrGrid += 1;
    placeholder.appendChild(newElement);
    const checkboxInput = newElement.querySelector('.selection-icon');
    checkboxInput.addEventListener('change', (e) => {
      change(e, toDoTasks);
    });
    placeholder.style.gridTemplateRows = `repeat(${nbrGrid}, 1fr)`;
  });
};
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
populateTask(toDoTasks, placeholder);
clearButton.innerHTML = '<p>Clear all completed</p>';
clearButton.className = 'clear-button';
nbrGrid += 1;
clearButton.style.gridRow = `${nbrGrid} / span 1`;
placeholder.style.gridTemplateRows = `repeat(${nbrGrid}, 1fr)`;
placeholder.appendChild(clearButton);
/* track add task changes */
let edditList = Array.from(document.querySelectorAll('.edit'));
document.querySelector('.fix-card input').addEventListener('change', (e) => {
  [nbrGrid, edditList] = CRUD.clickTask(e, toDoTasks, nbrGrid, edditList);
  edditList.forEach((ev) => {
    ev.addEventListener('click', (el) => {
      [nbrGrid, removedListListner] = CRUD.editTask(el, toDoTasks, nbrGrid);
      removedListListner[0].onclick = (cl) => {
        nbrGrid = CRUD.deleteTask(cl, toDoTasks, nbrGrid);
      };
    });
  });
});
/* track edit icons */
edditList.forEach((e) => {
  e.addEventListener('click', (el) => {
    [nbrGrid, removedListListner] = CRUD.editTask(el, toDoTasks, nbrGrid);
    removedListListner[0].onclick = (cl) => {
      nbrGrid = CRUD.deleteTask(cl, toDoTasks, nbrGrid);
    };
  });
});
/* track clear completed Button */
const btn = document.querySelector('.clear-button');
btn.addEventListener('click', () => {
  nbrGrid = CRUD.clear(populateTask);
});