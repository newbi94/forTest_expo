import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Setting({navigation, route}) {
    return (
        <View>
            <Text>setting screen {route.params.smile}</Text>
        </View>
    )
};