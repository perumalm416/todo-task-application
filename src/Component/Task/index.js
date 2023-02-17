import React, { Fragment, lazy, Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchTaskInfoAction } from "./ActionType";
import { AddTask } from "./AddTask";
// import { TaskList } from "./TaskList";

const TaskList = lazy(() => import("./TaskList"));

export const Tasks = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchTaskInfoAction(dispatch);
  }, []);

  return (
    <Fragment>
      <div>
        <h1>Task Application</h1>
        <AddTask />
        <Suspense fallback={<h1>Loading..</h1>}>
          <TaskList />
        </Suspense>
      </div>
    </Fragment>
  );
};
