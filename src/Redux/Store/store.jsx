import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducers from "../reducer/rootReducer";
import rootSaga from "../saga/root";

import { createLogger } from "redux-logger";

const saga = createSagaMiddleware();
const logger = createLogger();
const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const store = createStore(
  rootReducers,
  composeEnhancers(applyMiddleware(saga, logger))
);

saga.run(rootSaga);

export default store;
