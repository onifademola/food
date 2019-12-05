import React, { useState } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';

import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();
    const filterResultsByPrice = (price) => {
        return results.filter(result => {
            return result.price === price;
        });
    };
    
    return <View style={{ flex: 1 }}>
        <SearchBar 
            term={term} 
            onTermChange={newTerm => setTerm(newTerm)}
            onTermSubmit={() => searchApi(term)}
        />
        
        {errorMessage ? <Text style={{marginLeft:15}}>{errorMessage}</Text> : null }
        
        <ScrollView>
            <ResultsList 
                results={filterResultsByPrice('$')} 
                title="Economical"
            />
            <ResultsList 
                results={filterResultsByPrice('$$')} 
                title="Relative"
            />
            <ResultsList 
                results={filterResultsByPrice('$$$')} 
                title="Gigantic Spend"
            /> 
        </ScrollView>        
    </View>
};

const styles = StyleSheet.create({

});

export default SearchScreen;