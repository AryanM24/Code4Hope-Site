"use client"

import { useTaskStore } from '../stores/taskStore'

export default function TodoItem({ task }) {
  const { updateTask, removeTask } = useTaskStore()

  const togglePriority = () => {
    updateTask(task.id, { priority: task.priority === 'yes' ? 'no' : 'yes' })
  }

  return (
    <li className="flex items-center bg-gray-800 p-4 rounded-lg">
      <button onClick={togglePriority} className="mr-2">
        <span className={`text-2xl ${task.priority === 'yes' ? 'text-yellow-400' : 'text-gray-500'}`}>
          ★
        </span>
      </button>
      <input
        type="checkbox"
        checked={task.checked}
        onChange={() => updateTask(task.id, { checked: !task.checked })}
        className="mr-4 h-5 w-5 accent-purple-600"
      />
      <div className="flex-grow">
        <div className="flex items-center">
          <label className={`${task.checked ? 'line-through text-gray-500' : ''}`}>{task.label}</label>
        </div>
        <div className="flex justify-between text-sm text-gray-400 mt-1">
          <span>{task.category}</span>
          <span>{task.date}, {task.time}</span>
        </div>
      </div>
      <button onClick={() => removeTask(task.id)} className="ml-4 text-red-500 hover:text-red-700">
        X
      </button>
    </li>
  )
}

