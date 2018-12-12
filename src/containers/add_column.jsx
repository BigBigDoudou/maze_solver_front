import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { addColumn } from '../actions'

class AddColumn extends Component {
  addColumn = () => {
    if (this.props.width < 40) {
      this.props.addColumn(this.props.width, this.props.cells)
    }
  }

  render () {
    return(
      <button
        className={`btn btn-column${this.props.width >= 40 ? ' btn-disabled' : ''}`}
        onClick={this.addColumn}
      >
        +1 column
        <p className="btn-helper">{this.props.width >= 40 ? "You can't add more columns" : 'Add a column to the maze'}</p>
      </button>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { addColumn },
    dispatch
  )
}

const mapStateToProps = (state) => {
  return {
    cells: state.cells,
    width: state.width,
    height: state.height
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddColumn)
