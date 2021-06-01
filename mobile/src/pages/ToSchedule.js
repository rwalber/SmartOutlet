import React, { 
    useState 
} from 'react';

import {
    View,
    Text,
    Alert,
    Image,
    TextInput,
    Dimensions,
    StyleSheet,
    ImageBackground,
    TouchableOpacity,
} from 'react-native';

import { useDispatch } from 'react-redux';
import { stateOutlet } from '../actions/index';
import PushNotification from "react-native-push-notification";

import TimeManagement from '../assets/images/toSchedule.png'
import Background from '../assets/images/b1.png';

const ToSchedule = () => {
    
    const [hours, setHours] = useState('');
    const [minuts, setMinuts] = useState('');
    const [seconds, setSeconds] = useState('');
    const [action, setAction] = useState(false);

    const dispatch = useDispatch();
    
    const togglerSwitch = () => {
        setAction(!action);
    }

    const push = () => {
        PushNotification.localNotification({
            channelId: '_outletNotify',
            title: 'Aviso',
            message: `A SmartOutlet foi ${action ? 'ativada' : 'desativada'} com sucesso!`,
        });
    }

    const confirmSchedule = () => {
        if(seconds != 0 || minuts != 0 || hours != 0) {
            Alert.alert(
                "Aviso",
                "Deseja programar a tomada para realizar a ação definida?",
                [
                    {
                        text: "Não",
                        style: "cancel"
                    },
                    {
                        text: "Sim", onPress: async () => {
                            schedule();
                        }
                    }
                ]
            );
        } else {
            Alert.alert("Aviso", "É necessário definir um intervalo para programar a tomada!");
        }
    }

    const schedule = () => {
        let time = (Number(seconds) + Number(minuts * 60) + Number(hours * 60 * 60))*1000;
        setTimeout(() => {
            let state = action;
            dispatch(stateOutlet(state));
            push();
        }, Number(time));
        setHours('');
        setMinuts('');
        setSeconds('');
        setAction(false);
    }

    return (
        <ImageBackground source={Background} style={ToScheduleStyle.bgImage}>
            <View style={ToScheduleStyle.centerItens}>
                <Image source={TimeManagement} style={ToScheduleStyle.image} resizeMode="contain" />
                <View style={ToScheduleStyle.rowItens}>
                    <View style={ToScheduleStyle.containerClock}>
                        <TextInput
                            style={ToScheduleStyle.textInput}
                            placeholder="00"
                            onChangeText={setHours}
                            value={hours.toString()}
                            keyboardType={'numeric'}
                            maxLength={2}
                            placeholderTextColor="white"
                        />
                        <Text style={ToScheduleStyle.labelClock}>horas</Text>
                    </View>
                    <View style={ToScheduleStyle.containerClock}>
                        <TextInput
                            style={ToScheduleStyle.textInput}
                            placeholder="00"
                            onChangeText={setMinuts}
                            value={minuts.toString()}
                            keyboardType={'numeric'}
                            maxLength={2}
                            placeholderTextColor="white"
                        />
                        <Text style={ToScheduleStyle.labelClock}>minutos</Text>
                    </View>
                    <View style={ToScheduleStyle.containerClock}>
                        <TextInput
                            style={ToScheduleStyle.textInput}
                            placeholder="00"
                            onChangeText={setSeconds}
                            value={seconds.toString()}
                            keyboardType={'numeric'}
                            maxLength={2}
                            placeholderTextColor="white"
                        />
                        <Text style={ToScheduleStyle.labelClock}>segundos</Text>
                    </View>
                </View>
                <View style={ToScheduleStyle.swtitchContainer}>
                    <Text style={ToScheduleStyle.textSwtichContainer}>Desligar</Text>
                    <TouchableOpacity style={action ? ToScheduleStyle.switchOn : ToScheduleStyle.switchOff} onPress={togglerSwitch}>
                        <View style={action ? ToScheduleStyle.togglerOn : ToScheduleStyle.togglerOff} />
                    </TouchableOpacity>
                    <Text style={ToScheduleStyle.textSwtichContainer}>Ligar</Text>
                </View>
                <TouchableOpacity style={ToScheduleStyle.button} onPress={confirmSchedule}>
                    <Text style={ToScheduleStyle.textButton}>Agendar</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}

export default ToSchedule;

const ToScheduleStyle = StyleSheet.create({
    bgImage: {
        flex: 1,
        resizeMode: "cover",
    },
    centerItens: {
        alignItems: 'center',
        justifyContent: 'center',
        height: (Dimensions.get('window').height - (Dimensions.get('window').height * 0.3)),
    },
    image: {
        width: (Dimensions.get('window').width - (Dimensions.get('window').width * 0.2)),
        height: (Dimensions.get('window').width - (Dimensions.get('window').width * 0.2)),
        marginTop: (Dimensions.get('window').height - (Dimensions.get('window').height * 0.85)),
    },
    rowItens: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: (Dimensions.get('window').width - (Dimensions.get('window').width * 0.1)),
        marginTop: (Dimensions.get('window').width - (Dimensions.get('window').width * 0.95))
    },
    textInput: {
        fontSize: (Dimensions.get('window').width - (Dimensions.get('window').width * 0.78)),
        color: 'white',
    },
    containerClock: {
        alignItems: 'center',
    },
    labelClock: {
        color: '#cec0c0',
        marginTop: -(Dimensions.get('window').width - (Dimensions.get('window').width * 0.95))
    },
    swtitchContainer: {
        marginTop: (Dimensions.get('window').height - (Dimensions.get('window').height * 0.94)),
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textSwtichContainer: {
        marginRight: (Dimensions.get('window').width - (Dimensions.get('window').width * 0.95)),
        marginLeft: (Dimensions.get('window').width - (Dimensions.get('window').width * 0.95)),
        color: 'white',
        fontSize: 18
    },
    switchOn: {
        width: (Dimensions.get('window').width - (Dimensions.get('window').width * 0.7)),
        height: (Dimensions.get('window').height - (Dimensions.get('window').height * 0.95)),
        borderRadius: (Dimensions.get('window').width - (Dimensions.get('window').width * 0.65))/2,
        backgroundColor: '#92E3A9',
        justifyContent: 'center',
    },
    switchOff: {
        width: (Dimensions.get('window').width - (Dimensions.get('window').width * 0.7)),
        height: (Dimensions.get('window').height - (Dimensions.get('window').height * 0.95)),
        borderRadius: (Dimensions.get('window').width - (Dimensions.get('window').width * 0.65))/2,
        backgroundColor: 'red',
        justifyContent: 'center',
    },
    togglerOn: {
        width: (Dimensions.get('window').height - (Dimensions.get('window').height * 0.96)),
        height: (Dimensions.get('window').height - (Dimensions.get('window').height * 0.96)),
        borderRadius: (Dimensions.get('window').width - (Dimensions.get('window').width * 0.65))/2,
        backgroundColor:'rgba(255, 255, 255, 0.9)',
        position: 'absolute',
        right: 0,
        marginRight: 5
    },
    togglerOff: {
        width: (Dimensions.get('window').height - (Dimensions.get('window').height * 0.96)),
        height: (Dimensions.get('window').height - (Dimensions.get('window').height * 0.96)),
        borderRadius: (Dimensions.get('window').width - (Dimensions.get('window').width * 0.65))/2,
        backgroundColor: 'white',
        marginLeft: 5
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
});