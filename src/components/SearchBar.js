import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';

import { Feather } from '@expo/vector-icons';

const SearchBar = ({term, onTermChange, onTermSubmit}) =>{
    return <View style={styles.backgroundStyle}>
        <Feather name="search" style={styles.inputStyle}/>
        <TextInput 
            style={styles.inputStyle} 
            placeholder="Search"
            value={term}
            onChangeText={newTerm => onTermChange(newTerm)}
            autoCapitalize="none"
            autoCorrect={false}
            onEndEditing={() => onTermSubmit()}
        />
    </View>
}

const styles = StyleSheet.create({
    backgroundStyle: {
        marginTop: 10,
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row'
    },
    inputStyle: {
        flex: 1,
        fontSize: 18
    },
    iconStyle: {
        size: 45,
        alignSelf: 'center',
        marginHorizontal: 15
    }
});

export default SearchBar;