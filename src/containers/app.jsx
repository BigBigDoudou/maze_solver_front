import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Maze from './maze'
import Aside from './aside'

import { activateServer } from '../actions'
import { setCells } from '../actions'

class App extends Component {
  componentWillMount() {
    this.props.activateServer()
    this.props.setCells(this.props.width, this.props.height)
  }

  render () {
    return(
      <div id='app'>
        <div id='game'>
          <Aside />
          <Maze />
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { activateServer, setCells },
    dispatch
  )
}

const mapStateToProps = (state) => {
  return {
    width: state.width,
    height: state.height
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
