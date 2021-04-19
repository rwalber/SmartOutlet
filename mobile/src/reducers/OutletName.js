const INITIAL_STATE = {
    outletName: '', 
    modalOutletName: false,
};

export const changeOutletName = (state = INITIAL_STATE.outletName, action) => {
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

export const modalOutletName = (state = INITIAL_STATE.modalOutletName, action) => {
    switch (action.type) {
        case 'MODAL_OUTLET_NAME':
            return {
                ...state,
                modalOutletName: action.modalOutletName
            };
        default:
            return state;
    }
};