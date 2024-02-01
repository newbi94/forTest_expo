import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import TabNavigation from './navigations/Tab.js';
import  Setting  from './Setting.js';
import  Home  from './Home.js';
import  Menu  from './Menu.js'

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      {/* <Stack.Navigator 
      initialRouteName="Home"
      screenOptions={{//모든 페이지에 일괄적용
        title: 'Let Me In', //title
        headerTitleAlign:'center', //header 위치
        headerStyle:{backgroundColor: 'crimson',}, //header 배경색
        headerTintColor: '#fff', //header title 색상
        headerTitleStyle: {fontWeight: 'bold',},  //header 굵기
      }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="Setting" component={Setting} />
      </Stack.Navigator> */}
      
      <TabNavigation />
      
    </NavigationContainer>
    
  );
}


