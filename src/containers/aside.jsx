import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import AddColumn from './add_column'
import AddRow from './add_row'
import Empty from './empty'
import Fill from './fill'
import Reset from './reset'
import Result from './result'
import Rotate from './rotate'
import Solve from './solve'
import Unsolve from './unsolve'
import Server from './server'

class Aside extends Component {
  render () {
    return(
      <div id='aside'>
        <div id='buttons'>
          <AddColumn />
          <AddRow />
          <Empty />
          <Fill />
          <Rotate />
          {this.props.path ? <Unsolve /> : <Solve /> }
          <Reset />
        </div>
        <Result />
        <Server />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    path: state.path
  }
}

export default connect(mapStateToProps, null)(Aside)
