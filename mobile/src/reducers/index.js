import { changeOutletName } from './OutletName';
import { stateOutlet } from './StateOutlet';
import { combineReducers } from 'redux';

export const Reducers = combineReducers({
  outletName: changeOutletName,
  stateOutlet,
});