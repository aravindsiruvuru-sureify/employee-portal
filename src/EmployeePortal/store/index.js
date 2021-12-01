import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

import employeeStore from "./employeeStore/reducer";

const rootReducer = combineReducers({ employeeStore });

const middleWares = [thunk, logger];

// if (process.env.NODE_ENV === 'development') {
//   middleWares = [...middleWares, logger]
// }

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(...middleWares),
    window.devToolsExtension ? window.devToolsExtension() : (f) => f
  )
);

export default store;
