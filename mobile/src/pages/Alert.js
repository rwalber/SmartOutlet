import React, { 
    useState 
} from 'react';

import { 
    View, 
    StyleSheet, 
    Text,
    Image,
    Dimensions,
    TouchableOpacity,
    TextInput,
    ImageBackground,
    Alert
} from 'react-native';

import PushNotification from "react-native-push-notification";
import { useDispatch, useSelector } from 'react-redux';

import logo from '../assets/images/Alert.png'
import Background from '../assets/images/b1.png';

const toAlert = () => {

    const dispatch = useDispatch();

    const [hours, setHours] = useState('');
    const [minuts, setMinuts] = useState('');
    const [seconds, setSeconds] = useState('');

    const state = useSelector(state => state.reducer.state);

    const push = () => {
        PushNotification.localNotification({
            channelId: '_outletNotify',
            title: 'Atenção',
            message: `A SmartOutlet está ${state ? 'ativada' : 'desativada'}!`,
        });
    }

    const defineAlert = () => {
        
        if(seconds != 0 || minuts != 0 || hours != 0) {
            let time = (Number(seconds) + Number(minuts * 60) + Number(hours * 60 * 60))*1000;
            setTimeout(push, Number(time));
            Alert.alert(
                "Aviso",
                "Alerta definido com sucesso!",
                [
                    {
                        text: "OK", onPress: async () => {
                            
                        }
                    }
                ]
            );
            setHours('');
            setMinuts('');
            setSeconds('');
        } else {
            Alert.alert("Aviso", "É necessário definir um intervalo para o alerta!");
        }
    }
    
    return (
        <ImageBackground source={Background} style={StyleAlert.bgImage}>
            <View style={StyleAlert.container}>
                <Image style={StyleAlert.image} source={logo} />
                <View style={StyleAlert.rowItens}>
                    <View style={StyleAlert.containerClock}>
                        <TextInput
                            style={StyleAlert.textInput}
                            placeholder="00"
                            placeholderTextColor="rgb(255, 255, 255)"
                            onChangeText={setHours}
                            value={hours.toString()}
                            keyboardType={'numeric'}
                            maxLength={2}
                        />
                        <Text style={StyleAlert.labelClock}>horas</Text>
                    </View>
                    <View style={StyleAlert.containerClock}>
                        <TextInput
                            style={StyleAlert.textInput}
                            placeholder="00"
                            placeholderTextColor="rgb(255, 255, 255)"
                            onChangeText={setMinuts}
                            value={minuts.toString()}
                            keyboardType={'numeric'}
                            maxLength={2}
                            
                        />
                        <Text style={StyleAlert.labelClock}>minutos</Text>
                    </View>
                    <View style={StyleAlert.containerClock}>
                        <TextInput
                            style={StyleAlert.textInput}
                            placeholder="00"
                            placeholderTextColor="rgb(255, 255, 255)"
                            onChangeText={setSeconds}
                            value={seconds.toString()}
                            keyboardType={'numeric'}
                            maxLength={2}
                        />
                        <Text style={StyleAlert.labelClock}>segundos</Text>
                    </View>
                </View>
                <TouchableOpacity style={StyleAlert.button} onPress = { defineAlert }>
                    <Text style={StyleAlert.textButton}>
                        Definir alerta
                    </Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}

export default toAlert;

const StyleAlert = StyleSheet.create({
    bgImage: {
        flex: 1,
        resizeMode: "cover",
    },
    container: {
        alignItems: 'center',
        height: (Dimensions.get('window').height - (Dimensions.get('window').height * 0.3)),
    },
    image: {
        width: (Dimensions.get('window').width - (Dimensions.get('window').width * 0.4)),
        height: (Dimensions.get('window').width - (Dimensions.get('window').width * 0.4)),
        marginTop: (Dimensions.get('window').height - (Dimensions.get('window').height * 0.85)),
    },
    button: {
        backgroundColor: 'white',
        width: (Dimensions.get('window').width - (Dimensions.get('window').width * 0.6)),
        height: 45,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: (Dimensions.get('window').height - (Dimensions.get('window').height * 0.94))
    },
    textButton: {
        color: 'black',
        fontSize: 18,
        letterSpacing: 1,
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