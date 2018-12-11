import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { updateCell } from '../actions';
import { changeStart } from '../actions';
import { setStart } from '../actions';
import { changeExit } from '../actions';
import { setExit } from '../actions';

class Cell extends Component {
  cell = () => {
    return this.props.cells[this.props.y * this.props.width + this.props.x];
  }

  updateCell = () => {
    const cell = this.cell();
    const x = this.props.x, y = this.props.y, width = this.props.width;
    if (this.props.start && cell !== 'E') {
      this.props.setStart(x, y, width);
    } else if (this.props.exit && cell !== 'S') {
      this.props.setExit(x, y, width);
    } else if (cell === 'S') {
      this.props.changeStart(x, y, width);
    } else if (cell === 'E') {
      this.props.changeExit(x, y, width);
    } else if (cell === 'W') {
      this.props.updateCell(x, y, width, 'P');
    } else if (cell === 'P') {
      this.props.updateCell(x, y, width, 'W');
    } else {
      console.log('Something went wrong!')
    };
  }

  render () {
    return(
      <div
        className={`cell cell-${this.cell()}`}
        onClick={this.updateCell}
      >
      <div className='path'></div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { updateCell, changeStart, setStart, changeExit, setExit },
    dispatch
  )
}

const mapStateToProps = (state) => {
  return {
    cells: state.cells,
    width: state.width,
    start: state.start,
    exit: state.exit
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cell)

