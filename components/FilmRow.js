import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

// définition de l’apparence d’un item
const FilmRow = (props) => {
  return (
    <View style={styles.row}>
      <Image style={styles.picture} source={{ uri: props.poster }} />
      <View>
        <Text style={styles.primaryText}>{props.title + ' - Année de sortie : ' + props.year}</Text>
        <Text style={styles.secondaryText}>{'Type : ' + props.genre}</Text>
        <Text style={styles.secondaryText}>{'Directeur : ' + props.director}</Text>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center', padding: 12 },
  picture: { width: 50, height: 50, borderRadius: 25, marginRight: 18 },
  primaryText: {
    fontWeight: 'bold',
    fontSize: 14,
    color: 'black',
    marginBottom: 4,
  },
  secondaryText: { color: 'grey' },
})

export default FilmRow;