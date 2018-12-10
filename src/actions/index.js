const GENERATE_MAZE = 'GENERATE_MAZE'
const BASE_URL = 'https://maze-pathfinder.herokuapp.com'

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
    type: 'MAZE_SOLVED',
    payload: promise
  };
}
