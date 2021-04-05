import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Subscribe, SendStateChange } from './BluetoothSerial';

import {
    View,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    Dimensions,
} from 'react-native';

import Power from '../assets/images/power.png'

import OutletOptions from './OutletOptions';

import { stateOutlet } from '../actions/index';

const Outlet = (props) => {
    const nameOutlet = useSelector(state => state.outletName.outletName);
    const state = useSelector(state => state.stateOutlet.state);
    const dispatch = useDispatch();
   
    const changeStateOutlet = () => {
        dispatch(stateOutlet(!state));
        SendStateChange(!state);
    }

    useEffect(() => {
        setInterval(() => {
            Subscribe(dispatch, stateOutlet);
        }, 500);
    }, [])

    return (
        <View>
            <View>
                <Text style={Style.nameOutlet}>{nameOutlet}</Text>
            </View>
            <TouchableOpacity onPress={changeStateOutlet}>
                <View style={state == true ? StyleOutlet('#5ef75b').outlet : StyleOutlet('red').outlet}>
                    <Image source={Power} style={Style.image} />
                </View>
            </TouchableOpacity>
            <OutletOptions navigation={props.navigation} />
        </View>
    )
}

export default Outlet;

const Style = StyleSheet.create({
    image: {
        width: (Dimensions.get('window').width - (Dimensions.get('window').width * 0.6)),
        height: (Dimensions.get('window').width - (Dimensions.get('window').width * 0.6)),
    },

    nameOutlet: {
        fontSize: 26,
        marginBottom: 10
    },
});

const StyleOutlet = (color) => StyleSheet.create({
    outlet: {
        justifyContent: 'center',
        alignItems: 'center',
        width: (Dimensions.get('window').width - (Dimensions.get('window').width * 0.6)),
        height: (Dimensions.get('window').width - (Dimensions.get('window').width * 0.6)),
        backgroundColor: color,
        borderRadius: 100
    },
});