<script>
  import { taskStore } from '../stores/taskStore.js';
  export let task;

  function changePriority() {
    task.priority = task.priority === 'yes' ? 'no' : 'yes';
    taskStore.update(tasks => tasks);
  }

  function removeTask() {
    taskStore.update(tasks => tasks.filter(t => t.id !== task.id));
  }
</script>

<li>
  <button on:click={changePriority} class="priority-button">
    <span class:priority={task.priority === 'yes'}>★</span>
  </button>
  <input type="checkbox" bind:checked={task.checked} />
  <div class="task-content">
    <div class="task-label">
      <label>{task.label}</label>
    </div>
    <div class="task-details">
      <p>{task.category}</p>
      <span>{task.date}, {task.time}</span>
    </div>
  </div>
  <button on:click={removeTask} class="remove-button">X</button>
</li>

<style>
  li {
    display: flex;
    align-items: center;
    margin-bottom: 8px;
    background-color: #1e1e1e;
    border: 1px solid #333;
    padding: 10px;
    border-radius: 8px;
  }

  .priority-button {
    border: none;
    background: none;
    cursor: pointer;
    margin-left: -4px;
  }

  .priority {
    color: gold;
  }

  span:not(.priority) {
    color: rgba(255, 215, 0, 0.3);
  }

  input[type="checkbox"] {
    margin-right: 10px;
    accent-color: #bb86fc;
  }

  .task-content {
    flex-grow: 1;
  }

  .task-label {
    display: flex;
    align-items: center;
  }

  .task-details {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  p, span {
    color: #5f6368;
    font-size: 12px;
    margin: 0;
  }

  .remove-button {
    color: red;
    border: none;
    background: none;
    font-size: 15px;
    cursor: pointer;
    margin-left: 15px;
  }
</style>

