import React from 'react';

import { 
    View, 
    StyleSheet,
    Text,
    Dimensions
} from 'react-native';

import Outlet from '../components/Outlet';

const OutletList = (props) => {

    return (
        <View style={OutletListStyle.container}>
            <Text style={OutletListStyle.title}>Gerencie aqui suas Outlets</Text>
            <Outlet navigation={props.navigation} style={OutletListStyle.marginBottom}/>
            {/* <Outlet navigation={props.navigation} style={OutletListStyle.marginBottom}/> */}
        </View>
    )
}

export default OutletList;

const OutletListStyle = StyleSheet.create({
    container: {
        // flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },

    marginBottom: {
        margin: (Dimensions.get('window').height - (Dimensions.get('window').height * 0.94))
    },

    title: {
        fontSize: 26,
        margin: (Dimensions.get('window').height - (Dimensions.get('window').height * 0.96))
    }
})