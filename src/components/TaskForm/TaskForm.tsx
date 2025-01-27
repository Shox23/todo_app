import "./TaskForm.css";
import plusIcon from "../../assets/icons/plus.svg";
import { useTaskContext } from "../../contexts/TaskContextProvider";
import React, { useCallback } from "react";

const TaskForm: React.FC = () => {
  const { inputValue, updateInputValue, addTask } = useTaskContext();

  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      addTask();
    },
    [addTask]
  );

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add task"
        className="task-form__input"
        value={inputValue}
        onChange={(e) => updateInputValue(e.target.value)}
      />
      <button type="submit" className="task-form__btn">
        <img className="task-form__icon" src={plusIcon} alt="add" />
      </button>
    </form>
  );
};

export default TaskForm;
