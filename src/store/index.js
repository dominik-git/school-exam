import { createStore, applyMiddleware, compose } from "redux";
import { fromJS } from "immutable";
import thunk from "redux-thunk";
import rootReducer from "../reducers/index";

export default function configureStore(initialState) {
  const middlewares = [thunk];
  const enhancers = [applyMiddleware(...middlewares)];

  const composeEnhancers =
    process.env.NODE_ENV !== "production" && typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
      : compose;

  const store = createStore(rootReducer, fromJS(initialState), composeEnhancers(...enhancers));
  return store;
}
