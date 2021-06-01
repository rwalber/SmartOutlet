import React from 'react';

import { 
    View, 
    StyleSheet,
    Dimensions,
    ImageBackground
} from 'react-native';

import Outlet from '../components/Outlet';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import toAlert from './Alert';
import Statistics from './Statistics';
import ToSchedule from './ToSchedule';
import About from './About';

import Background from '../assets/images/b1.png';

const List = (props) => {
    const Tab = createBottomTabNavigator();
    return (
        <ImageBackground source={Background} style={OutletListStyle.bgImage}>
            <Outlet navigation={props.navigation} index={1} />
            <Outlet navigation={props.navigation} index={2} />
        </ImageBackground>
    )
}

const OutletList = (props) => {
    const Tab = createBottomTabNavigator();
    const iconSize = (Dimensions.get('window').width - (Dimensions.get('window').width * 0.93));
    return (
        <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused }) => {
            let iconName;
            let colorIcon;
            if (route.name === "Início") {
                iconName = 'home-circle-outline';
                colorIcon = focused ? '#ce8923' : 'gray';
            }
            else if (route.name === 'Programar') {
                iconName = focused ? 'lightbulb-on' : 'lightbulb-on-outline';
                colorIcon = focused ? '#0795c4' : 'gray';
            }
            else if (route.name === 'Alertas') {
                iconName = 'alert-circle-outline';
                colorIcon = focused ? '#cece1a' : 'gray';
            }
            else if (route.name === 'Estatísticas') {
                iconName = 'align-vertical-bottom';
                colorIcon = focused ? '#963939' : 'gray';
            }
            else if (route.name === 'Sobre') {
                iconName = 'information-outline';
                colorIcon = focused ? '#357a30' : 'gray';
            }
            return <Icon name={iconName} size={iconSize} color={colorIcon} />;
            },
        })}
        tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        }}
        >
            <Tab.Screen name="Início" component={List} />
            <Tab.Screen name="Programar" component={ToSchedule} />
            <Tab.Screen name="Alertas" component={toAlert} />
            <Tab.Screen name="Estatísticas" component={Statistics} />
            <Tab.Screen name="Sobre" component={About} />
        </Tab.Navigator>
    )
}

export default OutletList;

const OutletListStyle = StyleSheet.create({
    bgImage: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
    },
})