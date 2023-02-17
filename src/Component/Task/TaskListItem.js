import { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { taskDeleteAction, taskUpdateAction } from "./ActionType";

export const TaskListItem = ({ info }) => {
  const dispatch = useDispatch();
  const [isEditStatus, setIsEditStatus] = useState(false);
  const [updatedTask, setUpdatedTask] = useState(info.taske);

  const onChangeTaskHandler = (event) => {
    setUpdatedTask(event.target.value);
  };
  const onEditHandler = () => {
    const updatedTaskInfo = {
      task: updatedTask,
      id: info.id,
    };

    if (isEditStatus) {
      taskUpdateAction(dispatch, updatedTaskInfo);
    }
    setIsEditStatus(!isEditStatus);
  };
  const onDeleteHandler = () => taskDeleteAction(dispatch, info.id);
  return (
    <Fragment>
      <div>
        <li>
          {isEditStatus ? (
            <input type="text" onChange={onChangeTaskHandler} />
          ) : (
            info.task
          )}
        </li>
        <div>
          <button onClick={onEditHandler}>
            {isEditStatus ? "Update" : "Edit"}
          </button>
          <button onClick={onDeleteHandler}>Delete</button>
        </div>
      </div>
    </Fragment>
  );
};
