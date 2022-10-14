import React from 'react';
import { Button, View, Text } from 'react-native';


const DetailsScreen = ({ navigation }) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Ecran</Text>
        <Button title="Accueil" onPress={() => navigation.navigate('Home', { name: 'Home' })} />
        <Button title="Return" onPress={() => navigation.goBack()} />
      </View>
    );
}

export default DetailsScreen;