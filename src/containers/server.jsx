import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class Server extends Component {
  render () {
    return(
      <div id='server'>
        <div className={`server-icon server-icon-${this.props.server ? 'true' : 'false'}`}></div>
        <p className={`server-text server-text-${this.props.server ? 'true' : 'false'}`}>
          {this.props.server ? 'connected to server' : 'waiting for server response'}
        </p>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    server: state.server
  }
}

export default connect(mapStateToProps, null)(Server)
