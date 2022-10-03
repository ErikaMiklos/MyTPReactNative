import React from 'react';
import { Button, View, Text } from 'react-native';

function ListScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>List Ecran</Text>
        <Button title="Details d'un film" onPress={() => navigation.navigate('Details', { name: 'Details' })} />
        <Button title="Return" onPress={() => navigation.goBack()} />
      </View>
    );
}

export default ListScreen;