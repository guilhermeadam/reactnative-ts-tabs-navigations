import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './pages/Home';
import Contacts from './pages/Contacts';
import Settings from './pages/Settings';

const Tab = createBottomTabNavigator();

export default function Routes(){
    return (
        <NavigationContainer>
            <Tab.Navigator 
                initialRouteName="Home"
                tabBarOptions={{ 
                    activeTintColor: 'tomato', 
                    inactiveTintColor: 'gray',
                    // style: {
                    //     backgroundColor: '#633689',
                    // },
                    labelStyle: { 
                        fontSize: 20,
                        justifyContent: 'center',
                        textAlign: 'center',
                    },
                    // tabStyle : {
                    //     borderBottomColor: 'tomato',
                    //     borderBottomWidth: 2,
                    // },
                }}>
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Contacts" component={Contacts} />
                <Tab.Screen name="Settings" component={Settings} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}