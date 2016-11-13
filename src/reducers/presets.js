const defaultPresets = [
    {
        id: 0,
        name: 'Chill',
        glyphicon: 'grain',
        conditions: {
            temperature: 22,
            lighting: .7,
            co2: 390,
            pressure: 781
        }
    },
    {
        id: 1,
        name: 'Creativity',
        glyphicon: 'send',
        conditions: {
            temperature: 19,
            lighting: .6,
            co2: 450,
            pressure: 768
        }
    },
    {
        id: 2,
        name: 'Meeting',
        glyphicon: 'user',
        conditions: {
            temperature: 20,
            lighting: 1,
            co2: 400,
            pressure: 767
        }
    },
    {
        id: 3,
        name: 'Perfomance',
        glyphicon: 'fire',
        conditions: {
            temperature: 20,
            lighting: 1,
            co2: 420,
            pressure: 770
        }
    },
    {
        id: 4,
        name: 'Custom',
        glyphicon: 'cog',
        conditions: {
            temperature: 20,
            lighting: 1,
            co2: 430,
            pressure: 777
        }
    }
];

const preset = (state, action) => {
    switch (action.type) {
        case 'UPDATE_PRESET':
            return state;
        default:
            return state;
    }
}

const presets = (
    state = defaultPresets,
    action
) => {
    switch (action.type) {
        case 'UPDATE_PRESET':
            return state.map(p => preset(p, action));
        default:
            return state;
    }
}

export default presets;
