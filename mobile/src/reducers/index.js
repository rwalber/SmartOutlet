import { combineReducers } from 'redux';

import { outletName, modalOutletName } from './OutletName';
import { stateOutlet } from './StateOutlet';

export const Reducers = combineReducers({
  outletName,
  modalOutletName,
  stateOutlet,
});