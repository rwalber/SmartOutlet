import React from 'react';

import Outlet from '../components/Outlet';

const OutletList = (props) => {

    return (
        <Outlet navigation={props.navigation} />
    )
}

export default OutletList;