import React from 'react';
import BluetoothSerial from 'react-native-bluetooth-serial';
import {
    Alert,
} from 'react-native';

export const Connect = () => {
    BluetoothSerial.connect("20:16:10:19:62:58")
    .then(() => {
        console.log("connected");
        return true
    }).catch((err) => {
        Alert.alert("Erro ao conectar: " + err.message);
        return false
    });
}

export const SendStateChange = (state) => {
    BluetoothSerial.write('t')
    .then(() => {
        console.log('send');
        return true;
    }).catch((err) => {
        Alert.alert("Erro ao enviar comando: " + err.message);
        return false
    });
}

export const Subscribe = async (dispatch, stateOutlet) => {
    BluetoothSerial.readFromDevice().then((data) => {
        if(data === 'On'){
            dispatch(stateOutlet(true));
        }
        if(data === 'Off'){
            dispatch(stateOutlet(false));
        }
    });
}