<script>
  import { taskStore } from '../stores/taskStore.js';

  function removeCompleted() {
    taskStore.update(tasks => tasks.filter(task => !task.checked));
  }
</script>

<button on:click={removeCompleted}>Remove Completed</button>

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

  button:disabled {
    background-color: #3a3a3a;
    color: #777;
    cursor: not-allowed;
  }
</style>

