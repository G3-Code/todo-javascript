const todoButton = document.querySelector(".todo-button");
todoButton.addEventListener("click", handleAdd);

function handleAdd() {
  console.log("Add clicked");
  const todoText = document.querySelector(".todo-text");
  const newTodoElement = document.createElement("li");
  newTodoElement.innerText = todoText.value;
  console.log(newTodoElement);
  const todoContent = document.querySelector(".todo-content");
  todoContent.appendChild(newTodoElement);
  console.log(todoContent);
}
