import { writable } from 'svelte/store';

const initialTasks = [
  { id: 1, label: 'Admire Amruth', checked: false, priority: 'yes', date: '12/2/24', time: '11:59 PM', category: 'Team 2554 Robotics Onboarding'},
  { id: 2, label: 'Develop C++ Interpreter', checked: false, priority: 'yes', date: '12/2/24', time: '11:59 PM', category: 'Team 2554 Robotics Onboarding' },
  { id: 3, label: 'Make a compiler for C ', checked: false, priority: 'no', date: '12/19/24', time: '11:59 PM', category: 'Team 2554 Robotics Onboarding' },
  { id: 4, label: 'Learn Rust', checked: false, priority: 'yes', date: '12/2/24', time: '11:59 PM', category: 'Team 2554 Robotics Onboarding'},
  { id: 5, label: 'Study for Robotics Test', checked: false, priority: 'no', date: '12/19/24', time: '11:59 PM', category: 'Team 2554 Robotics Onboarding'}
];

export const taskStore = writable(initialTasks);

