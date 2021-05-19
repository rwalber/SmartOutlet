import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
    Modal,
    View,
    TextInput,
    TouchableOpacity,
    StyleSheet, 
    Dimensions,
    Text,
} from 'react-native';

import { useSelector, useDispatch } from 'react-redux';
import { outletName, modalOutletName } from '../actions/index';

export const ChangeName = () => {

    const visibility = useSelector(state => state.reducer.visibility);
    
    const dispatch = useDispatch();
    const [modalVisible, setModalVisible] = useState(false);
    const [changeNameOutlet, setChageNameOutlet] = useState('');

    const setNameOutlet = async () => {
        dispatch(modalOutletName(!visibility));
        dispatch(outletName(changeNameOutlet));
        try {
            await AsyncStorage.setItem('outletName', changeNameOutlet);
        } catch (error) {
            console.log(error);
        }
    }
    
    const closeModal = () => {
        dispatch(modalOutletName(!visibility));
    }

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={visibility}
            onRequestClose={() => {
                setModalVisible(!modalVisible);
            }}
        >
            <View style={StyleOutletOptions.modalCotainer}>
                <View style={StyleOutletOptions.modalView}>
                    <Text style={StyleOutletOptions.titleModal}>Defina um nome personalizado</Text>
                    <TextInput
                        style={StyleOutletOptions.inputModal}
                        onChangeText={setChageNameOutlet}
                        value={changeNameOutlet}
                        placeholder="Insira um nome para sua Outlet!"
                    />
                    <View style={StyleOutletOptions.containerButtonModal}>
                        <TouchableOpacity style={StyleOutletOptions.cancelButtonModal} onPress={() => closeModal()}>
                            <Text style={StyleOutletOptions.textCancelButtonModal}>Cancelar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setNameOutlet()}>
                            <Text style={StyleOutletOptions.textConfirmButtonModal}>OK</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const StyleOutletOptions = StyleSheet.create({
    modalCotainer: {
        marginTop: (Dimensions.get('window').height - (Dimensions.get('window').height * 0.7))
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    titleModal: {
        fontSize: 20
    },
    inputModal: {
        padding: 10,
        marginTop: 15,
        borderStyle: 'solid',
        borderColor: 'black',
        borderRadius: 5,
        borderWidth: 1,
        width: (Dimensions.get('window').width - (Dimensions.get('window').width * 0.3)),
    },
    containerButtonModal: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: 30
    },
    cancelButtonModal: {
        marginRight: 40
    },
    textCancelButtonModal: {
        color: 'red',
        fontSize: 16
    },
    textConfirmButtonModal: {
        color: '#00bfff',
        fontSize: 16
    },
});