import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSelector, useDispatch } from 'react-redux';
import { modalOutletName } from '../actions/index';

import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    Dimensions,
} from 'react-native';

import { ChangeName } from './ChangeName'

const OutletOptions = (props) => {

    const iconSize = (Dimensions.get('window').width - (Dimensions.get('window').width * 0.88));
    
    const dispatch = useDispatch();
    
    const visibility = useSelector(state => state.reducer.visibility);
    
    const changeName = () => {
        dispatch(modalOutletName(!visibility));
    }

    return (
        <View style={StyleOutletOptions.rowIcons}>
            <TouchableOpacity onPress={() => changeName()} style={StyleOutletOptions.alignTextIcon}>
                <Icon name="border-color" size={iconSize} color="gray" />
                <Text>Nome</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => props.navigation.navigate('ToSchedule')} style={StyleOutletOptions.alignTextIcon}>
                <Icon name="alarm-check" size={iconSize} color="#00bfff" />
                <Text>Programar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log("Alerta")} style={StyleOutletOptions.alignTextIcon}>
                <Icon name="alert-box" size={iconSize} color="#dfe21d" />
                <Text>Alertas</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log("Estatistica")} style={StyleOutletOptions.alignTextIcon}>
                <Icon name="align-vertical-bottom" size={iconSize} color="#d63939" />
                <Text>Estatísticas</Text>
            </TouchableOpacity>
            <ChangeName />
        </View>
    )
}

export default OutletOptions;

const StyleOutletOptions = StyleSheet.create({
    rowIcons: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: (Dimensions.get('window').width - (Dimensions.get('window').width * 0.25)),
        marginTop: 20
    },
    alignTextIcon: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});