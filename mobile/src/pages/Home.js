import
    React,
    { useState, useEffect }
from 'react';

import {
    Text,
    View,
    Image,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    ActivityIndicator,
} from 'react-native';

import logo from '../assets/images/Smart-home-bro.png'

import { Connect, VerifyStateBluetooth } from '../components/BluetoothSerial';

const Home = (props) => {
    
    const [loadingConnect, setLoadingConnect] = useState(false);
    
    useEffect(() => {
        VerifyStateBluetooth();
    }, []);
    
    const connectDevice = async () => {
        setLoadingConnect(true);
        Connect().then((result) => {
            if(result) {
                props.navigation.navigate('OutletList');
            } else {
                setLoadingConnect(false);
            }
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
            <Text style={Style.textConnect}>{loadingConnect ? 'Aguarde enquanto conectamos a SmartOutlet!' : ''}</Text>
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
    },
    textConnect: {
        marginTop: (Dimensions.get('window').height - (Dimensions.get('window').height * 0.985)),
        fontSize: 18
    }
})