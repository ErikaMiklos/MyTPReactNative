import React from 'react'
import { StyleSheet, View, Button, Text } from 'react-native'
import UserList from './UserList'

const sampleData = [
  {
    name: { title: 'mr', first: 'karl', last: 'johnson' },
    email: 'karl.johnson@example.com',
    picture: {
      thumbnail: 'https://randomuser.me/api/portraits/thumb/men/62.jpg',
    },
  },
  {
    name: { title: 'mrs', first: 'asuncion', last: 'gomez' },
    email: 'asuncion.gomez@example.com',
    picture: {
      thumbnail: 'https://randomuser.me/api/portraits/thumb/women/52.jpg',
    },
    nat: 'ES',
  },
  {
    name: { title: 'miss', first: 'gilcenira', last: 'ribeiro' },
    email: 'gilcenira.ribeiro@example.com',
    picture: {
      thumbnail: 'https://randomuser.me/api/portraits/thumb/women/21.jpg',
    },
  },
]

const ListScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <UserList data={sampleData} />
      <Text>List Ecran</Text>
      <Button title="Accueil" onPress={() => navigation.navigate('Details', { name: 'Details' })} />
      <Button title="Return" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({ container: { flex: 1, paddingTop: 20 } })
export default ListScreen;
