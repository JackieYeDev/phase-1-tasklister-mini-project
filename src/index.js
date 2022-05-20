document.addEventListener("DOMContentLoaded", () => {
  // your code here
});

document.addEventListener("submit", function () {
  const tasks = document.getElementById("tasks");
  const input = document.querySelector('input#new-task-description');
  const li = document.createElement("li");
  const button = document.createElement("button");
  const priority = document.querySelector('select#priority-selector').value

  // Appends our new todos to the list
  li.textContent = input.value;
  li.className = priority;
  li.setAttribute("contenteditable", true)
  button.textContent = "X"
  button.addEventListener("click", function(){
    li.remove()
  })

  li.append(button);
  tasks.append(li);

  // Clears the input
  input.value = ""
  
  // preventDefault() for submit button and event
  event.preventDefault();
})