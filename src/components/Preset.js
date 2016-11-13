import React, { PropTypes } from 'react';

const Preset = ({ onClick, name, glyphicon }) => (
  <div
    className="Preset btn btn-default"
    onClick={onClick}
  >
    <span className={`glyphicon glyphicon-${glyphicon}`} aria-hidden="true"> {name}</span>
  </div>
)

Preset.propTypes = {
  onClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired
}

export default Preset
