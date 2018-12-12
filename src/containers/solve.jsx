import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { solveMaze } from '../actions'

class Solve extends Component {
  solveMaze = () => {
    this.props.solveMaze(
      { serial: this.props.cells,
        width: this.props.width }
    )
  }

  render () {
    return(
      <button
        className='btn btn-solve'
        onClick={this.solveMaze}
      >
        solve maze
        <p className="btn-helper">launch the algorithm to solve the maze!</p>
      </button>
    )
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
    cells: state.cells,
    width: state.width
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Solve)
