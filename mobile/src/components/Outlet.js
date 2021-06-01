import React, {
    useEffect 
} from 'react';

import {
    Text,
    View,
    Image,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    Alert
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector, useDispatch } from 'react-redux';
import { SubscribeDevice, SendStateChange } from '../utils/BluetoothSerial';
import { outletName, stateOutlet, modalOutletName, setTimeOn, arraySpent } from '../actions/index';

import Power from '../assets/images/plug.png';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { ChangeName } from './ChangeName';

const Outlet = (props) => {
    const iconSize = (Dimensions.get('window').width - (Dimensions.get('window').width * 0.95));
    
    let nameOutlet;
    let state;
    let visibility;
    let timeOn;
    let potency;

    if(props.index == 1) {
        nameOutlet = useSelector(state => state.reducer.outletName1);
        state = useSelector(state => state.reducer.state1);
        visibility = useSelector(state => state.reducer.visibility);
        timeOn = useSelector(state => state.reducer.timeOn);
        potency = useSelector(state => state.reducer.potency);
    }
    
    if(props.index == 2) {
        nameOutlet = useSelector(state => state.reducer.outletName2);
        state = useSelector(state => state.reducer.state2);
        visibility = useSelector(state => state.reducer.visibility);
        timeOn = useSelector(state => state.reducer.timeOn);
        potency = useSelector(state => state.reducer.potency);
    }

    const dispatch = useDispatch();
    
    const changeState = () => {
        Alert.alert(
            "Atenção",
            `Tem certeza que deseja ${!state ? 'ligar' : 'desligar'} a ${nameOutlet}?`,
            [
                {
                    text: "Não",
                    style: "cancel"
                },
                {
                    text: "Sim", onPress: async () => {
                        dispatch(stateOutlet(!state, props.index));
                        SendStateChange(!state, props.index);
                        let date = new Date();
                        if(!state) {
                            dispatch(setTimeOn(date));
                        } else {
                            dispatch(setTimeOn(0));
                            let currentTime = (date-timeOn);
                            let h,m,s;
                            h = Math.floor(currentTime/1000/60/60);
                            m = Math.floor((currentTime/1000/60/60 - h)*60);
                            s = Math.floor(((currentTime/1000/60/60 - h)*60 - m)*60);
                            let spent = (potency/1000)*s;
                            dispatch(arraySpent(spent));
                        }
                    }
                }
            ]
        );
    }

    const changeName = () => {
        dispatch(modalOutletName(!visibility));
    }

    useEffect(async () => {
        try {
            let outletStorageName = await AsyncStorage.getItem(`outletName${props.index}`);
            if(outletStorageName !== null) {
                dispatch(outletName(outletStorageName, props.index));
            } else {
                dispatch(outletName(`Tomada ${props.index}`, props.index));
            }
        } catch (error) {
            console.log(error);
        }
    }, []);

    useEffect(() => {
        setInterval(() => {
            SubscribeDevice(dispatch, stateOutlet, props.index);
        }, 500);
    }, []);

    return (
        <View style={Style.container}>
            <View style={Style.shadowPower}>
                <TouchableOpacity onPress={changeState}>
                    <View style={state == true ? StyleOutlet('#4cb249').outlet : StyleOutlet('red').outlet}>
                        <Image source={Power} style={Style.image} />
                    </View>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={Style.outletName} onPress={changeName}>
                <Text style={Style.fontOutletName}>{nameOutlet}</Text>
                <Icon name="border-color" size={iconSize} color="white" />
            </TouchableOpacity>
            <ChangeName index={props.index} />
        </View>
    )
}

export default Outlet;

const Style = StyleSheet.create({
    image: {
        width: (Dimensions.get('window').width - (Dimensions.get('window').width * 0.6)),
        height: (Dimensions.get('window').width - (Dimensions.get('window').width * 0.6)),
    },
    shadowPower: {
        display: 'flex',
        alignItems:'center',
        justifyContent: 'center',
        width: (Dimensions.get('window').width - (Dimensions.get('window').width * 0.54)),
        height: (Dimensions.get('window').width - (Dimensions.get('window').width * 0.54)),
        backgroundColor: 'rgba(52, 52, 52, 0.4)',
        borderRadius: (Dimensions.get('window').width - (Dimensions.get('window').width * 0.54))/2,
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: (Dimensions.get('window').height - (Dimensions.get('window').height * 0.92)),
        display: 'flex',
        flexDirection: 'row',
    },
    outletName: {
        display: 'flex',
        flexDirection: 'row',
        marginLeft: (Dimensions.get('window').width - (Dimensions.get('window').width * 0.96)),
    },
    fontOutletName: {
        fontSize: 26,
        marginBottom: 10,
        color: 'white',
        fontWeight: 'bold',
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