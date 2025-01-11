import { create } from 'zustand'

interface Task {
  id: number
  label: string
  checked: boolean
  priority: 'yes' | 'no'
  date: string
  time: string
  category: string
}

interface TaskStore {
  tasks: Task[]
  addTask: (task: Omit<Task, 'id' | 'checked'>) => void
  updateTask: (id: number, updates: Partial<Task>) => void
  removeTask: (id: number) => void
  removeCompletedTasks: () => void
  sortTasks: () => Task[]
}

const useTaskStore = create<TaskStore>((set, get) => ({
  tasks: [
    { id: 1, label: 'Admire Amruth', checked: false, priority: 'yes', date: '12/2/24', time: '11:59 PM', category: 'Team 2554 Robotics Onboarding'},
    { id: 2, label: 'Develop C++ Interpreter', checked: false, priority: 'yes', date: '12/2/24', time: '11:59 PM', category: 'Team 2554 Robotics Onboarding' },
    { id: 3, label: 'Make a compiler for C ', checked: false, priority: 'no', date: '12/19/24', time: '11:59 PM', category: 'Team 2554 Robotics Onboarding' },
    { id: 4, label: 'Learn Rust', checked: false, priority: 'yes', date: '12/2/24', time: '11:59 PM', category: 'Team 2554 Robotics Onboarding'},
    { id: 5, label: 'Study for Robotics Test', checked: false, priority: 'no', date: '12/19/24', time: '11:59 PM', category: 'Team 2554 Robotics Onboarding'}
  ],
  addTask: (task) => set((state) => ({
    tasks: [...state.tasks, { ...task, id: Math.max(0, ...state.tasks.map(t => t.id)) + 1, checked: false }]
  })),
  updateTask: (id, updates) => set((state) => ({
    tasks: state.tasks.map(task => task.id === id ? { ...task, ...updates } : task)
  })),
  removeTask: (id) => set((state) => ({
    tasks: state.tasks.filter(task => task.id !== id)
  })),
  removeCompletedTasks: () => set((state) => ({
    tasks: state.tasks.filter(task => !task.checked)
  })),
  sortTasks: () => {
    const tasks = get().tasks
    return [...tasks].sort((a, b) => {
      const dateA = new Date(`${a.date} ${a.time}`)
      const dateB = new Date(`${b.date} ${b.time}`)
      return dateA.getTime() - dateB.getTime()
    })
  }
}))

export { useTaskStore }

