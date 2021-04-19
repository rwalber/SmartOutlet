import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector, useDispatch } from 'react-redux';
import { changeOutletName, stateOutlet } from '../actions/index';
import { SubscribeDevice, SendStateChange } from './BluetoothSerial';

import {
    Text,
    View,
    Image,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
} from 'react-native';

import Power from '../assets/images/power.png'

import OutletOptions from './OutletOptions';

const Outlet = (props) => {
    
    const nameOutlet = useSelector(state => state.outletName.outletName);

    const state = useSelector(state => state.stateOutlet.stateOutlet);

    const dispatch = useDispatch();
    
    const changeStateOutlet = () => {
        dispatch(stateOutlet(!state));
        SendStateChange(!state);
    }

    useEffect(async () => {
        try {
            let outletStorageName = await AsyncStorage.getItem('outletName');
            if(outletStorageName !== null) {
                dispatch(changeOutletName(outletStorageName));
            }
        } catch (error) {
            console.log(error);
        }
    }, []);

    useEffect(() => {
        setInterval(() => {
            SubscribeDevice(dispatch, stateOutlet);
        }, 500);
    }, []);

    return (
        <View style={Style.container}>
            <View >
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
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: (Dimensions.get('window').height - (Dimensions.get('window').height * 0.92))
    }
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