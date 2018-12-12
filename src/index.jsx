import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { logger } from 'redux-logger'
import reduxPromise from 'redux-promise'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import '../assets/stylesheets/application.scss'

import App from './containers/app'

import serverReducer from './reducers/server_reducer'
import cellsReducer from './reducers/cells_reducer'
import startReducer from './reducers/start_reducer'
import finishReducer from './reducers/finish_reducer'
import widthReducer from './reducers/width_reducer'
import heightReducer from './reducers/height_reducer'
import solvedReducer from './reducers/solved_reducer'
import pathReducer from './reducers/path_reducer'
import durationReducer from './reducers/duration_reducer'

const reducers = combineReducers({
  server: serverReducer,
  cells: cellsReducer,
  start: startReducer,
  finish: finishReducer,
  width: widthReducer,
  height: heightReducer,
  solved: solvedReducer,
  path: pathReducer,
  duration: durationReducer
})

const initialState = {
  server: false,
  cells: '',
  start: false,
  finish: false,
  width: 20,
  height: 12,
  solved: false,
  path: null,
  duration: null
}

const middlewares = applyMiddleware(reduxPromise, logger)
// const middlewares = applyMiddleware(reduxPromise)

const store = createStore(reducers, initialState, middlewares)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
    document.getElementById('root')
)
