import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { setCells } from '../actions'

class Reset extends Component {
  reset = () => {
    this.props.setCells(12, 8)
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
    { setCells },
    dispatch
  )
}

export default connect(null, mapDispatchToProps)(Reset)
