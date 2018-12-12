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
    const rootElt = document.getElementById('root')
    const verticalSpace = rootElt.offsetHeight - 40
    console.log(verticalSpace)
    const horizontalSpace = rootElt.offsetWidth * 3 / 4
    const maxCellHeight = verticalSpace / this.props.height
    const maxCellWidth = horizontalSpace / this.props.width
    return Math.min(maxCellHeight, maxCellWidth)
  }


  render () {
    return(
      <div id='maze-container'>
        <div id='maze'
             style={{ gridTemplateColumns: `repeat(${this.props.width}, ${this.gridSize()}px`,
                      gridTemplateRows: `repeat(${this.props.height}, ${this.gridSize()}px` }}
        >
          {this.cellsList()}
        </div>
      </div>
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
