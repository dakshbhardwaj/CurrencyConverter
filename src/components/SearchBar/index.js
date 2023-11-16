import React, {useCallback, useRef, useState} from 'react';
import {TextInput, View, Image, TouchableOpacity} from 'react-native';
import {close} from '../../assets';
const {default: colors} = require('../../utils/colors');
const {fontPtToPx, layoutPtToPx} = require('../../utils/responsiveUI');
const {useStyleProcessor} = require('../../hooks/useStyleProcessor');

const SearchBar = ({onSearchQueryChange}) => {
  const localStyle = useStyleProcessor(styles, 'SearchBar');
  const [query, setQuery] = useState('');
  const textInputRef = useRef(null);

  const clearQuery = useCallback(() => {
    setQuery('');
    onSearchQueryChange('');
  }, [onSearchQueryChange]);

  const updateQuery = useCallback(
    text => {
      setQuery(text);
      onSearchQueryChange(text);
    },
    [onSearchQueryChange],
  );

  return (
    <View style={localStyle.searchContainer}>
      <TextInput
        ref={textInputRef}
        style={localStyle.input}
        value={query}
        cursorColor={colors.SherpaBlue}
        placeholder={'Search Currency'}
        placeholderTextColor={colors.SherpaBlue50}
        onChangeText={updateQuery}
      />
      {query.length > 0 && (
        <TouchableOpacity
          onPress={clearQuery}
          style={localStyle.crossContainer}>
          <Image source={close} style={localStyle.crossButtonStyle} />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = {
  searchContainer: {
    marginTop: layoutPtToPx(10),
    marginHorizontal: layoutPtToPx(20),
    borderWidth: 1,
    borderRadius: layoutPtToPx(4),
    paddingHorizontal: layoutPtToPx(10),
    borderColor: colors.SherpaBlue50,
    backgroundColor: colors.White,
    flexDirection: 'row',
    alignItems: 'center',
    height: layoutPtToPx(36),
    tablet: {
      marginTop: layoutPtToPx(20),
    },
  },
  crossContainer: {
    padding: layoutPtToPx(5),
  },
  crossButtonStyle: {height: layoutPtToPx(12), width: layoutPtToPx(12)},

  input: {
    paddingTop: 0,
    paddingBottom: 0,
    height: '100%',
    color: colors.SherpaBlue,
    fontSize: fontPtToPx(14),
    letterSpacing: 0.32,
    flex: 1,
  },
};

export default SearchBar;
