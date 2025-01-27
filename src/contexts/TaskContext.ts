import { createContext } from 'react';
import { TaskContext } from '../types/TaskContext';

export const TasksContext = createContext<TaskContext | null>(null);