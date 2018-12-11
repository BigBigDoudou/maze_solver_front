export const SERVER_ACTIVATED = 'SERVER_ACTIVATED';
export const SET_WIDTH = 'SET_WIDTH';
export const UPDATE_WIDTH = 'UPDATE_WIDTH';
export const SET_HEIGHT = 'SET_HEIGHT';
export const UPDATE_HEIGHT = 'UPDATE_HEIGHT';
export const SET_CELLS = 'SET_CELLS';
export const UPDATE_CELL = 'UPDATE_CELL';
export const SOLVED_MAZE = 'SOLVED_MAZE';
export const CHANGE_START = 'CHANGE_START';
export const SET_START = 'SET_START';
export const CHANGE_EXIT = 'CHANGE_EXIT';
export const SET_EXIT = 'SET_EXIT';

export const BASE_URL = 'https://maze-pathfinder.herokuapp.com';

export function activateServer() {
  const url = `${BASE_URL}/mazes`;
  const promise = fetch(url).then(response => response.json())

  return {
    type: SERVER_ACTIVATED,
    payload: promise
  };
}

export function setCells(width, height) {
  let cells = ''
  const middleHeight = Math.round(height / 2);
  for (let y = 0; y <= height - 1; y++) {
      for (let x = 0; x <= width - 1; x++) {
        const character = null
        if (x == 0 || y == 0 || y == height - 1 || x == width - 1) {
          character = 'W'
        } else if ((x == 1) && (y == middleHeight)) {
          character = 'S'
        } else if ((x == width - 2) && (y == middleHeight)) {
          character = 'E'
        } else {
          character = 'P'
        }
        cells += character
      }
    }
  return {
    type: SET_CELLS,
    payload: cells
  };
}

export function updateCell(x, y, width, type) {
  const number = y * width + x
  return {
    type: UPDATE_CELL,
    payload: [number, type]
  };
}

export function changeStart(x, y, width) {
  const number = y * width + x
  return {
    type: CHANGE_START,
    payload: number
  };
}

export function setStart(x, y, width) {
  const number = y * width + x
  return {
    type: SET_START,
    payload: number
  };
}

export function changeExit(x, y, width) {
  const number = y * width + x
  return {
    type: CHANGE_EXIT,
    payload: number
  };
}

export function setExit(x, y, width) {
  const number = y * width + x
  return {
    type: SET_EXIT,
    payload: number
  };
}

export function solveMaze(maze) {
  const url = `${BASE_URL}/mazes/find_path`;
  const promise = fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(maze)
  }).then(response => response.json())

  return {
    type: SOLVED_MAZE,
    payload: promise
  };
}
