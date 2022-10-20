import React from 'react';
import { Button, View, Text, ScrollView, StyleSheet, Image } from 'react-native';

const Separator = () => (
  <View style={styles.separator} />
);

const DetailsScreen = ({ route, navigation }) => {
  const film = route.params.item;
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.row}>
            <Image style={styles.picture} source={{ uri: film.Images[0] }} />
            <Text style={styles.primaryText}>Titre: {film.Title}</Text>
          </View>
          <Separator />
          <Text style={styles.secondaryText}>Année de sortie: {film.Year}</Text>
          <Text style={styles.secondaryText}>Genre: {film.Genre}</Text>
          <Text style={styles.secondaryText}>Directeur: {film.Director}</Text>
          <Text style={styles.secondaryText}>Acteurs principaux: {film.Actors}</Text>
          <Text style={styles.secondaryText}>Metascore: {film.Metascore}</Text>
          <Text style={styles.secondaryText}>Note imdb: {film.imdbRating}</Text>
          <Text style={styles.secondaryText}>Votes imdb: {film.imdbVotes}</Text>
          <Separator />
          <Button 
          title="Accueil" 
          color="#f194ff"
          onPress={() => navigation.navigate('Home', { name: 'Home' })} />
          <Button title="Return" onPress={() => navigation.goBack()} />
        </ScrollView>
      </View>
    );
}

const styles = StyleSheet.create({
  row: { 
    flexDirection: 'row', 
    alignItems: 'center',
    padding: 12 
  },
  container: { 
    alignItems: 'center', 
    justifyContent: 'center', 
    padding: 10 
  },
  picture: { 
    alignItems: 'center',
    width: 50, 
    height: 50, 
    borderRadius: 5, 
    marginBottom: 5 
  },
  primaryText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'black',
    marginBottom: 4,
    marginLeft: 20
  },
  secondaryText: { color: 'grey' },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
})

export default DetailsScreen;