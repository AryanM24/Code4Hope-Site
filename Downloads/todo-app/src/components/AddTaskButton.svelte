<script>
  import { taskStore } from '../stores/taskStore.js';

  function addTask() {
    const newTaskLabel = prompt("Enter the new task: ");
    const newTaskDate = prompt("Enter the due date for the new task (MM/DD/YY): ");
    const newTaskTime = prompt("Enter the due time for the new task (e.g.: 11:59 PM): ");
    const newTaskCategory = prompt("Enter the category/class of the new task (e.g.: Algebra 2H): ");
    const priority = prompt("Is this task a priority (yes/no): ");

    if (newTaskLabel) {
      const newTask = {
        id: Math.max(...$taskStore.map(t => t.id), 0) + 1,
        label: newTaskLabel,
        checked: false,
        date: newTaskDate,
        priority: priority,
        time: newTaskTime,
        category: newTaskCategory
      };

      taskStore.update(tasks => [...tasks, newTask]);
    }
  }
</script>

<button on:click={addTask}>Add Task</button>

<style>
  button {
    background-color: #1e1e1e;
    color: #9e9e9e;
    border: none;
    padding: 8px 12px;
    font-size: 14px;
    border-radius: 5px;
    cursor: pointer;
  }

  button:hover {
    background-color: #9a6ce7;
    color: #FFFFFF;
  }
</style>

