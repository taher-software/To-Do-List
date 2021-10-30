const change = (e, toDoTasks) => {
  const targetElement = e.target.parentNode;
  const textElt = targetElement.querySelector('.task-description');

  const descriptionElement = textElt.textContent;
  const indexEl = toDoTasks.findIndex(
    (task) => task.description.trim() === descriptionElement.trim(),
  );

  if (toDoTasks[indexEl].completed) {
    toDoTasks[indexEl].completed = false;
    localStorage.setItem('toDoTasks', JSON.stringify(toDoTasks));
    textElt.style.textDecoration = 'none';
    textElt.style.textDecorationColor = '#fff';
  } else {
    toDoTasks[indexEl].completed = true;
    localStorage.setItem('toDoTasks', JSON.stringify(toDoTasks));
    textElt.style.textDecoration = 'line-through';
    textElt.style.textDecorationColor = 'rgb(0, 0, 255)';
    textElt.style.textDecorationThickness = '3px';
  }
};
export default change;