<script>
  import { taskStore } from '../stores/taskStore.js';
  import TodoItem from './TodoItem.svelte';

  function sortTasksByDate() {
    $taskStore = $taskStore.sort((a, b) => {
      const dateA = parseDateTime(a.date, a.time);
      const dateB = parseDateTime(b.date, b.time);
      return dateA - dateB;
    });
  }

  function parseDateTime(dateStr, timeStr) {
    const [month, day, year] = dateStr.split('/').map(Number);
    let [time, period] = timeStr.split(' ');
    let [hours, minutes] = time.split(':').map(Number);

    if (period === 'PM' && hours !== 12) hours += 12;
    if (period === 'AM' && hours === 12) hours = 0;

    return new Date(2000 + year, month - 1, day, hours, minutes);
  }

  $: sortTasksByDate();
</script>

<ul style="list-style-type: none; padding: 0;">
  {#each $taskStore as task (task.id)}
    <TodoItem {task} />
  {/each}
</ul>

<style>
  ul {
    padding: 0;
  }
</style>

