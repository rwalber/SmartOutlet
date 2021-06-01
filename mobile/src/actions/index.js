export const outletName = (newOutletName, index) => ({
  type: `OUTLET_NAME_${index}`,
  name: newOutletName
});

export const stateOutlet = (newStateOutlet,  index) => ({
  type: `STATE_OUTLET_${index}`,
  state: newStateOutlet
});

export const modalOutletName = (newVisibility) => ({
  type: 'MODAL_OUTLET_NAME',
  visibility: newVisibility
});

export const voltageOutlet = (newVoltage) => ({
  type: 'VOLTAGE',
  voltage: newVoltage
});

export const potencyOutlet = (newPotency) => ({
  type: 'POTENCY',
  potency: newPotency
});

export const spentOutlet = (newSpent) => ({
  type: 'SPENT',
  spent: newSpent
});

export const setTimeOn = (newTimeOn) => ({
  type: 'SET_TIME',
  timeOn: newTimeOn
});

export const arraySpent = (newData) => ({
  type: 'ARRAY_SPENT',
  arraySpent: newData
});