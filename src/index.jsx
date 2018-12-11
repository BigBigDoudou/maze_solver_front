import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';
import reduxPromise from 'redux-promise';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import '../assets/stylesheets/application.scss';

import Maze from './containers/maze';

import serverReducer from './reducers/server_reducer';
import cellsReducer from './reducers/cells_reducer';
import startReducer from './reducers/start_reducer';
import exitReducer from './reducers/exit_reducer';
import widthReducer from './reducers/width_reducer';
import heightReducer from './reducers/height_reducer';

const reducers = combineReducers({
  server: serverReducer,
  cells: cellsReducer,
  start: startReducer,
  exit: exitReducer,
  width: widthReducer,
  height: heightReducer
});

const initialState = {
  server: false,
  cells: '',
  start: false,
  exit: false,
  width: 24,
  height: 14
}

const middlewares = applyMiddleware(reduxPromise, logger);

const store = createStore(reducers, initialState, middlewares);

ReactDOM.render(
  <Provider store={store}>
    <Maze />
  </Provider>,
    document.getElementById('root')
);
