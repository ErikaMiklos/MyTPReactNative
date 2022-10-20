import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View, StyleSheet } from 'react-native';


const ListScreen = ({ navigation }) => {

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
    <View>
      {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <View style={styles.row}>
              <View >
                <Text style={styles.primaryText}>{item.Title + ' - Année de sortie : ' + item.Year}</Text>
                <Text style={styles.secondaryText}>{'Genre : ' + item.Genre}</Text>
                <Text style={styles.secondaryText}>{'Directeur : ' + item.Director}</Text>
              </View>
            </View>
          )}
        />
      )}
   </View>
  );

};

const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center', padding: 12 },
  primaryText: {
    fontWeight: 'bold',
    fontSize: 14,
    color: 'black',
    marginBottom: 4,
  },
  secondaryText: { color: 'grey' },
})

export default ListScreen;

