import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { fill } from '../actions'

class Fill extends Component {
  fill = () => {
    this.props.fill(this.props.cells)
  }

  render () {
    return(
      <button
        className='btn btn-fill'
        onClick={this.fill}
      >
        fill
        <p className="btn-helper">fill all the maze with walls</p>
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
    { fill },
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Fill)
