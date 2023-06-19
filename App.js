

import Historique from './components/Historique'
import Policier from './components/Policier'
import Romance from './components/Romance'
import SF from './components/SF'
import Tous from './components/Tous'
import Accueil from './components/Accueil'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import { StyleSheet, Text, View, Pressable, ScrollView, Modal, TextInput } from 'react-native';


export default function App() {

  const Stack = createNativeStackNavigator()

  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Accueil" component={Accueil}/>
        <Stack.Screen name="Tous" component={Tous}/>
        <Stack.Screen name="Historique" component={Historique}/>
        <Stack.Screen name="Policier" component={Policier}/>
        <Stack.Screen name="SF" component={SF}/>
        <Stack.Screen name="Romance" component={Romance}/>
      </Stack.Navigator>
    </NavigationContainer>

  );
  
}

