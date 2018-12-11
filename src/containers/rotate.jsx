import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { rotate } from '../actions'

class Rotate extends Component {
  rotate = () => {
    this.props.rotate(this.props.cells)
  }

  render () {
    return(
      <button
        className='btn btn-rotate'
        onClick={this.rotate}
      >
        rotate
        <p className="btn-helper">apply a rotation to the maze (180°)</p>
      </button>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    cells: state.cells
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { rotate },
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Rotate)
