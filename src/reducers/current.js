const current = (
    state = {
        id: 0,
        active: false
    },
    action
) => {
    switch (action.type) {
        case 'START_PRESET':
            return {
                ...state,
                id: action.id,
                active: true
            }
        case 'STOP_PRESET':
            return {
                ...state,
                active: false,
            }
        default:
            return state;
    }
}

export default current;
