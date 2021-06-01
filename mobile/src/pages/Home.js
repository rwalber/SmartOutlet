import React, { 
    useState, 
    useEffect
} from 'react';

import {
    Text,
    View,
    Image,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    ActivityIndicator,
    ImageBackground,
} from 'react-native';

import { Connect, VerifyStateBluetooth } from '../utils/BluetoothSerial';

import logo from '../assets/images/Logo.png'
import Background from '../assets/images/b1.png';

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
        <ImageBackground source={Background} style={Style.bgImage}>
            <View style={Style.container}>
                <View>
                    <Text style={Style.title}>Smart-Outlet</Text>
                </View>
                <View>
                    <Image source={logo} style={Style.image} resizeMode="contain" />
                </View>
                <View>
                    <TouchableOpacity style={Style.button} onPress={connectDevice} >
                        {loadingConnect == true ? <ActivityIndicator color="blue" /> : <Text style={Style.textButton}> Iniciar </Text>}
                    </TouchableOpacity>
                </View>
                <Text style={Style.textConnect}>{loadingConnect ? 'Aguarde enquanto conectamos a SmartOutlet!' : ''}</Text>
            </View>
        </ImageBackground>
    )
}

export default Home;

const Style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    title: {
        fontSize: 46,
        fontFamily: 'Roboto',
        color: 'white',
        fontWeight: '300',
        marginTop: (Dimensions.get('window').width - (Dimensions.get('window').width * 0.8)),
        marginBottom: (Dimensions.get('window').width - (Dimensions.get('window').width * 0.9))
    },
    image: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width,
        marginBottom: (Dimensions.get('window').width - (Dimensions.get('window').width * 0.85)),
        marginLeft: -(Dimensions.get('window').width - (Dimensions.get('window').width * 0.85))
    },
    button: {
        backgroundColor: 'white',
        width: (Dimensions.get('window').width - (Dimensions.get('window').width * 0.5)),
        height: 45,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textButton: {
        color: 'black',
        fontSize: 20,
        textTransform: 'uppercase',
        letterSpacing: 1,
    },
    textConnect: {
        marginTop: (Dimensions.get('window').height - (Dimensions.get('window').height * 0.985)),
        fontSize: 18,
        color: 'white'
    },
    bgImage: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
    },
})