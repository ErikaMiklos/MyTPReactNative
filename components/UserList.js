import React from 'react';
import { FlatList } from 'react-native';
import UserRow from './UserRow';

const _renderItem = ({ item }) => (
  <UserRow 
    name={item.name.last} 
    firstName={item.name.first} 
    picture={item.picture.thumbnail} 
    email={item.email} 
  />
)

const UserList = props => (
  <FlatList 
    data={props.data} 
    renderItem={_renderItem} 
  />
)

export default UserList;