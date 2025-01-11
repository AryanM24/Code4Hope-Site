"use client"

import { useTaskStore } from '../stores/taskStore'

export default function RemoveCompletedButton() {
  const { removeCompletedTasks } = useTaskStore()

  return (
    <button
      onClick={removeCompletedTasks}
      className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
    >
      Remove Completed
    </button>
  )
}

