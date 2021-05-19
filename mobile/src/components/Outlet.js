import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector, useDispatch } from 'react-redux';
import { outletName, stateOutlet } from '../actions/index';
import { SubscribeDevice, SendStateChange } from '../utils/BluetoothSerial';

import {
    Text,
    View,
    Image,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    Button,
} from 'react-native';

import Power from '../assets/images/power.png'

import OutletOptions from './OutletOptions';

const Outlet = (props) => {
    
    const nameOutlet = useSelector(state => state.reducer.outletName);
    const state = useSelector(state => state.reducer.state);

    const dispatch = useDispatch();
    
    const changeStateOutlet = () => {
        dispatch(stateOutlet(!state));
        // if(SendStateChange(!state)) {

        // }
    }

    useEffect(async () => {
        try {
            let outletStorageName = await AsyncStorage.getItem('outletName');
            if(outletStorageName !== null) {
                dispatch(outletName(outletStorageName));
            }
        } catch (error) {
            console.log(error);
        }
    }, []);

    // useEffect(() => {
    //     PushNotification.configure({
    //         onRegister: function (token) {
    //           console.log("TOKEN:", token);
    //         },
    //         onNotification: function (notification) {
    //           console.log("NOTIFICATION:", notification);
    //           notification.finish(PushNotificationIOS.FetchResult.NoData);
    //         },
    //         permissions: {
    //           alert: true,
    //           badge: true,
    //           sound: true,
    //         },
    //         popInitialNotification: true,
    //         requestPermissions: Platform.OS === 'ios',
    //       });
    // }, [])

    // const testPush = () => {
    //     console.log('enter')
    //     PushNotification.localNotificationSchedule({
    //         title:'My notification title',
    //         date:new Date(new Date().getTime()+3000),
    //         message:'My notification Message',
    //         allowWhileIdle:false,
    //         channelId: "your-channel-id"
    //       });
    //     console.log('pass')
    // }

    // useEffect(() => {
    //     setInterval(() => {
    //         SubscribeDevice(dispatch, stateOutlet);
    //     }, 500);
    // }, []);

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
            {/* <OutletOptions navigation={props.navigation} /> */}
            {/* <TouchableOpacity onPress={testPush}>
                <Text>Push</Text>
            </TouchableOpacity> */}
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