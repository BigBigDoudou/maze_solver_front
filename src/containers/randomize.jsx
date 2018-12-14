import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { randomize } from '../actions'

class Randomize extends Component {
  reset = () => {
    const start = this.props.cells.indexOf('S')
    const finish = this.props.cells.indexOf('F')
    this.props.randomize(this.props.width, this.props.height, start, finish)
  }

  render () {
    return(
      <button
        className='btn btn-action'
        onClick={this.reset}
      >
        randomize
        <p className="btn-helper">randomly populate maze</p>
      </button>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    width: state.width,
    height: state.height,
    cells: state.cells
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { randomize },
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Randomize)
