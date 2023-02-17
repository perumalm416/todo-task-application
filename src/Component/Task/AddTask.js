import { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import {addNewTaskAction } from "./ActionType";

export const AddTask = () => {
  const [newTask, setNewTask] = useState("");
  const dispatch = useDispatch();

  const onAddTaskHandler = (event) => setNewTask(event.target.value);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const newTaskInfo = {
      task: newTask,
      id: Math.random(),
    };
    addNewTaskAction(dispatch, newTaskInfo);
    setNewTask("");
  };
  return (
    <Fragment>
      <form onSubmit={onSubmitHandler}>
        <div>
          <input
            type="text"
            placeholder="Enter the task..."
            name="add-task"
            value={newTask}
            onChange={onAddTaskHandler}
          />
          <button type="submit">Add Task</button>
        </div>
      </form>
    </Fragment>
  );
};
