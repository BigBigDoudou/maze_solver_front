import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Cells from './cells'
import Solve from './solve'
import Unsolve from './unsolve'
import AddRow from './add_row'
import AddColumn from './add_column'
import Fill from './fill'
import Empty from './empty'
import Rotate from './rotate'
import Server from './server'
import Reset from './reset'
import Result from './result'

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
        <Result />
        <div id='game'>
          <div id='actions'>
            <AddColumn />
            <AddRow />
            <Empty />
            <Fill />
            <Rotate />
            {this.props.path ? <Unsolve /> : <Solve /> }
            <Reset />
          </div>
          <Cells />
        </div>
        <Server />
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
    cells: state.cells,
    width: state.width,
    height: state.height,
    path: state.path
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
