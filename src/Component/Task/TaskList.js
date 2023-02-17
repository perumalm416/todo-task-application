import { Fragment } from "react";
import { useSelector } from "react-redux";
import { TaskListItem } from "./TaskListItem";

const TaskList = () => {
  const { taskItems, fetchLoadingStatus, fetchError } = useSelector(
    (state) => state.taskInfo
  );
  return (
    <Fragment>
      <h2>Task List</h2>
      {!fetchLoadingStatus ? (
        !fetchError ? (
          <ul>
            {taskItems &&
              taskItems.map((listInfo) => (
                <TaskListItem key={listInfo.id} info={listInfo} />
              ))}
          </ul>
        ) : (
          <h1>Something went to Failure in Server side</h1>
        )
      ) : (
        "In progressing the server call"
      )}
    </Fragment>
  );
};
export default TaskList;
