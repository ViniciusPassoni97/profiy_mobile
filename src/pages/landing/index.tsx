import React from 'react';
import { View,Text,Image } from 'react-native';
import LandingStyle from './style';
import Ilustra from '../../assets/img/Ilustra.png'

export default function Landing() {
    return(
        <View style={LandingStyle.container}>
            <Image source={Ilustra}/>
        </View>
    );
}