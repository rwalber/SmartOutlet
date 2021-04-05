const INITIAL_STATE = {
    outletName: '',
};

export const changeOutletName = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'OUTLET_NAME':
            return {
                ...state,
                outletName: action.outletName
            };
        default:
            return state;
    }
};