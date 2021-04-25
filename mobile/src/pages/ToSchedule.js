import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    Dimensions,
    StyleSheet,
    TouchableOpacity,
    Image,
    Switch,
} from 'react-native';
import TimeManagement from '../assets/images/Time-management.png'
const ToSchedule = () => {

    const iconSize = (Dimensions.get('window').width - (Dimensions.get('window').width * 0.9));

    const [hours, setHours] = useState();
    const [minuts, setMinuts] = useState();
    const [seconds, setSeconds] = useState();
    const [action, setAction] = useState();

    return (
        <View style={ToScheduleStyle.centerItens}>
            <Image source={TimeManagement} style={ToScheduleStyle.image} />
            <View style={ToScheduleStyle.rowItens}>
                <View style={ToScheduleStyle.containerClock}>
                    <TextInput
                        style={ToScheduleStyle.textInput}
                        placeholder="00"
                        placeholderTextColor="rgb(73, 143, 255)"
                        onChangeText={setHours}
                        value={hours}
                        keyboardType={'numeric'}
                        maxLength={2}
                    />
                    <Text style={ToScheduleStyle.labelClock}>horas</Text>
                </View>
                <View style={ToScheduleStyle.containerClock}>
                    <TextInput
                        style={ToScheduleStyle.textInput}
                        placeholder="00"
                        placeholderTextColor="rgb(73, 143, 255)"
                        onChangeText={setMinuts}
                        value={minuts}
                        keyboardType={'numeric'}
                        maxLength={2}
                    />
                    <Text style={ToScheduleStyle.labelClock}>minutos</Text>
                </View>
                <View style={ToScheduleStyle.containerClock}>
                    <TextInput
                        style={ToScheduleStyle.textInput}
                        placeholder="00"
                        placeholderTextColor="rgb(73, 143, 255)"
                        onChangeText={setSeconds}
                        value={seconds}
                        keyboardType={'numeric'}
                        maxLength={2}
                    />
                    <Text style={ToScheduleStyle.labelClock}>segundos</Text>
                </View>
            </View>
            {/* <View>
                <Text>Função</Text>
                <View style={ToScheduleStyle.rowItens}>
                    <Text>Off</Text>
                    <Switch
                        trackColor={{ false: "red", true: "#5ef75b" }}
                        thumbColor={action ? "#5ef75b" : "red"}
                        onValueChange={setAction}
                        value={action}
                    />
                    <Text>On</Text>
                </View>
            </View> */}
            <TouchableOpacity style={ToScheduleStyle.ScheduleButton}>
                <Text style={ToScheduleStyle.textScheduleButton}>Agendar</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ToSchedule;

const ToScheduleStyle = StyleSheet.create({
    centerItens: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: (Dimensions.get('window').height - (Dimensions.get('window').height * 0.3)),
    },
    
    image: {
        width: (Dimensions.get('window').width - (Dimensions.get('window').width * 0.4)),
        height: (Dimensions.get('window').width - (Dimensions.get('window').width * 0.4)),
        marginBottom: 30
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
    
    ScheduleButton: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(73, 143, 255)',
        borderRadius: 20,
        width: (Dimensions.get('window').width - (Dimensions.get('window').width * 0.6)),
        height: (Dimensions.get('window').height - (Dimensions.get('window').height * 0.94)),
    },
    
    textScheduleButton: {
        fontSize: 16,
        letterSpacing: 1.2,
        color: 'white'
    },
    
    containerClock: {
        alignItems: 'center',
        marginBottom: 30
    },
    
    labelClock: {
        color: '#cec0c0',
        marginTop: -(Dimensions.get('window').width - (Dimensions.get('window').width * 0.95))
    }
});