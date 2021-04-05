const INITIAL_STATE = {
    state: false,
};

export const stateOutlet = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'STATE_OUTLET':
            return {
                ...state,
                state: action.state
            };
        default:
            return state;
    }
};