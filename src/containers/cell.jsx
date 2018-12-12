import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { updateCell } from '../actions'
import { changeStart } from '../actions'
import { setStart } from '../actions'
import { changeFinish } from '../actions'
import { setFinish } from '../actions'

class Cell extends Component {
  cell = () => {
    return this.props.cells[this.props.y * this.props.width + this.props.x]
  }

  updateCell = () => {
    const cell = this.cell()
    const x = this.props.x, y = this.props.y, width = this.props.width
    if (this.props.start && cell != 'F') {
      this.props.setStart(x, y, width)
    } else if (this.props.finish && cell != 'S') {
      this.props.setFinish(x, y, width)
    } else if (cell === 'S' && !this.props.finish) {
      this.props.changeStart(x, y, width)
    } else if (cell === 'F' && !this.props.start) {
      this.props.changeFinish(x, y, width)
    } else if (cell === 'W') {
      this.props.updateCell(x, y, width, 'P')
    } else if (cell === 'P') {
      this.props.updateCell(x, y, width, 'W')
    } else {
      console.log('Something went wrong!')
    }
  }

  render () {
    return(
      <div
        className={`cell cell-${this.cell()}${this.props.start && this.cell() != 'F' ? ' cell-start-free' : ''}${this.props.finish && this.cell() != 'S' ? ' cell-finish-free' : ''}`}
        onClick={this.updateCell}
      >
        <div className='path'></div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { updateCell, changeStart, setStart, changeFinish, setFinish },
    dispatch
  )
}

const mapStateToProps = (state) => {
  return {
    cells: state.cells,
    width: state.width,
    start: state.start,
    finish: state.finish
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cell)

