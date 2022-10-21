import React from 'react';
import { Button, View, Text } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Accueil Ecran</Text>
        <Button 
          title="Demarrer la Liste des Films" 
          color="#1d96b1"
          onPress={() => navigation.navigate('List', { name: 'List' })} />
      </View>
    );
}

export default HomeScreen;