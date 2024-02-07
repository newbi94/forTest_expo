import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Root from './navigations/Root';
import Tabs from './navigations/Tabs';
import Stacks from './navigations/Stacks';

export default function App() {

  return (
    <NavigationContainer >
      <Root />
    </NavigationContainer>
    
  );
}


