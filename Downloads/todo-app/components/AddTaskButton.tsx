"use client"

import { useTaskStore } from '../stores/taskStore'

export default function AddTaskButton() {
  const { addTask } = useTaskStore()

  const handleAddTask = () => {
    const newTaskLabel = prompt("Enter the new task:")
    const newTaskDate = prompt("Enter the due date for the new task (MM/DD/YY):")
    const newTaskTime = prompt("Enter the due time for the new task (e.g.: 11:59 PM):")
    const newTaskCategory = prompt("Enter the category/class of the new task (e.g.: Algebra 2H):")
    const priority = prompt("Is this task a priority (yes/no):") === 'yes' ? 'yes' : 'no'

    if (newTaskLabel) {
      addTask({
        label: newTaskLabel,
        date: newTaskDate,
        time: newTaskTime,
        category: newTaskCategory,
        priority: priority
      })
    }
  }

  return (
    <button
      onClick={handleAddTask}
      className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
    >
      Add Task
    </button>
  )
}

