import { ReactNode } from "react";
import { Task } from "./Task";

export interface TaskContext {
  tasks: Task[];
  addTask: () => void;
  removeTask: (id: number) => void;
  markTask: (id: number) => void;
  editTask: (id: number) => void;
  inputValue: string;
  updateInputValue: (value: string) => void;
  editInputValue: string;
  setEditInputValue: (value: string) => void;
  editingTask: null | Task;
  setEditingTask: (value: null | Task) => void;
  confirmEdit: (id: number) => void;
  cancelEdit: () => void;
}

export interface TaskContextProviderProps {
  children: ReactNode;
}