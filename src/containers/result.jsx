import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class Result extends Component {
  response = () => {
    if(this.props.solved && this.props.path) {
      return <div>Shortest path: <div className='red-flag'><div>{this.props.path}</div></div> steps (calculation time: <div className='red-flag'><div>{this.props.duration}</div></div> ms). Click on the UNSOLVE MAZE button if you want to modify it.</div>
    } else if (this.props.solved && !this.props.path) {
      return <div>This maze can not be solved (calculation time: <div className='red-flag'><div>{this.props.duration}</div></div> ms).</div>
    } else {
      return <div></div>
    }
  }

  render () {
    return(
      <div id='result'>
        {this.response()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    solved: state.solved,
    path: state.path,
    duration: state.duration
  }
}

export default connect(mapStateToProps, null)(Result)

