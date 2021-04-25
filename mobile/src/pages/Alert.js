import React, { useState } from 'react';
import { 
    View, 
    StyleSheet, 
    Text,
    Image,
    Dimensions,
    TouchableOpacity,
    TextInput
} from 'react-native';

import logo from '../assets/images/Alert.png'
import { useSelector } from 'react-redux';

import PushNotification from "react-native-push-notification";

const Alert = () => {

    const name = useSelector(state => state.reducer.outletName)

    const [hours, setHours] = useState();
    const [minuts, setMinuts] = useState();
    const [seconds, setSeconds] = useState();

    const Push = () => {
        PushNotification.localNotification({
            channelId: '_outletNotify',
            title: 'Local Notification', // (optional)
            message: 'My Notification Message', // (required)
        });
    }
    
    return (
        <View style={StyleAlert.container}>
            <Text>
                Aqui você pade definir alertas inteligêntes para a outlet <Text style={StyleAlert.bold}>{name}</Text>!
            </Text>
            <Image style={StyleAlert.image} source={logo} />
            <View style={StyleAlert.rowItens}>
                <View style={StyleAlert.containerClock}>
                    <TextInput
                        style={StyleAlert.textInput}
                        placeholder="00"
                        placeholderTextColor="rgb(73, 143, 255)"
                        onChangeText={setHours}
                        value={hours}
                        keyboardType={'numeric'}
                        maxLength={2}
                    />
                    <Text style={StyleAlert.labelClock}>horas</Text>
                </View>
                <View style={StyleAlert.containerClock}>
                    <TextInput
                        style={StyleAlert.textInput}
                        placeholder="00"
                        placeholderTextColor="rgb(73, 143, 255)"
                        onChangeText={setMinuts}
                        value={minuts}
                        keyboardType={'numeric'}
                        maxLength={2}
                    />
                    <Text style={StyleAlert.labelClock}>minutos</Text>
                </View>
                <View style={StyleAlert.containerClock}>
                    <TextInput
                        style={StyleAlert.textInput}
                        placeholder="00"
                        placeholderTextColor="rgb(73, 143, 255)"
                        onChangeText={setSeconds}
                        value={seconds}
                        keyboardType={'numeric'}
                        maxLength={2}
                    />
                    <Text style={StyleAlert.labelClock}>segundos</Text>
                </View>
            </View>
            <TouchableOpacity style={StyleAlert.button} onPress = { Push  }>
                <Text style={StyleAlert.textButton}>
                    Definir alerta
                </Text>
            </TouchableOpacity>


        </View>
    )
}

export default Alert;

const StyleAlert = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: (Dimensions.get('window').height - (Dimensions.get('window').height * 0.3)),
    },

    bold: {
        fontWeight: 'bold',
    },

    image: {
        width: (Dimensions.get('window').width - (Dimensions.get('window').width * 0.4)),
        height: (Dimensions.get('window').width - (Dimensions.get('window').width * 0.4)),
        marginTop: (Dimensions.get('window').width - (Dimensions.get('window').width * 0.8))
    },

    button: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(73, 143, 255)',
        borderRadius: 20,
        width: (Dimensions.get('window').width - (Dimensions.get('window').width * 0.6)),
        height: (Dimensions.get('window').height - (Dimensions.get('window').height * 0.94)),
        marginTop: (Dimensions.get('window').width - (Dimensions.get('window').width * 0.8)),
    },

    textButton: {
        fontSize: 16,
        letterSpacing: 1.2,
        color: 'white'
    },

    centerItens: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: (Dimensions.get('window').height - (Dimensions.get('window').height * 0.3)),
    },

    rowItens: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        width: (Dimensions.get('window').width - (Dimensions.get('window').width * 0.4)),
        marginTop: (Dimensions.get('window').width - (Dimensions.get('window').width * 0.95))
    },

    textInput: {
        fontSize: (Dimensions.get('window').width - (Dimensions.get('window').width * 0.78)),
    },

    containerClock: {
        alignItems: 'center',
    },

    labelClock: {
        color: '#cec0c0',
        marginTop: -(Dimensions.get('window').width - (Dimensions.get('window').width * 0.95))
    }
})