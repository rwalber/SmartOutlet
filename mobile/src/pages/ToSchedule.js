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

import DropDownPicker from 'react-native-dropdown-picker';

import { RadioButton } from 'react-native-paper';

const ToSchedule = () => {

    const iconSize = (Dimensions.get('window').width - (Dimensions.get('window').width * 0.9));
    const [selectedValue, setSelectedValue] = useState("java");

    const [hours, setHours] = useState();
    const [minuts, setMinuts] = useState();
    const [seconds, setSeconds] = useState();
    const [action, setAction] = useState();
    
    const [checked, setChecked] = React.useState('first');

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
            <Text style={ToScheduleStyle.sessionTitle}>
                Selecione a tomada
            </Text>
            <View style={ToScheduleStyle.rowItens}>
                <RadioButton
                    value="first"
                    status={ checked === 'first' ? 'checked' : 'unchecked' }
                    onPress={() => setChecked('first')}
                />
                <Text>Tomada 2</Text>
                <RadioButton
                    value="second"
                    status={ checked === 'second' ? 'checked' : 'unchecked' }
                    onPress={() => setChecked('second')}
                    style={ToScheduleStyle.radioText}
                />
                <Text>Tomada 1</Text>
            </View>
            <Text style={ToScheduleStyle.sessionTitle}>
                Função desejada
            </Text>
            <View style={ToScheduleStyle.rowItens}>
                <Text>Desligar</Text>
                <Switch
                    trackColor={{ false: "red", true: "#5ef75b" }}
                    thumbColor={action ? "#5ef75b" : "red"}
                    onValueChange={setAction}
                    value={action}
                    style={{margin: 0, padding: 0}}
                />
                <Text>Ligar</Text>
            </View>

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
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        // width: (Dimensions.get('window').width - (Dimensions.get('window').width * 0.1)),
        height: (Dimensions.get('window').height - (Dimensions.get('window').height * 0.3)),
        // backgroundColor: 'black'
    },
    
    image: {
        width: (Dimensions.get('window').width - (Dimensions.get('window').width * 0.4)),
        height: (Dimensions.get('window').width - (Dimensions.get('window').width * 0.4)),
        // marginBottom: 30,
        // alignItems: 'center',
    },
    
    rowItens: {
        display: 'flex',
        flexDirection: 'row',
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
        width: (Dimensions.get('window').width - (Dimensions.get('window').width * 0.1)),
        marginTop: (Dimensions.get('window').width - (Dimensions.get('window').width * 0.95))
    },

    sessionTitle: {
        fontSize: (Dimensions.get('window').width - (Dimensions.get('window').width * 0.95)),
        // marginLeft: 20,
        // backgroundColor: 'blue',
        width: '100%'
    },

    radioText: {
        fontSize: (Dimensions.get('window').width - (Dimensions.get('window').width * 0.92)),
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
        // marginBottom: 30
    },
    
    labelClock: {
        color: '#cec0c0',
        marginTop: -(Dimensions.get('window').width - (Dimensions.get('window').width * 0.95))
    }
});