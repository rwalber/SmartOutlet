import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDispatch } from 'react-redux';
import { changeOutletName } from '../actions/index';

import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    Dimensions,
    Modal,
    TextInput,
} from 'react-native';

const OutletOptions = (props) => {

    const iconSize = (Dimensions.get('window').width - (Dimensions.get('window').width * 0.88));
    const [modalVisible, setModalVisible] = useState(false);
    const [changeNameOutlet, setChageNameOutlet] = useState('');
    const dispatch = useDispatch();

    const setNameOutlet = () => {
        setModalVisible(!modalVisible)
        dispatch(changeOutletName(changeNameOutlet));
    }

    return (
        <View style={StyleOutletOptions.rowIcons}>

            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
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
                            <TouchableOpacity style={StyleOutletOptions.cancelButtonModal} onPress={() => setModalVisible(!modalVisible)}>
                                <Text style={StyleOutletOptions.textCancelButtonModal}>Cancelar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setNameOutlet()}>
                                <Text style={StyleOutletOptions.textConfirmButtonModal}>OK</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>

            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)} style={StyleOutletOptions.alignTextIcon}>
                <Icon name="border-color" size={iconSize} color="gray" />
                <Text>Nome</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => props.navigation.navigate('ToSchedule')} style={StyleOutletOptions.alignTextIcon}>
                <Icon name="alarm-check" size={iconSize} color="#efe409" />
                <Text>Programar</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => console.log("estatistica")} style={StyleOutletOptions.alignTextIcon}>
                <Icon name="align-vertical-bottom" size={iconSize} color="#00bfff" />
                <Text>Estatísticas</Text>
            </TouchableOpacity>
        </View>
    )
}

export default OutletOptions;

const StyleOutletOptions = StyleSheet.create({
    rowIcons: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: (Dimensions.get('window').width - (Dimensions.get('window').width * 0.4)),
        marginTop: 20
    },
    alignTextIcon: {
        justifyContent: 'center',
        alignItems: 'center',
    },
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