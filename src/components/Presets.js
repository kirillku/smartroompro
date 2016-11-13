import React, { PropTypes } from 'react';
import Preset from './Preset';
import Conditions from './Conditions';
import Feedback from './Feedback';

const Presets = ({ presets, current, onStopClick, onStartClick }) => {
    var component = current.active
        ? (
            <div>
              <h1>{presets[current.id].name}</h1>
              <Conditions {...presets[current.id].conditions} />
              <Feedback />
              <div
                className="Preset btn btn-default"
                onClick={onStopClick}
              >
              <span className="glyphicon glyphicon-refresh" aria-hidden="true"> Switch mode</span>
              </div>
            </div>
        )
        : (
          <div className="Presets">
            <h1>Please, choose your mode:</h1>
            {presets.map(preset =>
              <Preset
                key={preset.id}
                name={preset.name}
                glyphicon={preset.glyphicon}
                onClick={() => onStartClick(preset.id)}
              />
            )}
          </div>
        );

    return component;
}

Presets.propTypes = {
  presets: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onStopClick: PropTypes.func.isRequired,
  onStartClick: PropTypes.func.isRequired
}

export default Presets
