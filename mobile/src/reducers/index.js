import { combineReducers } from 'redux';

const INITIAL_STATE = {
  outletName: '',
  visibility: false,
  state: false,
  voltage: 127,
  potency: 30,
  spent: 0,
  timeOn: 0,
  arraySpent: [0]
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
    case 'VOLTAGE':
      return {
        ...state,
        voltage: action.voltage
      };
    case 'POTENCY':
      return {
        ...state,
        potency: action.potency
      };
    case 'SPENT':
      return {
        ...state,
        spent: action.spent
      };
      case 'SET_TIME':
      return {
        ...state,
        timeOn: action.timeOn
      };
      case 'ARRAY_SPENT':
      return {
        ...state,
        arraySpent: state.arraySpent.length == 10 ? [0, action.arraySpent] : [...state.arraySpent, action.arraySpent]
      };
    default:
      return state;
  }
};

export const Reducers = combineReducers({
  reducer
});