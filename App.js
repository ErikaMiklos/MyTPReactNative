import React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Accueil Ecran</Text>
      <Button title="Demarrer" onPress={() => navigation.navigate('List', { name: 'List' })} />
    </View>
  );
}

function ListScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>List Ecran</Text>
      <Button title="Details d'un film" onPress={() => navigation.navigate('Details', { name: 'Details' })} />
      <Button title="Return" onPress={() => navigation.goBack()} />
    </View>
  );
}

function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Ecran</Text>
      <Button title="Accueil" onPress={() => navigation.navigate('Home', { name: 'Home' })} />
      <Button title="Return" onPress={() => navigation.goBack()} />
    </View>
  );
}


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="List" component={ListScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

