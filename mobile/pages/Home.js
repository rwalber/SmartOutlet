import
    React,
    { useState, useEffect }
from 'react';

import {
    View,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    Dimensions,
    Alert,
    ActivityIndicator,
} from 'react-native';

import BluetoothSerial from 'react-native-bluetooth-serial';

import logo from '../assets/images/Smart-home-bro.png'

const Home = (props) => {

    const [loadingConnect, setLoadingConnect] = useState(false);

    useEffect(() => {
        verifyBluetoothState();
    }, [])

    const alertEnableBluetooth = () => {
        Alert.alert(
            "Ativar bluetooth",
            "Ative o dispositivo Bluetooth para continuar!",
            [
                {
                    text: "Cancelar",
                    onPress: () => Alert.alert("Atenção, a conexão com a SmartOutlet é realizada através do dispositivo Bluetooth."),
                    style: "cancel",
                },
                {
                    text: "Ativar",
                    onPress: () => enableBluetooth(),
                    style: "default",
                },
            ]
        );
    }

    const verifyBluetoothState = () => {
        BluetoothSerial.isEnabled().then((state) => {
            if (!state) {
                alertEnableBluetooth();
            }
            else if(state) {
                // connectDevice();
            }
        })
    }

    const enableBluetooth = () => {
        BluetoothSerial.enable().then(() => {
            console.log("Bluetooth powered on");
        }).catch((err) => {
            Alert.alert("Erro ao ativar bluetooth: "+err.message);
        });
    }

    const connectDevice = () => {
        setLoadingConnect(true);
        BluetoothSerial.connect("20:16:10:19:62:58")
        .then(() => {
            console.log("connected");
            props.navigation.navigate('OutletList');
        }).catch((err) => {
            setLoadingConnect(false);
            Alert.alert("Erro ao conectar: "+err.message);
        });
    }

    return (
        <View style={Style.container}>
            <View>
                <Text style={Style.title}>Smart-Outlet</Text>
            </View>
            <View>
                <Image source={logo} style={Style.image} />
            </View>
            <View>
                <TouchableOpacity style={Style.button} onPress={connectDevice} >
                    {loadingConnect == true ? <ActivityIndicator color="#00ff00" /> : <Text style={Style.textButton}> Iniciar </Text>}
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Home;

const Style = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },

    title: {
        fontSize: 46,
        fontFamily: 'Roboto',
    },

    image: {
        width: (Dimensions.get('window').width - (Dimensions.get('window').width * 0.2)),
        height: (Dimensions.get('window').width - (Dimensions.get('window').width * 0.2)),
        marginBottom: 60,
        marginTop: 40,
    },

    button: {
        backgroundColor: '#5A7FFD',
        width: (Dimensions.get('window').width - (Dimensions.get('window').width * 0.5)),
        height: 45,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },

    textButton: {
        color: 'white',
        fontSize: 20,
        textTransform: 'uppercase',
        letterSpacing: 2,
    }
})