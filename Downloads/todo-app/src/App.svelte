<script>
  import TodoList from './components/TodoList.svelte';
  import TaskCounter from './components/TaskCounter.svelte';
  import AddTaskButton from './components/AddTaskButton.svelte';
  import RemoveCompletedButton from './components/RemoveCompletedButton.svelte';
</script>

<main>
  <h1>To-do List</h1>
  
  <TodoList />
  
  <hr>
  
  <TaskCounter />
  
  <div class="button-container">
    <AddTaskButton />
    <RemoveCompletedButton />
  </div>
</main>

<style>
  :global(body) {
    background-color: #121212;
    color: #FFFFFF;
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 20px;
    box-sizing: border-box;
  }

  main {
    max-width: 600px;
    margin: 0 auto;
  }

  h1 {
    text-align: center;
  }

  hr {
    border-color: #333;
  }

  .button-container {
    display: flex;
    gap: 10px;
    margin-top: 20px;
  }
</style>

