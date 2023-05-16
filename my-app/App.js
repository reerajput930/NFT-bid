import { StatusBar } from 'expo-status-bar';
import { NavigationContainer,DefaultTheme } from '@react-navigation/native';
import {createStackNavigator} from "@react-navigation/stack"
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home';
import Details from './screens/Details.js';
import {useFonts} from 'expo-font'

//Think of react-navigation as react-router

const Stack = createStackNavigator()
export default function App() {

  //  use font for using the font
  const [loaded , error] = useFonts({
    InterBold : require("./assets/fonts/Inter-Bold.ttf"),
    InterLight : require("./assets/fonts/Inter-Light.ttf"),
    InterMedium : require("./assets/fonts/Inter-Medium.ttf"),
    InterRegular : require("./assets/fonts/Inter-Regular.ttf"),
    InterSemiBold : require("./assets/fonts/Inter-SemiBold.ttf"),
   
  })

  if(!loaded) return null;
  
  return (
    
    // like in react it is browseRoute
    <NavigationContainer>
          <Stack.Navigator
         screenOptions ={{headerShown: false}}
         initialRouteName="Home"
         
          >
            {/* like in react it is route */}
          <Stack.Screen name="Home" component={Home}/>
          <Stack.Screen name="Details" component={Details}/>
         </Stack.Navigator>
    </NavigationContainer>
  );
}
