import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import makeRootReducer from "./reducers";

const middlewares = [thunk];

let devToolsExtension = f => f;

/* istanbul ignore if  */
if (process.env.NODE_ENV === "development") {
  const { createLogger } = require("redux-logger");

  const logger = createLogger({ collapsed: true });
  middlewares.push(logger);

  if (window.devToolsExtension) {
    devToolsExtension = window.devToolsExtension();
  }
}

export default function configureStore(initialState = {}) {
  const store = createStore(
    makeRootReducer(),
    initialState,
    compose(
      applyMiddleware(...middlewares),
      devToolsExtension
    )
  );

  return store;
}
