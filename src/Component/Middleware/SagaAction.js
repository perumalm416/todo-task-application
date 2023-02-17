import axios from "axios";
import { call, delay, put, takeEvery } from "redux-saga/effects";

export function* fetchTaskInfoAction() {
  yield takeEvery("FETCH_TASK_INFO", fetchTaskInfo);
}
export function* addNewTaskAction() {
  yield takeEvery("ADD_NEW_TASK", addNewTaskInfo);
}
export function* taskDeleteAction() {
  yield takeEvery("TASK_DELETE", deleteTaskInfo);
}
export function* taskUpdateAction() {
  yield takeEvery("TASK_UPDATE", updateTaskInfo);
}

function* fetchTaskInfo(action) {
  const apiConfig = {
    url: "http://localhost:4000/taskInfo",
    methodType: axios.get,
    data: undefined,
  };
  yield put({ type: "FETCH_START" });
  delay(1000);
  const { successResponse, errorResponse } = yield call(
    serverApiCall,
    apiConfig
  );
  yield put({ type: "FETCH_END" });
  if (successResponse) {
    yield put({ type: "FETCH_SUCCESS", payload: successResponse });
  } else {
    yield put({ type: "FETCH_FAILURE" });
  }
}

function* addNewTaskInfo(action) {
  const apiConfig = {
    url: "http://localhost:4000/taskInfo",
    methodType: axios.post,
    data: action.payload,
  };
  const { successResponse, errorResponse } = yield call(
    serverApiCall,
    apiConfig
  );
  if (successResponse) {
    yield put({ type: "FETCH_TASK_INFO" });
  } else {
    yield put({ type: "FETCH_FAILURE" });
  }
}

function* deleteTaskInfo(action) {
  const apiConfig = {
    url: `http://localhost:4000/taskInfo/${action.payload}`,
    methodType: axios.delete,
    data: undefined,
  };
  const { successResponse, errorResponse } = yield call(
    serverApiCall,
    apiConfig
  );
  if (successResponse) {
    yield put({ type: "FETCH_TASK_INFO" });
  } else {
    yield put({ type: "FETCH_FAILURE" });
  }
}
function* updateTaskInfo(action) {
  const apiConfig = {
    url: `http://localhost:4000/taskInfo/${action.payload.id}`,
    methodType: axios.put,
    data: action.payload,
  };
  const { successResponse, errorResponse } = yield call(
    serverApiCall,
    apiConfig
  );
  if (successResponse) {
    yield put({ type: "FETCH_TASK_INFO" });
  } else {
    yield put({ type: "FETCH_FAILURE" });
  }
}
const serverApiCall = (apiConfig) => {
  const serverResponse = apiConfig
    .methodType(apiConfig.url, apiConfig.data)
    .then((response) => {
      return { successResponse: response.data };
    })
    .catch((error) => {
      return { errorResponse: error.message };
    });
  return serverResponse;
};
