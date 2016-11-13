export const startPreset = (id) => ({
    type: 'START_PRESET',
    id
});

export const stopPreset = (id) => ({
    type: 'STOP_PRESET',
    id
});

export const updatePreset = (id, conditions) => ({
    type: 'STOP_PRESET',
    id,
    conditions
});
