export const ADD_ROW = 'ADD_ROW'
export const ADD_COLUMN = 'ADD_COLUMN'
export const CHANGE_EXIT = 'CHANGE_EXIT'
export const CHANGE_START = 'CHANGE_START'
export const SERVER_ACTIVATED = 'SERVER_ACTIVATED'
export const SET_CELLS = 'SET_CELLS'
export const SET_EXIT = 'SET_EXIT'
export const SET_HEIGHT = 'SET_HEIGHT'
export const SET_START = 'SET_START'
export const SET_WIDTH = 'SET_WIDTH'
export const SOLVED_MAZE = 'SOLVED_MAZE'
export const UPDATE_CELL = 'UPDATE_CELL'

export const BASE_URL = 'https://maze-pathfinder.herokuapp.com'

export function activateServer() {
  const url = `${BASE_URL}/mazes`
  const promise = fetch(url).then(response => response.json())

  return {
    type: SERVER_ACTIVATED,
    payload: promise
  }
}

export function setCells(width, height) {
  let cells = ''
  const middleHeight = Math.round(height / 2)
  for (let y = 0; y <= height - 1; y++) {
      for (let x = 0; x <= width - 1; x++) {
        let character = null
        if (x === 0 || y === 0 || y === height - 1 || x === width - 1) {
          character = 'W'
        } else if ((x === 1) && (y === middleHeight)) {
          character = 'S'
        } else if ((x === width - 2) && (y === middleHeight)) {
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
  }
}

export function updateCell(x, y, width, character) {
  return {
    type: UPDATE_CELL,
    number: y * width + x,
    character: character
  }
}

export function changeStart(x, y, width) {
  return {
    type: CHANGE_START,
    number: y * width + x
  }
}

export function setStart(x, y, width) {
  return {
    type: SET_START,
    number: y * width + x
  }
}

export function changeExit(x, y, width) {
  return {
    type: CHANGE_EXIT,
    number: y * width + x
  }
}

export function setExit(x, y, width) {
  return {
    type: SET_EXIT,
    number: y * width + x
  }
}

export function solveMaze(maze) {
  console.log('start path finding')
  const url = `${BASE_URL}/mazes/find_path`
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
  }
}

// ABCD
// EFGH
// IJKL

// cells =       ABCDEFGHIJKL
// cells_after = ABCXDEFGXHIJKXL

export function addColumn(width, height, cells) {
  let cells_after = ''
  for (let i = 0; i <= cells.length - 1; i++) {
    if ((i + 1) % width === 0) {
      if (i < width || i > cells.length - width ) {
        cells_after += 'W'
      } else {
        cells_after += 'P'
      }
    }
    cells_after += cells[i]
  }
  return {
    type: ADD_COLUMN,
    payload: cells_after
  }
}

export function addRow(width, height) {
  const number = (height - 1) * width
  let row = ''
  for (let x = 0; x <= width - 1; x++) {
    let character = null
    if (x === 0 || x === width - 1) {
      character = 'W'
    } else {
      character = 'P'
    }
    row += character
  }
  return {
    type: ADD_ROW,
    row: row,
    number: number
  }
}

// height 4 / width 5
// ABCDE
// FGHIJ
// KLMNO
// PQRST
