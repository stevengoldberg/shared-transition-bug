import { View, Button } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Animated from 'react-native-reanimated';

const Stack = createNativeStackNavigator();

function Screen1({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center'
      }}>
      <Animated.View
        style={{ width: 150, height: 150, backgroundColor: 'green' }}
        sharedTransitionTag="sharedTag"
      />
      <Button title="Screen2" onPress={() => navigation.navigate('Screen2')} />
    </View>
  );
}

function Screen2({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center'
      }}>
      <Animated.View
        style={{ width: 300, height: 300, backgroundColor: 'green' }}
        sharedTransitionTag="sharedTag"
      />
      <Button title="Screen1" onPress={() => navigation.navigate('Screen1')} />
    </View>
  );
}

export default function SharedElementExample() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Screen1" screenOptions={{ animation: 'fade' }}>
        <Stack.Screen name="Screen1" component={Screen1} />
        <Stack.Screen name="Screen2"
          component={Screen2}
          options={{ presentation: 'transparentModal' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
