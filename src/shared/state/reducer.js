export const initialState = {
    token: null,
    tasks: []
}

export const ACTIONS = {
    SET_TASKS: 'set:tasks',
    // UPDATE_TASKS: 'update:tasks' // No longer needed
}

export const reducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.SET_TASKS:
            return {
                ...state,
                tasks: action.payload
            };
        // Remove UPDATE_TASKS case
        default:
            throw new Error('Reducer action does not exist');
    }
}