import { createStore, applyMiddleware } from "redux";
import { RootReducer } from "./RootReducer";
import createSagaMiddleware from "@redux-saga/core";
import { RootSaga } from "../Middleware/RootSaga";

const saga = createSagaMiddleware();
export const Store = createStore(RootReducer, 
    applyMiddleware(saga)
    );
saga.run(RootSaga);
