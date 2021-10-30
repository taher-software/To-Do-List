import THREE from './assets/Images/three-points.png';
import DEL from './assets/Images/delete.png';
import change from './status.js';

const addTask = (toDoTasks, taskdescription, nbrGrid, eddList) => {
  const placeholder = document.querySelector('.container');
  const newIndex = toDoTasks.length + 1;
  const newElt = document.createElement('div');
  newElt.innerHTML = `<div><input type='checkbox' class= 'selection-icon'> <p class='task-description'> ${taskdescription}</p> </div><img src=${THREE} class='edit'>`;
  newElt.className = 'task-card';
  newElt.style.gridRow = `${newIndex + 2} / span 1`;
  document.querySelector('.clear-button').style.gridRow = `${newIndex + 3} / span 1`;
  const nbrOfGrid = nbrGrid + 1;
  placeholder.appendChild(newElt);
  placeholder.style.gridTemplateRows = `repeat(${nbrOfGrid}, 1fr)`;
  toDoTasks.push({
    description: taskdescription,
    completed: false,
    index: newIndex,
  });
  eddList.push(newElt.querySelector('.edit'));
  newElt.querySelector('.selection-icon').onchange = (e) => {
    change(e, toDoTasks);
  };
  return [nbrOfGrid, eddList, toDoTasks];
};
const clickTask = (e, toDoTasks, nbrGrid, eddList) => {
  const taskdescription = e.target.value;
  e.target.value = '';
  const [nbrOfGrid, edd, newList] = addTask(toDoTasks, taskdescription, nbrGrid, eddList);
  localStorage.setItem('toDoTasks', JSON.stringify(newList));
  return [nbrOfGrid, edd];
};
const deleteTask = (e, taskList, nbrGrid) => {
  const elt = e.target.parentNode;
  const parent = elt.parentNode;
  const indexElt = parseInt(getComputedStyle(elt).gridRow.split('/')[0], 10) - 2;
  parent.removeChild(elt);
  let ind = -1;
  for (let i = 0; i < taskList.length; i += 1) {
    if (taskList[i].index === indexElt) {
      ind = i;
      break;
    }
  }
  taskList.splice(ind, 1);
  const nbrOfGrid = nbrGrid - 1;
  parent.style.gridTemplateRows = `repeat(${nbrOfGrid}, 1fr)`;
  for (let i = 0; i < taskList.length; i += 1) {
    if (taskList[i].index > indexElt) {
      taskList[i].index -= 1;
    }
  }
  localStorage.setItem('toDoTasks', JSON.stringify(taskList));
  Array.from(parent.children).forEach((element) => {
    if (element.className === 'task-card') {
      const gridOrder = parseInt(getComputedStyle(element).gridRow.split('/')[0], 10);
      if (gridOrder > indexElt + 2) {
        element.style.gridRow = `${gridOrder - 1} / span 1`;
      }
    }
  });
  const btn = document.querySelector('.clear-button');
  btn.style.gridRow = `${parseInt(getComputedStyle(btn).gridRow.split('/')[0], 10) - 1} / span 1`;

  return nbrOfGrid;
};
const editTask = (e, taskList, nbr) => {
  const elt = e.target.parentNode;
  const basicContent = elt.innerHTML;
  const nbrOfGrid = nbr;
  elt.innerHTML = `<div><input type='checkbox' class= 'selection-icon'> <input type='text' class='edit-task'> </div><img src=${DEL} class='del'>`;
  elt.style.backgroundColor = 'rgba(228, 214, 151,0.8)';
  const removeElem = [elt.querySelector('.del')];
  const inputElem = elt.querySelector('.edit-task');
  inputElem.onchange = () => {
    const newText = inputElem.value;
    const elt = inputElem.parentNode.parentNode;
    const index = parseInt(getComputedStyle(elt).gridRow.split('/')[0], 10) - 2;
    elt.innerHTML = basicContent;
    elt.querySelector('.task-description').textContent = newText;
    elt.style.backgroundColor = '#fff';
    elt.querySelector('.selection-icon').onchange = (e) => {
      change(e, taskList);
    };
    taskList[index - 1].description = newText;
    localStorage.setItem('toDoTasks', JSON.stringify(taskList));
  };
  return [nbrOfGrid, removeElem];
};
const clear = (storageFct) => {
  const taskList = JSON.parse(localStorage.getItem('toDoTasks'));
  const container = document.querySelector('.container');
  const childrens = Array.from(container.children);
  const firstLength = taskList.length;
  for (let i = 0; i < childrens.length; i += 1) {
    if (childrens[i].className === 'task-card') container.removeChild(childrens[i]);
  }
  const newTaskList = taskList.filter((task) => task.completed === false);
  const removedIndex = Array.apply(0, Array(firstLength)).map((_, b) => b + 1);

  newTaskList.forEach((el) => {
    const pos = removedIndex.indexOf(el.index);
    removedIndex.splice(pos, 1);
  });
  if (removedIndex.length > 0) {
    for (let i = removedIndex.length - 1; i >= 0; i -= 1) {
      newTaskList.forEach((el) => {
        if (el.index > removedIndex[i]) {
          el.index -= 1;
        }
      });
    }
  }
  storageFct(newTaskList, container);
  const containerNbrGrid = newTaskList.length + 3;
  container.style.gridTemplateRows = `repeat(${containerNbrGrid},1fr)`;
  const btn = container.querySelector('.clear-button');
  btn.style.gridRow = `${containerNbrGrid} / span 1`;
  localStorage.setItem('toDoTasks', JSON.stringify(newTaskList));
  window.location.reload(true);

  return containerNbrGrid;
};
export {
  addTask, clickTask, editTask, deleteTask, clear,
};