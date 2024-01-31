import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Home({navigation}) {


return (
<View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
      <TouchableOpacity
      onPress={() => navigation.navigate('Menu')}>
        <Text>menu</Text>  
      </TouchableOpacity>  
      <Text>Let Me In!</Text>
      <TouchableOpacity 
      onPress={() => 
        navigation.navigate('Setting',{smile : "😊"})}
        //{key : value} 형태로 Setting 스크린에 넘겨주고 route로 받는다
      >
        <Text>setting</Text>  
      </TouchableOpacity>  
      </View>
      <View style={styles.btnTop}>
      <TouchableOpacity>
        <Text>menu</Text>  
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>menu</Text>  
      </TouchableOpacity>  
      <TouchableOpacity>
        <Text>menu</Text>  
      </TouchableOpacity>  
      <TouchableOpacity>
        <Text>menu</Text>  
      </TouchableOpacity>     
      </View>    
    </View>
)
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingHorizontal: 20,
    },
    header: {
      justifyContent: "space-between",
      flexDirection: "row",
      marginTop: 10,
    },
    btnTop: {
      justifyContent: "space-between",
      flexDirection: "row",
      marginTop: 20,
    }
  });
  