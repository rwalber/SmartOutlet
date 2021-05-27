export const outletName = (newOutletName) => ({
  type: 'OUTLET_NAME',
  name: newOutletName
});

export const stateOutlet = (newStateOutlet) => ({
  type: 'STATE_OUTLET',
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