import React from 'react';
import {
    View,
    Text,
    ImageBackground
} from 'react-native';
import GiveClassStyle from './style';
import Background from '../../assets/img/background.png'
import { RectButton } from 'react-native-gesture-handler';
import {useNavigation} from'@react-navigation/native';

export default function GiveClass() {
    const {goBack} = useNavigation();

    function handleClick() {
        goBack();
    }
    return(
        <View style={GiveClassStyle.container}>
            <ImageBackground resizeMode='contain' source={Background} style={GiveClassStyle.containerBackground}> 
                <Text style={GiveClassStyle.title}>Quer ser um Proffy?</Text>
                <Text style={GiveClassStyle.description}>Para começar, você precisa
                se cadastrar como professor
                na nossa plataforma web.
                </Text>
            </ImageBackground>
            <RectButton onPress={handleClick} style={GiveClassStyle.okButton}>
                <Text style={GiveClassStyle.okButtonText}>Tudo Bem</Text>
            </RectButton>
        </View>
    );
}