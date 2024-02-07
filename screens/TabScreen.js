import React from 'react';
import styled from 'styled-components/native';
import { TouchableOpacity, Text } from 'react-native';

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const StyledText = styled.Text`
    font-size: 30px;
`;

export const Mail = ({navigation:{navigate}}) => {
    return (
        <TouchableOpacity 
    onPress={() => navigate("Stacks", {screen:"StackTwo"})}
    style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>go</Text>
        </TouchableOpacity>
    )
};

export const Meet = () => {
    return (
        <Container>
            <StyledText>Meet</StyledText>
        </Container>
    )
};

export const Settings = () => {
    return(
        <Container>
            <StyledText>Settings</StyledText>
        </Container>
    )
};

