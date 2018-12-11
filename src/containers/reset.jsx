import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { reset } from '../actions'

class Reset extends Component {
  reset = () => {
    this.props.reset(12, 8)
  }

  render () {
    return(
      <button
        className='btn btn-reset'
        onClick={this.reset}
      >
        reset
        <p className="btn-helper">go back to a maze with default values</p>
      </button>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { reset },
    dispatch
  )
}

export default connect(null, mapDispatchToProps)(Reset)
