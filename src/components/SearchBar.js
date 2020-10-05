import React from 'react';
import {StyleSheet, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign';
const SearchBar = ({term, onSearch, termSubmitted}) => {
  return (
    <View style={styles.background}>
      <Icon name="search1" style={styles.iconStyle} />
      <TextInput
        style={styles.inputStyle}
        placeholder="Search"
        autoCapitalize="none"
        autoCorrect={false}
        value={term}
        onEndEditing={termSubmitted}
        onChangeText={onSearch}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  inputStyle: {
    marginLeft: 10,
    flex: 1,
  },
  iconStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: '#000000',
  },
});
