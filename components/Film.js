import React from 'react';
import {Text, ScrollView} from 'react-native';

const Film = props => {
    return (
        <ScrollView>
            <Text style={{padding:10}}>
                {props.film.title}
            </Text>
        </ScrollView>
    )
}

export default Film;