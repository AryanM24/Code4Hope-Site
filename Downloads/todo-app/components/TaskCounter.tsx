"use client"

import { useTaskStore } from '../stores/taskStore'

export default function TaskCounter() {
  const { tasks } = useTaskStore()
  const uncheckedCount = tasks.filter(task => !task.checked).length

  return (
    <h2 className="text-xl font-semibold">Tasks Remaining: {uncheckedCount}</h2>
  )
}

