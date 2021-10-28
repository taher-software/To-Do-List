const change = (e, toDoTasks) => {
  const targetElement = e.target.parentNode;
  const descriptionElement = targetElement.querySelector('.task-description').textContent;
  const indexEl = toDoTasks.findIndex(
    (task) => task.description.trim() === descriptionElement.trim(),
  );

  if (toDoTasks[indexEl].completed) {
    toDoTasks[indexEl].completed = false;
    localStorage.setItem('toDoTasks', JSON.stringify(toDoTasks));
  } else {
    toDoTasks[indexEl].completed = true;
    localStorage.setItem('toDoTasks', JSON.stringify(toDoTasks));
  }
};
export default change;