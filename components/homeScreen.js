import React from 'react';
import { Button, View, Text } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Consulter la liste des films on clickant le bouton desous:</Text>
        <Button 
          title="Demarrer l'API" 
          color="#1d96b1"
          onPress={() => navigation.navigate('List', { name: 'List' })} />
      </View>
    );
}

export default HomeScreen;