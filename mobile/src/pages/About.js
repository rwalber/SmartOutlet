import React from 'react';

import { 
    View,
    ImageBackground,
    StyleSheet,
    Text,
    Dimensions,
    Image,
    Linking
} from 'react-native' ;

import Background from '../assets/images/b1.png';
import AboutLogo from '../assets/images/About.png';

const About = ()  => {
    return(
        <ImageBackground source={Background} style={StyleAbout.bgImage}>
            <View style={{alignItems: 'center'}}>
                <Image source={AboutLogo} style={StyleAbout.image}/>
            </View>
            <View style={StyleAbout.content}>
                <Text style={StyleAbout.text}>Desenvolvedor: Walber C J Rocha</Text>
                <Text style={StyleAbout.text}>walber_jesus@hotmail.com</Text>
                <Text style={StyleAbout.text}>Licensa de uso: MIT</Text>
                <Text style={StyleAbout.textGit} onPress={() => Linking.openURL('https://github.com/rwalber/SmartOutlet')}>Github do Projeto</Text>
            </View>
        </ImageBackground>
    )
}

export default About;

const StyleAbout = StyleSheet.create({
    bgImage: {
        flex: 1,
        resizeMode: "cover",
    },
    image: {
        width: (Dimensions.get('window').width - (Dimensions.get('window').width * 0.2)),
        height: (Dimensions.get('window').width - (Dimensions.get('window').width * 0.4)),
        marginTop: (Dimensions.get('window').height - (Dimensions.get('window').height * 0.85)),
    },
    content: {
        marginTop: (Dimensions.get('window').height - (Dimensions.get('window').height * 0.94)),
        alignItems: 'center'
    },
    text: {
        marginBottom: (Dimensions.get('window').height - (Dimensions.get('window').height * 0.98)),
        fontSize: 18,
        color: 'white',
    },
    textGit: {
        marginBottom: (Dimensions.get('window').height - (Dimensions.get('window').height * 0.97)),
        fontSize: 18,
        color: 'white',
        textDecorationLine: 'underline'
    }
})