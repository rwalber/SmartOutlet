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