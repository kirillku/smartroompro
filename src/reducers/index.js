import { combineReducers } from 'redux';
import presets from './presets';
import current from './current';

const smartroomApp = combineReducers({
    current,
    presets
});

export default smartroomApp;
