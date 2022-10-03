import React from 'react';
import { Button, View, Text } from 'react-native';

function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Accueil Ecran</Text>
        <Button title="Demarrer" onPress={() => navigation.navigate('List', { name: 'List' })} />
      </View>
    );
}

export default HomeScreen;