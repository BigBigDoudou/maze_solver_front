import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Cell from './cell'

import { activateServer } from '../actions'
import { setCells } from '../actions'
import { addColumn } from '../actions'
import { addRow } from '../actions'
import { solveMaze } from '../actions'

class Maze extends Component {
  componentWillMount() {
    this.props.activateServer()
    this.props.setCells(this.props.width, this.props.height)
  }

  addColumn = () => {
    if (this.props.width < 20) {
      this.props.addColumn(this.props.width, this.props.height, this.props.cells)
    }
  }

  addRow = () => {
    if (this.props.height < 20) {
      this.props.addRow(this.props.width, this.props.height)
    }
  }

  solveMaze = () => {
    this.props.solveMaze(
      { serialized: this.props.cells,
        width: this.props.width }
    )
  }

  cellsList = () => {
    const cells = []
    for (let y = 0; y <= this.props.height - 1; y++) {
      for (let x = 0; x <= this.props.width - 1; x++) {
        cells.push(<Cell x={x} y={y} key={ `${x.toString()}_${y.toString()}` } />)
      }
    }
    return cells
  }

  render () {
    return(
      <div id='maze'>
        <div className='server'>
          <div className={`server-icon server-icon-${this.props.server ? 'true' : 'false'}`}></div>
          <p className={`server-text server-text-${this.props.server ? 'true' : 'false'}`}>
            {this.props.server ? 'connected to server' : 'waiting for server response'}
          </p>
        </div>
        <div className='actions'>
          <button
            className={`btn btn-column${this.props.width >= 20 ? ' btn-disabled' : ''}`}
            onClick={this.addColumn}
          >
            {this.props.width >= 20 ? 'maximum columns reached' : 'add a column'}
          </button>
          <button
            className={`btn btn-row${this.props.height >= 20 ? ' btn-disabled' : ''}`}
            onClick={this.addRow}
          >
            {this.props.height >= 20 ? 'maximum rows reached' : 'add a row'}
          </button>
        </div>
        <div className='cells-container'
             style={{ gridTemplateColumns: `repeat(${this.props.width}, ${1000 / Math.max(this.props.width, this.props.height * 1.6)}px)`,
                      gridTemplateRows: `repeat(${this.props.height}, ${1000 / Math.max(this.props.width, this.props.height * 1.6)}px)` }}
        >{this.cellsList()}</div>
        <div className='actions'>
          <button
            className='btn btn-solve'
            onClick={this.solveMaze}
          >
            SOLVE MAZE
          </button>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { activateServer, setCells, addColumn, addRow, solveMaze },
    dispatch
  )
}

const mapStateToProps = (state) => {
  return {
    server: state.server,
    cells: state.cells,
    width: state.width,
    height: state.height
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Maze)
