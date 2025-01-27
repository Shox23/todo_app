import React from "react";
import { useTaskContext } from "../../contexts/TaskContextProvider";
import TaskItem from "../TaskItem/TaskItem";
import "./TaskList.css";

const TaskList: React.FC = () => {
  const { tasks } = useTaskContext();
  return (
    <ul className="task-list">
      {tasks.map((item, idx) => {
        return (
          <TaskItem
            id={item.id}
            text={item.text}
            isDone={item.isDone}
            key={item.id}
            index={idx + 1}
          />
        );
      })}
    </ul>
  );
};

export default TaskList;
