import React from 'react';
import { View,Text,Image,TouchableOpacity } from 'react-native';
import LandingStyle from './style';
import Ilustra from '../../assets/img/Ilustra.png'
import studyIcon from '../../assets/img/estudarIcon.png';
import studyAulas from '../../assets/img/daraulas.png';
import studyConnections from '../../assets/img/connections.png';
import {useNavigation} from '@react-navigation/native';
import {RectButton} from 'react-native-gesture-handler';

export default function Landing() {
    const navigation = useNavigation();

    function HandleNavigation() {
        navigation.navigate('GiveClasses');
    }

    return(
        <View style={LandingStyle.container}>
            <Image source={Ilustra} style={LandingStyle.banner}/>
            <Text style={LandingStyle.title}>
                Seja bem vindo, {'\n'}
                <Text style={LandingStyle.titleBold}>
                    O que deseja fazer ?
                </Text>
            </Text>
            <View style={LandingStyle.buttonContainer}>
                <RectButton style={[LandingStyle.button,LandingStyle.buttonPrimary]}>
                    <Image source={studyIcon}/>
                    <Text style={LandingStyle.buttonText}>Estudar</Text>
                </RectButton>
                <RectButton onPress={HandleNavigation} style={[LandingStyle.button,LandingStyle.buttonSecondary]}>
                    <Image source={studyAulas}/>
                    <Text style={LandingStyle.buttonText}>Dar Aulas</Text>
                </RectButton>
            </View>
            <Text style={LandingStyle.totalConnections}>
                Total de Conexões 25 {'\n'}
                já realizadas  {' '}
                <Image style={LandingStyle.connections} source={studyConnections}/>
            </Text>
        </View>
    );
}