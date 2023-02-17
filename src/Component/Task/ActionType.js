export const fetchTaskInfoAction = (dispatch) => {
  return dispatch({ type: "FETCH_TASK_INFO" });
};

export const addNewTaskAction = (dispatch, data) => {
  console.log("new ", data);
  return dispatch({ type: "ADD_NEW_TASK", payload: data });
};

export const taskUpdateAction = (dispatch, data) => {
  return dispatch({ type: "TASK_UPDATE", payload: data });
};

export const taskDeleteAction = (dispatch, taskId) => {
  return dispatch({ type: "TASK_DELETE", payload: taskId });
};
