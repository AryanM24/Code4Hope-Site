"use client"

import TodoList from '../components/TodoList'
import TaskCounter from '../components/TaskCounter'
import AddTaskButton from '../components/AddTaskButton'
import RemoveCompletedButton from '../components/RemoveCompletedButton'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">To-do List</h1>
        
        <TodoList />
        
        <hr className="my-8 border-gray-700" />
        
        <TaskCounter />
        
        <div className="flex gap-4 mt-8">
          <AddTaskButton />
          <RemoveCompletedButton />
        </div>
      </div>
    </main>
  )
}

