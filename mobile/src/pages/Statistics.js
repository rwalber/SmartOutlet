import React, { useState, useEffect } from 'react';

import { 
    Text,
    View,
    TextInput,
    StyleSheet,
    Dimensions,
    ImageBackground
} from 'react-native';

import { useSelector, useDispatch } from 'react-redux';
import { voltageOutlet, potencyOutlet, spentOutlet } from '../actions/index';

import { AreaChart, Grid, XAxis, YAxis } from 'react-native-svg-charts'
import * as shape from 'd3-shape'

import Background from '../assets/images/b1.png';

const Statistics = () => {
    
    const dispatch = useDispatch();
    
    const voltage = useSelector(state => state.reducer.voltage);
    const potency = useSelector(state => state.reducer.potency);
    const arraySpent = useSelector(state => state.reducer.arraySpent);
    
    const spent = (arraySpent.reduce(function(acumulador, valorAtual) {
        return (acumulador + valorAtual);
    }) / (arraySpent.length-1)).toFixed(2);
    
    const axesSvg = {fontSize: 10, fill: 'grey'};
    const verticalContentInset = {top: 20, bottom: 30};
    const xAxisHeight = 30;

    const changeVoltage = (value) => {
        dispatch(voltageOutlet(Number(value)));
    }

    const chansePotency = (value) => {
        dispatch(potencyOutlet(Number(value)));
    }

    return (
        <ImageBackground source={Background} style={StyleStatistics.bgImage}>
            <View style={StyleStatistics.container}>
                <View style={StyleStatistics.graph}>
                    <View style={{justifyContent: 'center'}}>
                        <Text style={{transform: [{ rotate: '270deg'}], marginLeft: -35, marginBottom: 35}}>
                            Consumo (KW/H)
                        </Text>
                    </View>
                    <YAxis
                        data={arraySpent}
                        style={{ marginBottom: xAxisHeight, marginLeft: -30 }}
                        contentInset={verticalContentInset}
                        svg={axesSvg}
                    />
                    <View style={{ flex: 1, marginLeft: 10 }}>
                        <AreaChart
                            style={ { flex: 1 } }
                            data={arraySpent}
                            svg={{fill: 'rgba(134, 65, 244, 0.9)'}}
                            contentInset={{top: 10, bottom: 0}}
                            curve={ shape.curveNatural }
                            animate={true}
                        >
                        <Grid />
                        </AreaChart>
                        <XAxis
                            style={{ marginHorizontal: -10, height: xAxisHeight }}
                            data={arraySpent}
                            formatLabel={(value, index) => index}
                            contentInset={{left: 10, right: 10}}
                            svg={axesSvg}
                        />
                        <View style={{alignItems: 'center', marginBottom: 10, marginTop: -15}}>
                            <Text>
                                Tempo ativo (horas)
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={StyleStatistics.outletFeatureContent}>
                    <Text style={StyleStatistics.textFeature}>
                        Voltagem (V):
                    </Text>
                    <TextInput
                        style={StyleStatistics.inputModal}
                        onChangeText={value => changeVoltage(value)}
                        value={voltage.toString()}
                        placeholder="Insira a voltagem da rede elétrica.."
                        placeholderTextColor="white"
                        keyboardType="numeric"
                    />
                    <Text style={StyleStatistics.textFeature}>
                        Potência (W):
                    </Text>
                    <TextInput
                        style={StyleStatistics.inputModal}
                        onChangeText={value => chansePotency(value)}
                        value={potency.toString()}
                        placeholder="Insira a amperagem ou potência do aparelho.."
                        placeholderTextColor="white"
                        keyboardType="numeric"
                    />
                    <Text style={StyleStatistics.textFeature}>
                        Consumo médio (KW/h):
                    </Text>
                    <TextInput
                        style={StyleStatistics.inputModal}
                        // onChangeText={setChageNameOutlet}
                        value={spent.toString()}
                        placeholder="Estatística de consumo da tomada.."
                        placeholderTextColor="white"
                        keyboardType="numeric"
                        editable={false}
                    />
                </View>
            </View>
        </ImageBackground>
    )
}

export default Statistics;

const StyleStatistics = StyleSheet.create({
    bgImage: {
        flex: 1,
        resizeMode: "cover",
    },
    container: {
        display: 'flex',
        alignItems: 'center',
    },
    graph: {
        flexDirection: 'row',
        width: (Dimensions.get('window').width - (Dimensions.get('window').width * 0.1)),
        height: (Dimensions.get('window').height - (Dimensions.get('window').height * 0.75)),
        marginTop: (Dimensions.get('window').height - (Dimensions.get('window').height * 0.9)),
        backgroundColor: 'white',
    },
    outletFeature: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: (Dimensions.get('window').width - (Dimensions.get('window').width * 0.1)),
    },
    outletFeatureContent: {
        width: (Dimensions.get('window').width - (Dimensions.get('window').width * 0.1)),
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        display: 'flex',
        marginTop: (Dimensions.get('window').height - (Dimensions.get('window').height * 0.95))
    },
    inputModal: {
        padding: 10,
        marginTop: 15,
        borderStyle: 'solid',
        borderColor: 'white',
        borderRadius: 5,
        borderWidth: 2,
        width: (Dimensions.get('window').width - (Dimensions.get('window').width * 0.1)),
        marginBottom: (Dimensions.get('window').height - (Dimensions.get('window').height * 0.98)),
        color: 'white'
    },
    textFeature: {
        color: 'white',
        fontSize: 18,
        fontWeight: '500'
    }
})