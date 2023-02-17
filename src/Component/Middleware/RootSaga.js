import { all } from "redux-saga/effects";
import { addNewTaskAction, fetchTaskInfoAction, taskDeleteAction, taskUpdateAction } from "./SagaAction";

export function* RootSaga(){
    yield all([fetchTaskInfoAction(),addNewTaskAction(),taskDeleteAction(),taskUpdateAction()])
}