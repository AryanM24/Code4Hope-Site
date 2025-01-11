<script>
  import { taskStore } from '../stores/taskStore.js';

  $: uncheckedCount = $taskStore.filter(task => !task.checked).length;
</script>

<h2>Tasks Remaining: {uncheckedCount}</h2>

<style>
  h2 {
    color: #FFFFFF;
    font-size: 18px;
  }
</style>

