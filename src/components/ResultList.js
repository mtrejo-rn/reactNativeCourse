import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import ResultsDetail from './ResultsDetail';

const ResultList = ({title, results}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(value) => value.id}
        renderItem={({item}) => <ResultsDetail result={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 5,
  },
});
export default ResultList;
