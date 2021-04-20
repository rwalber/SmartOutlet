import { combineReducers } from 'redux';

import { outletName, modalOutletName } from './OutletName';
import { stateOutlet } from './StateOutlet';

const INITIAL_STATE = {
  outletName: '',
  visibility: false,
  state: false,
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'OUTLET_NAME':
      return {
        ...state,
        outletName: action.name
      };
    case 'MODAL_OUTLET_NAME':
      return {
        ...state,
        visibility: action.visibility
      };
    case 'STATE_OUTLET':
      return {
        ...state,
        state: action.state
      };
    default:
      return state;
  }

};

export const Reducers = combineReducers({
  reducer
});