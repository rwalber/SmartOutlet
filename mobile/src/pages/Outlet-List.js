import React from 'react';

import { 
    View, 
    StyleSheet,
    Text,
    Dimensions
} from 'react-native';

import Outlet from '../components/Outlet';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Alert from './Alert';
import Statistics from './Statistics';
import ToSchedule from './ToSchedule';

const List = (props) => {
    const Tab = createBottomTabNavigator();
    return (
        <View style={OutletListStyle.container}>
            <Text style={OutletListStyle.title}>Gerencie aqui suas Outlets</Text>
            <Outlet navigation={props.navigation} style={OutletListStyle.marginBottom}/>
            {/* <Outlet navigation={props.navigation} style={OutletListStyle.marginBottom}/> */}
        </View>
    )
}

const OutletList = (props) => {
    const Tab = createBottomTabNavigator();
    const iconSize = (Dimensions.get('window').width - (Dimensions.get('window').width * 0.92));
    
    return (
        <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused }) => {
            let iconName;
            let colorIcon;
            if (route.name === "Inicio") {
                iconName = focused ? 'home-circle' : 'home-circle-outline';
                colorIcon = focused ? '#ce8923' : '#ff9d00';
            }
            if (route.name === "Renomear") {
                iconName = focused ? 'pencil-circle' : 'pencil';
                colorIcon = focused ? 'gray' : '#827e7e';
            }
            else if (route.name === 'Programar') {
                iconName = focused ? 'lightbulb-on' : 'lightbulb-on-outline';
                colorIcon = focused ? '#0795c4' : '#00bfff';
            }
            else if (route.name === 'Alertas') {
                iconName = focused ? 'alert-circle' : 'alert-circle-outline';
                colorIcon = focused ? '#cece1a' : '#dfe21d';
            }
            else if (route.name === 'Estatísticas') {
                iconName = focused ? 'align-vertical-bottom' : 'align-vertical-bottom';
                colorIcon = focused ? '#963939' : '#d63939';
            }
            else if (route.name === 'Sobre') {
                iconName = focused ? 'information' : 'information-outline';
                colorIcon = focused ? '#357a30' : '#44c63b';
            }
            return <Icon name={iconName} size={iconSize} color={colorIcon} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
          }}
        >
            <Tab.Screen name="Inicio" component={List} />
            <Tab.Screen name="Renomear" component={ToSchedule} />
            <Tab.Screen name="Programar" component={ToSchedule} />
            <Tab.Screen name="Alertas" component={Alert} />
            <Tab.Screen name="Estatísticas" component={Statistics} />
            <Tab.Screen name="Sobre" component={Statistics} />
        </Tab.Navigator>
    )
}

export default OutletList;

const OutletListStyle = StyleSheet.create({
    container: {
        // flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },

    marginBottom: {
        margin: (Dimensions.get('window').height - (Dimensions.get('window').height * 0.94))
    },

    title: {
        fontSize: 26,
        margin: (Dimensions.get('window').height - (Dimensions.get('window').height * 0.96))
    }
})