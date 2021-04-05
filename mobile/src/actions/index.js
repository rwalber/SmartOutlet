export const changeOutletName = (updated_OutletName) => ({
  type: 'OUTLET_NAME',
  outletName: updated_OutletName
});

export const stateOutlet = (stateOutlet) => ({
  type: 'STATE_OUTLET',
  state: stateOutlet
});