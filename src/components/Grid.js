import React from 'react';
import PropTypes from 'prop-types';
import Row from './Row';
import GridHeader from './GridHeader';

const renderRows = props => {
  return props.grid.map((row, index) => (
    <Row
      key={`row-${index}`}
      row={index}
      cellWidth={props.cellWidth}
      cells={props.grid[index]}
      html2canvasIgnore={props.html2canvasIgnore}
      modes={props.modes}
      onClick={props.onClick}
      onMouseEnter={props.onMouseEnter}
    />
  ));
};

const Grid = props => {
  return (
    <div
      className="editor-grid"
      id="editor-grid"
      onMouseLeave={props.onMouseLeave}
    >
      <GridHeader
        gridHeader={props.gridHeader}
        cellWidth={props.cellWidth}
      />
      { renderRows(props) }
    </div>
  );
};

Grid.propTypes = {
  modes: PropTypes.array.isRequired,
  grid: PropTypes.array.isRequired,
  gridHeader: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  html2canvasIgnore: PropTypes.bool.isRequired,
  cellWidth: PropTypes.number.isRequired
};

export default Grid;
