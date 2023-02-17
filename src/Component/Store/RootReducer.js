import { combineReducers } from "redux";
import { TaskListReducer } from "../Task/Reducer";




export const RootReducer=combineReducers({
    taskInfo:TaskListReducer,
})