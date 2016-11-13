const defaultPresets = [
    {
        id: 0,
        name: 'Chill',
        glyphicon: 'grain',
        conditions: {
            temperature: 22,
            lighting: .7,
            co2: 390,
            humidity: .781
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
            humidity: .768
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
            humidity: .767
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
            humidity: .770
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
            humidity: .777
        }
    }
];

const preset = (state, action) => {
    switch (action.type) {
        case 'UPDATE_PRESET':
            return {
                ...state,
                conditions: {
                    ...state.conditions,
                    ...action.conditions
                }
            }
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
