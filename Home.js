import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Home() {


return (
<View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
      <TouchableOpacity>
        <Text>menu</Text>  
      </TouchableOpacity>  
      <Text>Let Me In!</Text>
      <TouchableOpacity>
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