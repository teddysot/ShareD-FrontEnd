import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "antd/dist/antd.css";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { BrowserRouter } from 'react-router-dom';
import socketReducer from './store/reducers/socket'
import roleReducer from './store/reducers/role'
import tableReducer from './store/reducers/tableList'
import thunk from 'redux-thunk'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const rootReducer = combineReducers({
  socket: socketReducer,
  role: roleReducer,
  menuListReducer,
});

const logger = (store) => {
  return (next) => {
    return (action) => {
      console.log(`[Middleware] Dispatching`);
      const result = next(action);
      console.log(`[Middleware] next state`);
      return result;
    };
  };
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(logger, thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
