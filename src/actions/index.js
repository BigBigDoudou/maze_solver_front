export const ADD_ROW = 'ADD_ROW'
export const ADD_COLUMN = 'ADD_COLUMN'
export const CHANGE_FINISH = 'CHANGE_FINISH'
export const CHANGE_START = 'CHANGE_START'
export const EMPTY = 'EMPTY'
export const FILL = 'FILL'
export const RANDOMIZE = 'RANDOMIZE'
export const RESET = 'RESET'
export const ROTATE = 'ROTATE'
export const SERVER_ACTIVATED = 'SERVER_ACTIVATED'
export const SET_CELLS = 'SET_CELLS'
export const SET_FINISH = 'SET_FINISH'
export const SET_HEIGHT = 'SET_HEIGHT'
export const SET_START = 'SET_START'
export const SET_WIDTH = 'SET_WIDTH'
export const SOLVED_MAZE = 'SOLVED_MAZE'
export const UNSOLVED_MAZE = 'UNSOLVED_MAZE'
export const UPDATE_CELL = 'UPDATE_CELL'

export const BASE_URL = 'https://tiny-pathfinder.herokuapp.com/mazes'

export function activateServer() {
  const url = `${BASE_URL}/server`
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
        if ((x === 1) && (y === middleHeight - 1)) {
          character = 'S'
        } else if ((x === width - 2) && (y === middleHeight)) {
          character = 'F'
        } else {
          character = 'W'
        }
        cells += character
      }
    }
  return {
    type: SET_CELLS,
    payload: cells
  }
}

export function randomize(width, height, start, finish) {
  let cells = ''
  const start_x = start % width
  const start_y = (start - start_x) / width
  const finish_x = finish % width
  const finish_y = (finish - finish_x) / width
  for (let y = 0; y <= height - 1; y++) {
      for (let x = 0; x <= width - 1; x++) {
        let character = null
        if ((x === start_x) && (y === start_y)) {
          character = 'S'
        } else if ((x === finish_x) && (y === finish_y)) {
          character = 'F'
        } else {
          character = ['W', 'P'][Math.floor(Math.random() * 2)]
        }
        cells += character
      }
    }
  return {
    type: RANDOMIZE,
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
    payload: y * width + x
  }
}

export function setStart(x, y, width) {
  return {
    type: SET_START,
    payload: y * width + x
  }
}

export function changeFinish(x, y, width) {
  return {
    type: CHANGE_FINISH,
    payload: y * width + x
  }
}

export function setFinish(x, y, width) {
  return {
    type: SET_FINISH,
    payload: y * width + x
  }
}

export function solveMaze(maze) {
  const url = `${BASE_URL}/solve`
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

export function addColumn(width, cells) {
  let cells_after = ''
  for (let i = 0; i <= cells.length - 1; i++) {
    cells_after += cells[i]
    if ((i + 1) % width === 0) {
      cells_after += 'W'
    }
  }
  return {
    type: ADD_COLUMN,
    payload: cells_after
  }
}

export function addRow(width) {
  let row = ''
  for (let x = 0; x <= width - 1; x++) {
    row += 'W'
  }
  return {
    type: ADD_ROW,
    payload: row
  }
}

export function rotate(cells) {
  return {
    type: ROTATE,
    payload: cells.split('').reverse().join('')
  }
}

export function fill(cells) {
  return {
    type: FILL,
    payload: cells.replace(/P/g, 'W')
  }
}

export function empty(cells) {
  return {
    type: EMPTY,
    payload: cells.replace(/W/g, 'P')
  }
}

export function unsolveMaze(cells) {
  return {
    type: UNSOLVED_MAZE,
    payload: cells.replace(/X/g, 'P')
  }
}
