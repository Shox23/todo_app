import React, { useContext, useState } from "react";
import { TasksContext } from "./TaskContext";
import { Task } from "../types/Task";
import { TaskContext, TaskContextProviderProps } from "../types/TaskContext";

export const TaskContextProvider: React.FC<TaskContextProviderProps> = ({ children }) => {
  const context = useCreateAppContext();
  return (
    <TasksContext.Provider value={context}>{children}</TasksContext.Provider>
  );
};

export const useTaskContext = (): TaskContext => {
  const context = useContext(TasksContext);
  if (!context) throw new Error("Use app context within provider!");
  return context;
}

export const useCreateAppContext = () => {
  const [editingTask, setEditingTask] = useState<null | Task>(null);
  const [inputValue, setInputValue] = useState<string>("");
  const [editInputValue, setEditInputValue] = useState<string>("");
  const [tasks, setTasks] = useState<Task[]>([]);

  const updateInputValue = (value: string) => {
    setInputValue(value);
  };

  const addTask = () => {
    if (inputValue.length > 0) {
      const task: Task = {
        text: inputValue.trim(),
        isDone: false,
        id: Date.now(),
      };
      setTasks([...tasks, task]);
      setInputValue("");
    } else {
      alert("Input task name!");
    }
  };

  const removeTask = (id: number) => {
    setTasks(tasks.filter((item) => item.id !== id));
  };

  const markTask = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isDone: !task.isDone } : task
      )
    );
  };

  const editTask = (id: number) => {
    const currentTask = tasks.find((item) => item.id === id);
    if (currentTask) {
      setEditingTask(currentTask);
      setEditInputValue(currentTask.text);
    } else {
      alert("Task not found");
    }
  };

  const confirmEdit = (id: number) => {
    if (!editInputValue.trim()) return;
    setTasks(
      tasks.map((item) =>
        item.id === id && item.text !== editInputValue
          ? { ...item, text: editInputValue }
          : item
      )
    );
    setEditingTask(null);
  };

  const cancelEdit = () => {
    setEditInputValue("");
    setEditingTask(null);
  };

  return {
    tasks,
    addTask,
    removeTask,
    markTask,
    editTask,
    inputValue,
    updateInputValue,
    editInputValue,
    setEditInputValue,
    editingTask,
    setEditingTask,
    confirmEdit,
    cancelEdit,
  };
};
