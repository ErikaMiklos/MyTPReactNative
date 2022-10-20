import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View, StyleSheet } from 'react-native';

export function FilmList() {

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getMovies = async () => {
    try {
      const response = await fetch('https://gist.githubusercontent.com/saniyusuf/406b843afdfb9c6a86e25753fe2761f4/raw/523c324c7fcc36efab8224f9ebb7556c09b69a14/Film.JSON');
      const json = await response.json();
      setData(json);
    } catch (error) { console.error(error); }
    finally {setLoading(false); }
  }

  useEffect(() => {
    getMovies();
  }, []);


  return (
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? <ActivityIndicator/> : (
        <FlatList
          style = {styles.container}
          data={data}
          renderItem={({ item }) => (
            <View style={styles.row}>
              <Text style={styles.primaryText}>{item.title + ' - Année de sortie : ' + item.year}</Text>
              <Text style={styles.secondaryText}>{'Type : ' + item.genre}</Text>
              <Text style={styles.secondaryText}>{'Directeur : ' + item.director}</Text>
            </View>
          )}
        />
      )}
    </View>
  );

};

const styles = StyleSheet.create({
  container: { flex : 1},
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
