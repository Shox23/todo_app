import "./TaskItem.css";
import React, { useCallback } from "react";
import { TaskItemProps } from "./types";
import { useTaskContext } from "../../contexts/TaskContextProvider";
import editIcon from "../../assets/icons/edit.svg";
import deleteIcon from "../../assets/icons/delete.svg";
import checkIcon from "../../assets/icons/check.svg";
import closeIcon from "../../assets/icons/close.svg";

const TaskItem: React.FC<TaskItemProps> = ({ id, text, index, isDone }) => {
  const {
    removeTask,
    markTask,
    setEditInputValue,
    editInputValue,
    editingTask,
    confirmEdit,
    editTask,
    cancelEdit,
  } = useTaskContext();
  const isEditing = editingTask?.id === id;

  const handleConfirmEdit = useCallback(
    () => confirmEdit(id),
    [confirmEdit, id]
  );
  const handleMarkTask = useCallback(() => markTask(id), [markTask, id]);
  const handleRemoveTask = useCallback(() => removeTask(id), [removeTask, id]);
  const handleEditTask = useCallback(() => editTask(id), [editTask, id]);

  return (
    <li className={`task-item ${isDone ? "active" : ""}`}>
      <div className="task-item__content">
        <p className="task-item__index">{index}</p>
        {isEditing ? (
          <input
            type="text"
            value={editInputValue}
            className="task-item__input"
            onChange={(e) => setEditInputValue(e.target.value)}
          />
        ) : (
          <p className="task-item__text">{text}</p>
        )}
      </div>
      {isEditing ? (
        <div className="task-item__controls">
          <button onClick={cancelEdit} className="task-item__cancel">
            <img src={closeIcon} alt="cancel" />
          </button>
          <button onClick={handleConfirmEdit} className="task-item__done">
            <img src={checkIcon} alt="done" />
          </button>
        </div>
      ) : (
        <div className="task-item__controls">
          <button onClick={handleMarkTask} className="task-item__done">
            <img src={checkIcon} alt="done" />
          </button>
          <button onClick={handleRemoveTask} className="task-item__delete">
            <img src={deleteIcon} alt="delete" />
          </button>
          <button onClick={handleEditTask} className="task-item__edit">
            <img src={editIcon} alt="edit" />
          </button>
        </div>
      )}
    </li>
  );
};

export default TaskItem;
