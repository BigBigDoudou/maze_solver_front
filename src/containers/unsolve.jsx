import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { unsolveMaze } from '../actions'

class Unsolve extends Component {
  unsolveMaze = () => {
    this.props.unsolveMaze(this.props.cells)
  }

  render () {
    return(
      <button
        className='btn btn-unsolve'
        onClick={this.unsolveMaze}
      >
        unsolve maze
        <p className="btn-helper">unsolve the maze so you can update it</p>
      </button>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { unsolveMaze },
    dispatch
  )
}

const mapStateToProps = (state) => {
  return {
    cells: state.cells
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Unsolve)
