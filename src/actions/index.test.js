import * as actions from './index';

describe('actions', () => {
    it('should start preset', () => {
        expect(actions.startPreset(0)).toEqual({
            type: 'START_PRESET',
            id: 0
        });
    });

    it('should stop preset', () => {
        expect(actions.stopPreset(0)).toEqual({
            type: 'STOP_PRESET',
            id: 0
        });
    });
})
