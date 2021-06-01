import { combineReducers } from 'redux';

const INITIAL_STATE = {
  outletName1: 'Tomada 1',
  outletName2: 'Tomada 2',
  visibility: false,
  state1: false,
  state2: false,
  voltage: 127,
  potency: 30,
  spent: 0,
  timeOn: 0,
  arraySpent: [0]
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'OUTLET_NAME_1':
      return {
        ...state,
        outletName1: action.name
      };
      case 'OUTLET_NAME_2':
      return {
        ...state,
        outletName2: action.name
      };
    case 'MODAL_OUTLET_NAME':
      return {
        ...state,
        visibility: action.visibility
      };
    case 'STATE_OUTLET_1':
      return {
        ...state,
        state1: action.state
      };
      case 'STATE_OUTLET_2':
      return {
        ...state,
        state2: action.state
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