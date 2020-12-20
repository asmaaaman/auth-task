import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducers from "../reducer/rootReducer";
import rootSaga from "../saga/root";

const saga = createSagaMiddleware();
const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const store = createStore(
  rootReducers,
  composeEnhancers(applyMiddleware(saga))
);

saga.run(rootSaga);

export default store;
