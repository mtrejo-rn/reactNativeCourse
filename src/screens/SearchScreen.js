import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import ResultList from '../components/ResultList';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();
  console.log('RESULTS', results);
  const filterResultsByPrice = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };
  return (
    <View style={styles.container}>
      <SearchBar
        term={searchTerm}
        onSearch={(value) => setSearchTerm(value)}
        termSubmitted={searchApi}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <ResultList
          results={filterResultsByPrice('$')}
          title="Cost Effective"
        />
        <ResultList results={filterResultsByPrice('$$')} title="Bit Pricier" />
        <ResultList results={filterResultsByPrice('$$$')} title="Big Spender" />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: 15,
  },
});

export default SearchScreen;
