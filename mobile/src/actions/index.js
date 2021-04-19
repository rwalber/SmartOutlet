export const outletName = (outletName) => ({
  type: 'OUTLET_NAME',
  outletName: outletName
});

export const stateOutlet = (stateOutlet) => ({
  type: 'STATE_OUTLET',
  stateOutlet: stateOutlet
});

export const modalOutletName = (visibility) => ({
  type: 'MODAL_OUTLET_NAME',
  modalOutletName: visibility
});