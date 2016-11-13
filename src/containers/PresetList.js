import { connect } from 'react-redux';
import { startPreset, stopPreset } from '../actions';
import Presets from '../components/Presets';

const mapStateToProps = (state) => {
    return state;
};

const mapDispatchToProps = ({
    onStartClick: startPreset,
    onStopClick: stopPreset
});

const PresetList = connect(
    mapStateToProps,
    mapDispatchToProps
)(Presets);

export default PresetList;
