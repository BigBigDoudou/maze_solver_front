import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Cell from './cell';

import { solveMaze } from '../actions'

class Maze extends Component {
  componentWillMount() {}

  solveMaze = () => {
    this.props.solveMaze(
      { serialized: this.props.serialized,
        width: this.props.width }
    );
  }

  cellsList = () => {
    const cells = []
    for (let y = 0; y <= this.props.height - 1; y++) {
      for (let x = 0; x <= this.props.width - 1; x++) {
        cells.push(<Cell x={x} y={y} key={y.toString() + x.toString()} />)
      }
    }
    return cells
  }

  render () {
    return(
      <div id='maze'>
        <div className='cells-container'>{this.cellsList()}</div>
        <button onClick={this.solveMaze}>SOLVE MAZE</button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { solveMaze },
    dispatch
  )
}

const mapStateToProps = (state) => {
  return {
    serialized: state.serialized,
    width: state.width,
    height: state.height,
    maze: state.maze,
    solution: state.solution
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Maze)

