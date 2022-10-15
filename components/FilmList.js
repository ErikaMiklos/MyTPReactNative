import React from 'react';
import { FlatList } from 'react-native';
import FilmRow from './FilmRow';

const _renderItem = ({ item }) => (
  <FilmRow 
    title={item.Title} 
    year={item.Year} 
    genre={item.Genre}   
    director={item.Director}  
  />
)


const FilmList = props => (
  <FlatList 
    data={props.data} 
    renderItem={_renderItem} 
    keyExtractor={item => item.imdbID}
  />
)

export default FilmList;