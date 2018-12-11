import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { empty } from '../actions'

class Empty extends Component {
  empty = () => {
    this.props.empty(this.props.cells)
  }

  render () {
    return(
      <button
        className='btn btn-empty'
        onClick={this.empty}
      >
        empty
        <p className="btn-helper">empty all walls in the maze</p>
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
    { empty },
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Empty)
