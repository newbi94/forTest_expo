import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Mail, Meet, Settings } from '../screens/TabScreen.js';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name='Mail' component={Mail} />
            <Tab.Screen name='Meet' component={Meet} />
            <Tab.Screen name='Settings' component={Settings} />
        </Tab.Navigator>
    );
};

export default Tabs;