import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Cell from './cell'

class Maze extends Component {
  cellsList = () => {
    const cells = []
    for (let y = 0; y <= this.props.height - 1; y++) {
      for (let x = 0; x <= this.props.width - 1; x++) {
        cells.push(<Cell x={x} y={y} key={ `${x.toString()}_${y.toString()}` } />)
      }
    }
    return cells
  }

  gridSize = () => {
    return 800 / Math.max(this.props.width, this.props.height * 1.6)
  }

  render () {
    return(
      <div id='maze'
           style={{ gridTemplateColumns: `repeat(${this.props.width}, ${this.gridSize()}px)`,
                    gridTemplateRows: `repeat(${this.props.height}, ${this.gridSize()}px)` }}
      >{this.cellsList()}</div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    cells: state.cells,
    width: state.width,
    height: state.height
  }
}

export default connect(mapStateToProps, null)(Maze)
