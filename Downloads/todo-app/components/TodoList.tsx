"use client"

import { useState, useEffect } from 'react'
import TodoItem from './TodoItem'
import { useTaskStore } from '../stores/taskStore'

export default function TodoList() {
  const { tasks, sortTasks } = useTaskStore()
  const [sortedTasks, setSortedTasks] = useState(tasks)

  useEffect(() => {
    setSortedTasks(sortTasks())
  }, [tasks, sortTasks])

  return (
    <ul className="space-y-4">
      {sortedTasks.map((task) => (
        <TodoItem key={task.id} task={task} />
      ))}
    </ul>
  )
}

