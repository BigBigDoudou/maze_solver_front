import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';
import reduxPromise from 'redux-promise';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import '../assets/stylesheets/application.scss';

import Maze from './containers/maze';

import serializedReducer from './reducers/serialized_reducer';
import widthReducer from './reducers/width_reducer';
import heightReducer from './reducers/height_reducer';
import solutionReducer from './reducers/solution_reducer';

const reducers = combineReducers({
  serialized: serializedReducer,
  width: widthReducer,
  height: heightReducer,
  solution: solutionReducer
});

const initialState = {
  serialized: 'WWWWWWWWWWWSPWWWPWWWWWPWPPPPPWWWPPPWWWEWWWWWWWWWWW',
  width: 10,
  height: 10,
  solution: null
}

const middlewares = applyMiddleware(reduxPromise, logger);

const store = createStore(reducers, initialState, middlewares);

ReactDOM.render(
  <Provider store={store}>
    <Maze />
  </Provider>,
    document.getElementById('root')
);
