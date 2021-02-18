import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Landing from '../pages/landing/index';
import GiveClasses from '../pages/giveClasses/index';

const {Navigator,Screen} = createStackNavigator();

export default function RouteApp() {
    return(
        <NavigationContainer>
            <Navigator screenOptions={{headerShown:false}}>
                <Screen name='Landing' component={Landing}/>
                <Screen name='GiveClasses' component={GiveClasses}/>
            </Navigator>
        </NavigationContainer>
    );
}