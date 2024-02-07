import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {Text, TouchableOpacity } from "react-native";
import {StackOne, StackTwo, StackThree } from '../screens/StackScreen';

const NativeStack = createNativeStackNavigator();

const Stacks = () => (
    <NativeStack.Navigator>
        <NativeStack.Screen name="StackOne" component={StackOne}/>
        <NativeStack.Screen name="StackTwo" component={StackTwo}/>
        <NativeStack.Screen name="StackThree" component={StackThree}/>
    </NativeStack.Navigator>
)

export default Stacks;