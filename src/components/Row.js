import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Cell from './Cell';

const R = require('ramda');

const renderCells = (props) => {
  return props.cells.map((cell, index) => {
    return (
      <Cell
        key={`cell-${props.row}-${index}`}
        row={props.row}
        col={index}
        backgroundColor={props.cells[index]}
        fillSingleCell={props.fillSingleCell}
        fillMultipleCells={props.fillMultipleCells}
        html2canvasIgnore={props.html2canvasIgnore}
        mode={props.mode}
        startMultiFillingMode={props.startMultiFillingMode}
        endMultiFillingMode={props.endMultiFillingMode}
      />
    );
  });
};

class Row extends Component {
  shouldComponentUpdate(nextProps) {
    return !R.equals(nextProps.cells, this.props.cells) ||
      nextProps.html2canvasIgnore !== this.props.html2canvasIgnore ||
      !R.equals(nextProps.mode, this.props.mode)
  }

  render() {
    return (
      <div className="editor-grid__row">
        <div className="editor-grid__cell editor-grid__cell--counter">
          {(this.props.row + 1)}
        </div>
        { renderCells(this.props) }
      </div>
    );
  }
}

Row.propTypes = {
  row: PropTypes.number.isRequired,
  cells: PropTypes.array.isRequired,
  fillSingleCell: PropTypes.func.isRequired,
  fillMultipleCells: PropTypes.func.isRequired,
  html2canvasIgnore: PropTypes.bool.isRequired,
  mode: PropTypes.object.isRequired,
  startMultiFillingMode: PropTypes.func.isRequired,
  endMultiFillingMode: PropTypes.func.isRequired
};

export default Row;
