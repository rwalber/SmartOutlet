import React, { useState } from 'react';

import {
    View,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    Dimensions,
    Modal,
    TextInput
} from 'react-native';

import BluetoothSerial from 'react-native-bluetooth-serial';

import Power from '../assets/images/power.png'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const OutletList = () => {

    const iconSize = (Dimensions.get('window').width - (Dimensions.get('window').width * 0.88));

    const [stateOutletOne, setStateOutletOne] = useState(false);

    const [stateOutletTwo, setStateOutletTwo] = useState(false);

    const [nameOutletOne, setNameOutletOne] = useState('');

    const [nameOutletTwo, setNameOutletTwo] = useState('');

    const [changeNameOutletOne, setChageNameOutletOne] = useState('');

    const [changeNameOutletTwo, setChageNameOutletTwo] = useState('');

    const [modalVisibleOne, setModalVisibleOne] = useState(false);

    const [modalVisibleTwo, setModalVisibleTwo] = useState(false);

    const power = () => {
        BluetoothSerial.write("t")
          .then((res) => {
            setStateOutletOne(!stateOutletOne);
            console.log(res);
            console.log('Successfuly wrote to device')
            // this.setState({ connected: true })
          })
          .catch((err) => console.log(err.message))
    }

    return (
        <View style={Style.container}>

            <View style={Style.borderOutlets}>

                <View style={Style.outlet}>
                    <View>
                        <Text style={Style.nameOutlet}>{nameOutletOne}</Text>
                    </View>

                    <Modal
                        animationType="fade"
                        transparent={true}
                        visible={modalVisibleOne}
                        onRequestClose={() => {
                            setModalVisibleOne(!modalVisibleOne);
                        }}
                    >
                        <View style={Style.modalCotainer}>
                            <View style={Style.modalView}>
                                <Text style={Style.titleModal}>Defina um nome personalizado</Text>
                                <TextInput
                                    style={Style.inputModal}
                                    onChangeText={setChageNameOutletOne}
                                    value={changeNameOutletOne}
                                    placeholder="Insira um nome para sua Outlet!"
                                />
                                <View style={Style.containerButtonModal}>
                                    <TouchableOpacity style={Style.cancelButtonModal} onPress={() => setModalVisibleOne(!modalVisibleOne)}>
                                        <Text style={Style.textCancelButtonModal}>Cancelar</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => { setNameOutletOne(changeNameOutletOne), setModalVisibleOne(!modalVisibleOne) }}>
                                        <Text style={Style.textConfirmButtonModal}>OK</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </Modal>

                    <TouchableOpacity onPress={power}>
                        <View style={stateOutletOne == true ? StyleOutlet('#5ef75b').outlet : StyleOutlet('red').outlet}>
                            <Image source={Power} style={Style.image} />
                        </View>
                    </TouchableOpacity>

                    <View style={Style.rowIcons}>

                        <TouchableOpacity onPress={() => setModalVisibleOne(true)} style={Style.alignTextIcon}>
                            <Icon name="border-color" size={iconSize} color="gray" />
                            <Text>Nome</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => console.log("timer")} style={Style.alignTextIcon}>
                            <Icon name="alarm-check" size={iconSize} color="#efe409" />
                            <Text>Programar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => console.log("estatistica")} style={Style.alignTextIcon}>
                            <Icon name="align-vertical-bottom" size={iconSize} color="#00bfff" />
                            <Text>Estatísticas</Text>
                        </TouchableOpacity>

                    </View>
                </View>


                {/* ----------------------------------------------- */}

                <View style={Style.outlet}>

                    <View>
                        <Text style={Style.nameOutlet}>{nameOutletTwo}</Text>
                    </View>

                    <Modal
                        animationType="fade"
                        transparent={true}
                        visible={modalVisibleTwo}
                        onRequestClose={() => {
                            setModalVisibleTwo(!modalVisibleTwo);
                        }}
                    >
                        <View style={Style.modalCotainer}>
                            <View style={Style.modalView}>
                                <Text style={Style.titleModal}>Defina um nome personalizado</Text>
                                <TextInput
                                    style={Style.inputModal}
                                    onChangeText={setChageNameOutletTwo}
                                    value={changeNameOutletTwo}
                                    placeholder="Insira um nome para sua Outlet!"
                                />
                                <View style={Style.containerButtonModal}>
                                    <TouchableOpacity style={Style.cancelButtonModal} onPress={() => setModalVisibleTwo(!modalVisibleTwo)}>
                                        <Text style={Style.textCancelButtonModal}>Cancelar</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => { setNameOutletTwo(changeNameOutletTwo), setModalVisibleTwo(!modalVisibleTwo) }}>
                                        <Text style={Style.textConfirmButtonModal}>OK</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </Modal>

                    <TouchableOpacity onPress={() => setStateOutletTwo(!stateOutletTwo)}>
                        <View style={stateOutletTwo == true ? StyleOutlet('#5ef75b').outlet : StyleOutlet('red').outlet}>
                            <Image source={Power} style={Style.image} />
                        </View>
                    </TouchableOpacity>

                    <View style={Style.rowIcons}>

                        <TouchableOpacity onPress={() => setModalVisibleTwo(true)} style={Style.alignTextIcon}>
                            <Icon name="border-color" size={iconSize} color="gray" />
                            <Text>Nome</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => console.log("timer")} style={Style.alignTextIcon}>
                            <Icon name="alarm-check" size={iconSize} color="#efe409" />
                            <Text>Programar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => console.log("estatistica")} style={Style.alignTextIcon}>
                            <Icon name="align-vertical-bottom" size={iconSize} color="#00bfff" />
                            <Text>Estatísticas</Text>
                        </TouchableOpacity>

                    </View>

                </View>
            </View>

        </View>

    )
}

export default OutletList;

const Style = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },

    borderOutlets: {
        borderWidth: 2,
        borderStyle: 'dotted',
        borderRadius: 1,
        borderColor: '#938f8f',
        padding: (Dimensions.get('window').height - (Dimensions.get('window').height * 0.94))
    },

    outlet: {
        marginBottom: (Dimensions.get('window').height - (Dimensions.get('window').height * 0.94)),
        justifyContent: 'center',
        alignItems: 'center',
    },

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

    image: {
        width: (Dimensions.get('window').width - (Dimensions.get('window').width * 0.6)),
        height: (Dimensions.get('window').width - (Dimensions.get('window').width * 0.6)),
    },

    nameOutlet: {
        fontSize: 26,
        marginBottom: 10
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