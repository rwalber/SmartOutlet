import React from 'react';

import BluetoothSerial from 'react-native-bluetooth-serial';

import {
    Alert,
} from 'react-native';

export const Connect = async (navigation) => {
    let connected = false;
    await BluetoothSerial.isEnabled().then(isEnable => {
        if (!isEnable) {
            Alert.alert(
                "Atenção",
                "Este aplicativo faz uso do dispositivo Bluetooth, deseja ativar?",
                [
                    {
                        text: "Não",
                        style: "cancel"
                    },
                    {
                        text: "Sim", onPress: async () => {
                            await BluetoothSerial.enable();
                            Connect();
                        }
                    }
                ]
            );
        }
    });
    await BluetoothSerial.connect("20:16:10:19:62:58").then(() => {
        connected = true;
    }).catch((err) => {
        Alert.alert("Erro ao conectar: " + err.message);
        connected = false;
    });
    return connected;
}

export const SendStateChange = async (state) => {
    let changeState = false;
    await BluetoothSerial.write('h')
        .then(() => {
            changeState = true;
        }).catch((err) => {
            Alert.alert("Erro ao enviar comando: " + err.message);
            changeState = false;
        });
    return changeState;
}

export const SubscribeDevice = async (dispatch, stateOutlet) => {
    BluetoothSerial.readFromDevice().then((data) => {
        if (data === 'On') {
            dispatch(stateOutlet(true));
        }
        if (data === 'Off') {
            dispatch(stateOutlet(false));
        }
    });
}

export const VerifyStateBluetooth = async () => {
    await BluetoothSerial.isEnabled().then(isEnable => {
        if (!isEnable) {
            Alert.alert(
                "Atenção",
                "Este aplicativo faz uso do dispositivo Bluetooth, deseja ativar?",
                [
                    {
                        text: "Não",
                        style: "cancel"
                    },
                    { text: "Sim", onPress: async () => await BluetoothSerial.enable() }
                ]
            );
        }
    });
}