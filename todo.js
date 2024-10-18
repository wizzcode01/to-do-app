// //https://github.com/wizzcode01/To-do-lists.git

// window.addEventListener('load',() => {
//     const form = document.querySelector("#task-form");
//     const input = document.querySelector("#task-input");
//     const list_element = document.querySelector("#tasks");
//     const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
//     //i was unable to save it to local storage buh i will keep trying ....


//     form.addEventListener('submit', (e) =>{
//         e.preventDefault();
       
//         const task = input.value;

//         if(!task){
//             alert("please fill out the task");
//             return;
//         }
//         const task_element = document.createElement("div");
//         task_element.classList.add("task");

//         const task_content_element = document.createElement("div");
//         task_content_element.classList.add("content");
     
   
//         task_element.appendChild(task_content_element);

//         const task_input_element = document.createElement("input");
//         task_input_element.classList.add("text");
//         task_input_element.type = "text";
//         task_input_element.value = task;
//         task_input_element.setAttribute("readonly","readonly");

//         task_content_element.appendChild(task_input_element);

//         const task_actions_element = document.createElement("div");
//         task_actions_element.classList.add("actions");

//         const task_edit_element = document.createElement("button");
//         task_edit_element.classList.add("edit");
//         task_edit_element.innerHTML = "Edit";

//         const task_delete_element = document.createElement("button");
//         task_delete_element.classList.add("delete");
//         task_delete_element.innerHTML = "Delete";

//         task_actions_element.appendChild(task_edit_element);
//         task_actions_element.appendChild(task_delete_element);

//         task_element.appendChild(task_actions_element);

//         list_element.appendChild(task_element);

//        input.value = ""; 

//        task_edit_element.addEventListener('click', () => {
//         if(task_edit_element.innerText.toLowerCase() == "edit"){
//             task_input_element.removeAttribute("readonly");
//             task_input_element.focus();
//             task_edit_element.innerText = "save";

//         }else{
//             task_input_element.setAttribute("readonly","readonly");
//             task_edit_element.innerText = "Edit";
//         }
//        });
//          task_delete_element.addEventListener('click',() => {
//             list_element.removeChild(task_element)
//          })

//     })
//  })


window.addEventListener('load', () => {
    const form = document.querySelector("#task-form");
    const input = document.querySelector("#task-input");
    const list_element = document.querySelector("#tasks");
  
    // Retrieve tasks from local storage
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    storedTasks.forEach((task) => {
      const task_element = document.createElement("div");
      task_element.classList.add("task");

      const task_content_element = document.createElement("div");
      task_content_element.classList.add("content");

      task_element.appendChild(task_content_element);
      const task_input_element = document.createElement("input");

      task_input_element.classList.add("text");
      task_input_element.type = "text";
      task_input_element.value = task.text;
      task_input_element.setAttribute("readonly", "readonly");

      task_content_element.appendChild(task_input_element);
      const task_actions_element = document.createElement("div");
      task_actions_element.classList.add("actions");

      const task_edit_element = document.createElement("button");
      task_edit_element.classList.add("edit");
      task_edit_element.innerHTML = "Edit";

      const task_delete_element = document.createElement("button");
      task_delete_element.classList.add("delete");
      task_delete_element.innerHTML = "Delete";

      task_actions_element.appendChild(task_edit_element);
      task_actions_element.appendChild(task_delete_element);
      
      task_element.appendChild(task_actions_element);
      list_element.appendChild(task_element);
  
      // Edit button event listener
      task_edit_element.addEventListener('click', () => {
        if (task_edit_element.innerText.toLowerCase() == "edit") {
          task_input_element.removeAttribute("readonly");
          task_input_element.focus();
          task_edit_element.innerText = "Save";
        } else {
          task_input_element.setAttribute("readonly", "readonly");
          task_edit_element.innerText = "Edit";
          // Update task in local storage
          const updatedTask = {
            text: task_input_element.value,
          };
          const taskIndex = storedTasks.findIndex((t) => t.text === task.text);
          storedTasks[taskIndex] = updatedTask;
          localStorage.setItem('tasks', JSON.stringify(storedTasks));
        }
      });
  
      // Delete button event listener
      task_delete_element.addEventListener('click', () => {
        list_element.removeChild(task_element);
        // Remove task from local storage
        const taskIndex = storedTasks.findIndex((t) => t.text === task.text);
        storedTasks.splice(taskIndex, 1);
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
      });
    });
  
    // Form submission event listener
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const task = input.value;
      if (!task) {
        alert("Please fill out the task");
        return;
      }
  
      // Create new task element
      const task_element = document.createElement("div");
      task_element.classList.add("task");
      const task_content_element = document.createElement("div");
      task_content_element.classList.add("content");
      task_element.appendChild(task_content_element);
      const task_input_element = document.createElement("input");
      task_input_element.classList.add("text");
      task_input_element.type = "text";
      task_input_element.value = task;
      task_input_element.setAttribute("readonly", "readonly");
      task_content_element.appendChild(task_input_element);
      const task_actions_element = document.createElement("div");
      task_actions_element.classList.add("actions");
      const task_edit_element = document.createElement("button");
      task_edit_element.classList.add("edit");
      task_edit_element.innerHTML = "Edit";
      const task_delete_element = document.createElement("button");
      task_delete_element.classList.add("delete");
      task_delete_element.innerHTML = "Delete";
      task_actions_element.appendChild(task_edit_element);
      task_actions_element.appendChild(task_delete_element);
      task_element.appendChild(task_actions_element);
      list_element.appendChild(task_element);
  
      // Add task to local storage
      storedTasks.push({
        text: task,
      });
      localStorage.setItem('tasks', JSON.stringify(storedTasks));
  
      // Edit button event listener
      task_edit_element.addEventListener('click', () => {
        if (task_edit_element.innerText.toLowerCase() == "edit") {
          task_input_element.removeAttribute("readonly");
          task_input_element.focus();
          task_edit_element.innerText = "Save";
        } else {
          task_input_element.setAttribute("readonly", "readonly");
          task_edit_element.innerText = "Edit";
          // Update task in local storage
          const updatedTask = {
            text: task_input_element.value,
          };
          const taskIndex = storedTasks.findIndex((t) => t.text === task);
          storedTasks[taskIndex] = updatedTask;
          localStorage.setItem('tasks', JSON.stringify(storedTasks));
        }
      });
  
      // Delete button event listener
      task_delete_element.addEventListener('click', () => {
        list_element.removeChild(task_element);
        // Remove task from local storage
        const taskIndex = storedTasks.findIndex((t) => t.text === task);
        storedTasks.splice
    });
 });
});