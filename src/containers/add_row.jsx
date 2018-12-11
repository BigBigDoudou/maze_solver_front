import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { addRow } from '../actions'

class AddRow extends Component {
  addRow = () => {
    if (this.props.height < 20) {
      this.props.addRow(this.props.width)
    }
  }

  render () {
    return(
      <button
        className={`btn btn-row${this.props.height >= 20 ? ' btn-disabled' : ''}`}
        onClick={this.addRow}
      >
        +1 row
        <p className="btn-helper">{this.props.height >= 20 ? "You can't add more rows" : 'Add a row to the maze'}</p>
      </button>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { addRow },
    dispatch
  )
}

const mapStateToProps = (state) => {
  return {
    width: state.width,
    height: state.height
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddRow)
