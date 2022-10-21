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
            <Text style={styles.title}>{film.Title}</Text>
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
            color="#9c3a96"
            onPress={() => navigation.navigate('Home', { name: 'Home' })} 
          />
          <Button 
            title="Return" 
            color="#227476"
            onPress={() => navigation.goBack()} 
          />
        </ScrollView>
      </View>
    );
}

const styles = StyleSheet.create({
  row: { 
    backgroundColor: '#227476',
    flexDirection: 'row', 
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12 
  },
  container: { 
    alignItems: 'center', 
    justifyContent: 'center', 
    padding: 10 
  },
  picture: { 
    width: 50, 
    height: 50, 
    borderRadius: 5 
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'white',
    marginLeft: 30
  },
  secondaryText: { color: 'black' },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#302f2f',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
})

export default DetailsScreen;