import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class Cell extends Component {
  render () {
    return(
      <div className='cell'>
        <div className='cell-coordinates'>{this.props.x}, {this.props.y}</div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { },
    dispatch
  )
}

const mapStateToProps = (state) => {
  return {
    serialized: state.serialized,
    width: state.width,
    height: state.height,
    maze: state.maze,
    solution: state.solution
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cell)

