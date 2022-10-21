import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { SearchBar } from 'react-native-elements';

const ListScreen = ({ navigation }) => {

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [text, setText] = useState('');

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

  const search = (text) => {
    setText(text);

    setFilteredData(
      data.filter( item => item.Title.toLowerCase() === text.toLowerCase() )
    );

  };

  const Separator = () => (
    <View style={styles.separator} />
  );

  return (
    isLoading ? (<ActivityIndicator/>) : (
      <View style={styles.container}>
        <SearchBar
          round={true}
          lightTheme={true}
          placeholder="Recherche par titre"
          autoCapitalize='none'
          autoCorrect={false}
          onChangeText={text => search(text)}
          value={text}
        />
        <FlatList
          data={filteredData && filteredData.length > 0 ? filteredData : data}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate('Details', {item:item})}
            >
            <Text style={styles.primaryText}>{item.Title}</Text>
            <Text style={styles.secondaryText}>{'Année de sortie : ' + item.Year}</Text>
            <Text style={styles.secondaryText}>{'Genre : ' + item.Genre}</Text>
            <Text style={styles.secondaryText}>{'Directeur : ' + item.Director}</Text>
            <Separator />
            </TouchableOpacity>
          )}
        />
      </View>
    )
  );

};

const styles = StyleSheet.create({
  container: { 
    alignItems: 'center', 
    justifyContent: 'center', 
    padding: 10 
  },
  filterBar: {
    flexDirection: 'row',
    // flex: 0.2,
    height: 40,
  },
  row: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    padding: 12 
  },
  primaryText: {
    textAlign: 'center',
    lineHeight: 30,
    backgroundColor: '#dfac34fe',
    fontWeight: 'bold',
    fontSize: 14,
    color: 'black',
    marginBottom: 4,
  },
  secondaryText: { 
    color: 'black' 
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
})

export default ListScreen;

